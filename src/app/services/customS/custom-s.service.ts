import { Injectable } from '@angular/core';
import {RequestService} from "../request/request.service";
import {Constants} from "../../constants/constants";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomSService {
  baseUrl: string = Constants.base_url;
  serviceUrl: string = Constants.services;
  constructor(private customS: CustomSService, private requestService: RequestService, private http: HttpClient) { }

  getServiceById(id){
    return this.getRequest(this.serviceUrl, id);
  }

  getRequest(endPoint, id) {
    return this.http.get(this.baseUrl + endPoint+"/"+id, id);
  }

}
