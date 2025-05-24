import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
   providedIn:'root'
})
export class OrderService {

    constructor(private http: HttpClient) {}

    private getToken(): HttpHeaders {
        const token =  localStorage.getItem('token');
        return new HttpHeaders({
            Authorization: `Bearer ${token}`
        });
    }

     createOrder(credentials:any): Observable<any>{
        return this.http.post
        (`${environment.apiUrl}addOrder`,
            credentials,
        {headers: this.getToken()})
    }  
    
    // listSneakers(): Observable<any[]>{
    //     return this.http.get<any[]>(`${environment.apiUrl}sneakermodel`, {headers: this.getToken()})
    // }
}
  

