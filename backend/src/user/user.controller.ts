import {Body, Controller, Delete, HttpCode, HttpStatus, Post, Req,} from '@nestjs/common';
import {UserService} from './user.service';
import {WhoAmIDto} from './dto/whoAmI.dto';
import {UserDeleteDto, UserInfoDto} from './dto/userInfo.dto';
import {Request} from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('whoAmI')
  @HttpCode(HttpStatus.OK)
  public async whoAmI(@Body() dto: WhoAmIDto) {
    return await this.userService.findById(dto.userId);
  }

  @Post('allUsers')
  @HttpCode(HttpStatus.OK)
  public async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Post('userInfo')
  @HttpCode(HttpStatus.OK)
  public async getUserInfo(@Body() dto: UserInfoDto, @Req() request: Request) {
    return await this.userService.getUserInfo(dto.role, dto.email, request);
  }

  @Delete('deleteUser')
  @HttpCode(HttpStatus.OK)
  public async deleteUser(@Body() dto: UserDeleteDto) {
    return await this.userService.deleteUser(dto.id);
  }
}
