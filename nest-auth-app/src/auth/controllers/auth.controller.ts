//import { RoleGuard } from './../role.guard';
// import { JwtGuard } from './jwt.guard';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards/jwt.guard';
import { AuthService } from '../services/auth.service';
// import { Role } from '../role.decorator';
import { RoleGuard } from '../guards/role.guard';
import { Role } from '../../shared/decorators/role.decorator';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    return this.authService.login(body.username, body.password);
  }
  // @Post('refreshToken')
  // refreshAccessToken(@Body() token: KeycloakToken) {
  //   return this.authService.refreshAccessToken(token.refresh_token);
  // }
  // @Role('admin')
  // @UseGuards(JwtGuard, RoleGuard)
  // @Get('test-auth')
  // test(@Req() req) {
  //   console.log(req.user);
  //   return {
  //     name: 'Juan Carlos',
  //   };
  // }
  @Role('admin')
  @UseGuards(JwtGuard, RoleGuard)
  @Get('test-auth')
  test(@Req() req) {
    console.log(req.user);
    return {
      name: 'Juan Carlos',
    };
  }

  @UseGuards(JwtGuard)
  @Get('user')
  user(@Req() req) {
    return req.user;
  }
}
