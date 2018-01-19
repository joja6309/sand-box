import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Family } from './family';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
interface IUserDetails {
  _key: string;
  _id: string;
  _rev: string;
  name: string;
  age: number;
}
export interface Iimage {
  url: string;
  name: string;
  filename: string;
  author: string;
  location: string;
  // tags: string [];
  uniqueId: number;

}

@Injectable()
export class DataService {
  baseUrl:string = "http://localhost:3000";
  packageData: Subject<Array<IUserDetails>> = new BehaviorSubject<Array<IUserDetails>>([]);
  messages: string[] = [];
  _data: any
  constructor(public httpClient : HttpClient) { 
    
  }
  getPrice(currency: string): Promise<any> {
     return this.httpClient.get('./assets/settings.json')
          .toPromise()
            .then((response: Response) => {
          console.log(response)
          return response;
      });
  //   let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
  //   this.http.get(apiURL)
  //     .toPromise()
  //     .then(
  //     res => { // Success
  //       // console.log(res.json());
  //       resolve();
  //     }
  //     );
  // });
  // return promise;
  //   return response.json().bpi[currency].rate;
  }
  // getData(): Array<IUserDetails>
  // {
  //   return this.packageData;
  // }
  loadAllPackages() {
    this.httpClient
      .get('./assets/settings.json')
      .map((res: any) => {
        return res;
      })
      // .map(response => _.values(data))
      .subscribe(
      (data: any) => {
        this.packageData.next(data);
      },
      (err: any) => console.error("loadAllPackages: ERROR"),
      () => console.log("loadAllPackages: always")
      );
  }
  private currentPriceUrl = 'http://api.coindesk.com/v1/bpi/currentprice.json';


  // async getPrice(currency: string): Promise<number> {
  //   const response = await this.httpClient.get(this.currentPriceUrl).toPromise();
  //   return respone.
  //   return response.bpi[currency].rate;
  // }
  // Now getMyData doesn't take any argument at all and return a Promise
  
  get_products() {
     this.httpClient
      .get<Iimage[]>('./assets/settings.json')
      .map((data) =>
        this._data = data
      )
    console.log(this._data)
  }



  get_families(): Observable<Family[]> {
    return this.httpClient
      .get<Family[]>(this.baseUrl + '/families');
      
  }
  get_locations(){
    return this.httpClient.get(this.baseUrl + '/locations');
  }
  get_transactions(){
    return this.httpClient.get(this.baseUrl + '/families');
  }

}
