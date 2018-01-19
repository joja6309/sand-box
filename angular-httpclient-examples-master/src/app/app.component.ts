import { Component } from '@angular/core';
import { Observable, Subscription} from 'rxjs';
import { NgModule, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { Product } from './product';
import { Family } from './family';
import { Location } from './location';
import { Transaction } from './transaction';
import { Book } from './book';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';


export interface Iimage {
  url: string;
  name: string;
  filename: string;
  author: string;
  location: string;
  // tags: string [];
  uniqueId: number;

}
export class ResponseImage implements Iimage {
  url: string;
  name: string;
  filename: string;
  author: string;
  location: string;
  private doctors = [];

  // tags: string [];
  uniqueId: number;
  constructor(data: Iimage) {
    this.url = data.url;
    this.name = data.name;
    this.filename = data.filename;
    this.author = data.author;
    this.location = data.location;
    // tags: string [];
    this.uniqueId = data.uniqueId;
  }

}


interface IUserDetails {
  _key: string;
  _id: string;
  _rev: string;
  name: string;
  age: number;
}
class UserDetails {
  key: string;
  id: string;
  name: string;
  age: number;

  constructor(data: IUserDetails) {
    this.key = data._key;
    this.id = data._id;
    this.name = data.name;
    this.age = data.age;
  }
}
let jsonArray: IUserDetails[] = [
  {
    "_key": "2343200",
    "_id": "test/2343200",
    "_rev": "_U9JHQXa---",
    "age": 10,
    "name": "Soy"
  },
  {
    "_key": "2342008",
    "_id": "test/2342008",
    "_rev": "_U9JGn0----",
    "age": 20,
    "name": "John"
  },
  {
    "_key": "2342955",
    "_id": "test/2342955",
    "_rev": "_U9JG46u---",
    "age": 32,
    "name": "Jane"
  }
];
export interface settingsModel {
  name: string;
};
interface ItemsResponse {
  results: string[];
}
// let bar = await getBar();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  // instances: UserDetails[] = jsonArray.map(obj => new UserDetails(obj));
  private _settingsSource = new BehaviorSubject<IUserDetails>(null);
  settings$ = this._settingsSource.asObservable();
  observableBooks: Observable<Book[]>
  public data;
  private products : Product[] = []; 
  private families : Family[] = [];
  private locations : Location[] = [];
  private transactions : Transaction[] = [];
  promise: Promise<string>;
  observable: Observable<number>;
  subscription: Subscription;
  observableData: number;
  greeting: Promise<string> | null = null;
  arrived: boolean = false;
  destinations: Array<ResponseImage> = [];
  loadedCharacter: {};
  protected apiUrlBase: string;

  // private cartSubject = new Subject<CartState>();
  // Products: product[] = [];
  //CartState = this.cartSubject.asObservable();


  private resolve: Function | null = null;
  // attemptAuth(credentials): Observable<any> { this.purgeAuth(); return Observable.create(observer => { this.restService.post('/authenticate', credentials).finally(observer.complete()).subscribe(data => { observer(data.token); console.log('Observer: ' + data.token); }, err => observer.error(err)) })

  private productsObservable : Observable<Product[]> ; 
  public localVar: any;
  allData: Iimage[];
  allData$: BehaviorSubject<Iimage[]>;
  results: ItemsResponse[];
  profile = {};
  resultArray: any;
  // private mMember: Something;

  // public static CreateAsync = async () => {
  //   const that = new MyClass();

  //   that.mMember = await SomeFunctionAsync();

  //   return that;
  // };


  constructor(private dataService: DataService,
              public httpClient: HttpClient) {
   
    console.log(this.profile);
   
  }
  

  getConfigData(): Promise<Observable<Response>> {
    return new Promise(resolve => {
      this.httpClient.get('../../assets/config.json')
    });
      // .subscribe(
      //   response => {
      //     r = response;
      //   },
      //   error => {
      //     // Config error handling
      //   },
      //   () => {
      //     resolve(r);
      //   }
      // )
    
  }
  handleData(data) {
    console.log('Here are the usable data', data);
    // Insert Business logic here
  }

  handleComplete() {
    console.log('Complete');
  }

  handleError(error) {
    console.log('error:', error)
    return Observable.throw(error);
  }
  extractData(response) {
    console.log('Raw response:', response);
    this.results = response
    console.log(this.results)
    // console.log('Formatted response:', response.json());
    // const body = response.json();
    return response || {};
  }
  // getProducts()
  // {
  //   this.productsObservable = 
  // }
  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve!('hi there!');
      this.arrived = true;
    }
  }
  getObservable() {
    return Observable
      .interval(1000)
      .take(10)
      .map((v) => v * v);
  }
  // in the service
  getVehicles() {
    return Observable.interval(2200).map(i => [{ name: 'car 1' }, { name: 'car 2' }])
  }

  // in the controller
  vehicles: Observable<Array<any>>
  currency = 'USD';
  price: number;

  async ngOnInit() {
    this.price = await this.dataService.getPrice(this.currency);
    console.log(this.price)

  }
  refreshData() {
    console.log(this.destinations);

  }

  // AsyncPipe subscribes to the observable automatically
  subscribeObservable() {
    this.subscription = this.getObservable()
      .subscribe(
      (v) => this.observableData = v);
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }

  // AsyncPipe unsubscribes from the observable automatically
  ngOnDestroy() {
    console.log(this.results);

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}





