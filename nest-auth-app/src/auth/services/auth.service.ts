import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

//bcrypt
@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private http: HttpService,
  ) {}

  async login(username: string, password: string) {
    try {
      const client_id = this.configService.get('KEYCLOCK_CLIENT_ID');
      const client_secret = this.configService.get('KEYCLOCK_CLIENT_SECRET');
      const { data } = await firstValueFrom(
        this.http.post(
          'http://host.docker.internal:8080/auth/realms/devkingos/protocol/openid-connect/token',
          new URLSearchParams({
            client_id,
            client_secret,
            grant_type: 'password',
            username,
            password,
          }),
        ),
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
//auth0 - jsonwebtoken
