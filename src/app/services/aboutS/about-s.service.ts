import { Injectable } from '@angular/core';
import {Constants} from "../../constants/constants";
import {RequestService} from "../request/request.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AboutSService {
  baseUrl: string = Constants.base_url;
  aboutUrl: string = Constants.about;

  constructor(private customS: AboutSService, private requestService: RequestService, private http: HttpClient) { }

  getServiceById(id){
    return this.getRequest(this.aboutUrl, id);
  }
  getRequest(endPoint, id) {
    return this.http.get(this.baseUrl + endPoint+"/"+id, id);
  }
}

