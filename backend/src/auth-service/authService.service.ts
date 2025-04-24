import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '../user/user.service';
import { User } from '../../prisma/__generated__';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async register(req: Request, dto: RegisterDto) {
    const isExist = await this.userService.findMyEmail(dto.email);

    if (isExist) {
      throw new ConflictException(
        `Пользователь с email ${dto.email} уже существует`,
      );
    }

    const newUser = await this.userService.create(
      dto.email,
      dto.password,
      dto.name,
      'user',
    );

    return newUser;
  }

  public async login(req: Request, response: Response, dto: LoginDto) {
    const user = await this.userService.findMyEmail(dto.email);

    if (!user || !user.password) {
      throw new NotFoundException('Пользователь не был найден');
    }

    if (dto.password !== user.password) {
      throw new UnauthorizedException('Введён неверный пароль!');
    }

    return user;
  }

  public async logout(req: Request, res: Response): Promise<void> {
    return new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          return reject(
            new InternalServerErrorException(
              'Произошла ошибка при удалении сессии. Пожалуйста, повторите ваш запрос позже.',
            ),
          );
        }
        resolve();
      });
    });
  }

  private generateToken(user: User) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
