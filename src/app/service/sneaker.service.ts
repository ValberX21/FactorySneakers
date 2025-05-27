import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Sneaker } from "../interfaces/sneaker.interface";

@Injectable({
   providedIn:'root'
})
export class SneakeService {

    constructor(private http: HttpClient) {}

    private getToken(): HttpHeaders {
        const token =  localStorage.getItem('token');
        return new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
    }

     create(credentials:any): Observable<any>{
        return this.http.post
        (`${environment.apiUrl}sneakermodel`,
            credentials,
        {headers: this.getToken()})
    }  
    
    listSneakers(): Observable<Sneaker[]>{
        return this.http.get<Sneaker[]>(`${environment.apiUrl}sneakermodel`, {
            headers: this.getToken()
        })
    }
}
  

