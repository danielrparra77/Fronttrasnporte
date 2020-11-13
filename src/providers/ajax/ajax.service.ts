import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AjaxService {

  private host: string = "";

  constructor(private $http: HttpClient) {
    this.$http = $http;
    this.host= environment.host;
  }

  /** Método get*/
  get(ruta: string, params: any):Observable<any> {
      
    let obs = this.$http.get(this.host + ruta, { params });
    
    return obs;
  }

  /** Método post */
  post(ruta: string, params: any):Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    let obs = this.$http.post(this.host + ruta, ({data:params}), { headers: headers });
      
    return obs;

  }

}
