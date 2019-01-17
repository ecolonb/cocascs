import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private _URL = 'http://cocascs.herokuapp.com/api';
  // private _URL = 'http://localhost:2786/api';
  constructor(public httpClient: HttpClient) {}

  newPlayer(userData: any) {
    const promiseNewPlayer = new Promise((resolve, reject) => {
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
    return promiseNewPlayer;
  }
  validateUserName(userName: String) {
    const promiseValudateUser = new Promise((resolve, reject) => {
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
    return promiseValudateUser;
  }
  validateEmail(email: String) {
    const promiseValudateUser = new Promise((resolve, reject) => {
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
    return promiseValudateUser;
  }
}
