import { Controller, Post, Body } from '@nestjs/common';
import { Credentials } from './credentials.interface';
import { AuthService } from './auth.service';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post()
    async getToken(@Body() credentials: Credentials ) {
        return this.authService.getAccessToken(credentials)
        .pipe(
            map((axiosResponse: AxiosResponse) => {
                return axiosResponse.data;
            })
        );
    }
}
