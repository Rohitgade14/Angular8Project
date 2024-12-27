import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
private apiUrl ='http://localhost:8080/api/user'
constructor(private httpClient:HttpClient) { }



createPost(postData:any):Observable<any> {
  // custom Headers
  const headers = new HttpHeaders()
  .set('Content-Type','application/json')
  .set('Authorization', 'Bearer FDMS data_post')
  .set('auth', 'new-post');
  

    // http://localhost:8080/api/data?param1=value1&param2=value2
  // custom param
  const params = new HttpParams()
  .set('param1','value1')
  .set('param2','value2')
  return this.httpClient.post(this.apiUrl,postData,{headers,params,observe:'response'});



}
  getData():Observable<any> {
    // custom Hearder
    const headers = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer FDMS data_get')
    .set('auth', 'new-get');

    // custom param
            const params = new HttpParams()
             .set('param1','value1')
             .set('param2','value2')
    return this.httpClient.get(this.apiUrl,{headers,params,observe:'response'});



  }

 

}
