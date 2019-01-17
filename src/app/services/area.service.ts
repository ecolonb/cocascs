import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private _URL = 'http://cocascs.herokuapp.com/api';
  // private _URL = 'http://localhost:2786/api';
  constructor(public httpClient: HttpClient) {}
  getAllAreas(): Promise<any> {
    const areasPromise = new Promise<any>((resolve, reject) => {
      const url = this._URL + '/getallarea';
      console.log('In area services.........==>>> url', url);
      this.httpClient
        .get(url)
        .toPromise()
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
    return areasPromise;
  }
}
