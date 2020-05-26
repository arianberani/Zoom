
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Constants} from "../../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseUrl: string = Constants.base_url;

  constructor(private http: HttpClient) {}

  getRequest(endPoint, options) {
    return this.http.get(this.baseUrl + endPoint, options);
  }

  postRequest(endPoint, body): Observable<any> {
    return this.http.post<any>(this.baseUrl + endPoint, body);
  }

  deleteRequest(endpoint, id){
    return this.http.delete(this.baseUrl + endpoint, id);
  }

  putRequest(endpoint, id){
    return this.http.put(this.baseUrl + endpoint, id);
  }

  // getById(endpoint, id){
  //   return this.http.get(this.baseUrl+endpoint, id);
  // }

}
