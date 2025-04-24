import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { $Enums } from '../../prisma/__generated__';
import UserRole = $Enums.UserRole;
import { Request } from 'express';

@Injectable()
export class UserService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user)
      throw new NotFoundException(
        `Пользователь с идентификатором ${id} не найден!`,
      );
    return user;
  }

  public async findMyEmail(email: string) {
    const user = this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user)
      throw new NotFoundException(
        `Пользователь с почтой ${email} не был найден!`,
      );

    return user;
  }

  public async getAllUsers(): Promise<any> {
    const data = this.prismaService.user.findMany({});
    if (!data) throw new NotFoundException(`Пользователи не найдены!`);
    return data;
  }

  public async getUserInfo(role: UserRole, email: string, request: Request) {
    const data = this.findMyEmail(email);
    if (!data) throw new NotFoundException(`Пользователь не найден!`);
    return data;
  }

  public async deleteUser(id: string) {
    const data = this.prismaService.user.delete({
      where: { id },
    });
    if (!data) throw new NotFoundException(`Пользователь не найден!`);
    return data;
  }

  public async create(
    email: string,
    password: string,
    userName: string,
    role: UserRole,
  ) {
    const user = this.prismaService.user.create({
      data: { email, password, userName, role },
    });
    return user;
  }
}
