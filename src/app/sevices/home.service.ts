import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  helloText(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }


}
