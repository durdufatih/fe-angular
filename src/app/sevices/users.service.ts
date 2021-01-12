import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../components/users-list/users-list.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<any> {
    return this.httpClient.get(this.API_URL + '/users');
  }

  getFindBy(id?: number): Observable<Object> {
    return this.httpClient.get(this.API_URL + '/users/' + id?.toString());
  }

  create(data?: User): Observable<any> {
    return this.httpClient.post(this.API_URL + '/users', data);
  }

  update(id?: number, data?: User): Observable<any> {
    return this.httpClient.put(this.API_URL + '/users/' + id?.toString(), data);
  }

  delete(id: number): Observable<any>{
     return this.httpClient.delete(this.API_URL + '/users/' + id?.toString());
  }

}
