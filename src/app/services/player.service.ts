import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Promise from 'bluebird';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private _URL = 'http://cocascs.herokuapp.com/api';
  // private _URL = 'http://localhost:2786/api';
  constructor(public httpClient: HttpClient) {}

  newPlayer(userData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = this._URL + '/newuser';
      const HEADERS = {
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      };
      // const requestOptions = this.httpParams({ headers: headers });
      this.httpClient
        .post(url, userData, HEADERS)
        .toPromise()
        .then((result: any) => {
          console.log('Result: ', result);
          resolve(result);
        })
        .catch(err_ => {
          reject(err_);
        });
    });
  }
  validateUserName(userName: String): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const url = this._URL + '/checkuser/' + userName;
      this.httpClient
        .get(url)
        .toPromise()
        .then(result => {
          resolve(result);
        })
        .catch(err_ => {
          reject(err_);
        });
    });
  }
  validateEmail(email: String): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const url = this._URL + '/checkemail/' + email;
      this.httpClient
        .get(url)
        .toPromise()
        .then(result => {
          resolve(result);
        })
        .catch(err_ => {
          reject(err_);
        });
    });
  }
}
