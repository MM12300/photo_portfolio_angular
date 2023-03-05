import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {firstLongLifeToken} from "../../../secrets/secrets"

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http: HttpClient) { }

    public refreshToken(){
        const params = new HttpParams()
            .set('grant_type', "ig_refresh_token")
            .set('access_token', firstLongLifeToken);
        this.http.get("https://graph.instagram.com/refresh_access_token", {params:params});
    }
}
