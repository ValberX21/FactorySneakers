import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
   providedIn:'root'
})
export class AuthService {

    constructor(private http: HttpClient) {}

    login(credentials:any): Observable<any>{
        return this.http.post(`${environment.apiUrl}users/login`, credentials)
    }

    register(data:any):Observable<any>{
        return this.http.get(`${environment.apiUrl}users/register`,data);
    }
}
  

