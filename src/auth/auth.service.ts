import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Credentials } from './credentials.interface';
import { Token } from './token.interface';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class AuthService {

    constructor(private httpService: HttpService) {}
    
    getAccessToken(credentials: Credentials): Observable<AxiosResponse<Token>> {
        return this.httpService.post('https://order-pizza-api.herokuapp.com/api/auth', {
            username: credentials.username,
            password: credentials.password
        });
    }
}
