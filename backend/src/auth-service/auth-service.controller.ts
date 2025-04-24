import {Body, Controller, HttpCode, HttpStatus, Post, Req, Res,} from '@nestjs/common';
import {AuthService} from './authService.service';
import {RegisterDto} from './dto/register.dto';
import {LoginDto} from './dto/login.dto';

import {Request, Response} from 'express';

@Controller('auth')
export class AppController {
  public constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  public async register(@Req() req: Request, @Body() dto: RegisterDto) {
    return this.authService.register(req, dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(
    @Req() req: Request,
    @Res() response: Response,
    @Body() dto: LoginDto,
  ) {
    const result = await this.authService.login(req, response, dto);
    return response.send(result);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  public async logout(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.logout(req, res);
  }
}
