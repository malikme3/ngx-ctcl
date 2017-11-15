import {Injectable} from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {TOKEN_NAME} from './auth.constant';

@Injectable()
export class UserService {
  accessToken: string;
  isAdmin: boolean;

  constructor() {
  }

  login(accessToken: string) {
    const decodedToken = jwt_decode(accessToken);
    // const decodedToken = this.jwtHelper.decodeToken(accessToken);


    this.isAdmin = decodedToken.authorities.some(el => el === 'ADMIN_USER');
    this.accessToken = accessToken;

    localStorage.setItem(TOKEN_NAME, accessToken);
  }

  logout() {
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.removeItem(TOKEN_NAME);
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isUser(): boolean {
    return this.accessToken && !this.isAdmin;
  }
}
