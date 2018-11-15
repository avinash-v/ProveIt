import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from './../environments/environment';

//const endpoint = '';
//const data = {};
const httpOptions = {
  headers: new HttpHeaders({
  "Content-Type" : "application/json"
  }),
  withCredentials : true,
};

@Injectable({
  providedIn: 'root'
})

export class HttpLinkService {


constructor(private http: HttpClient) { }

private extractData(res: Response) {
  let body = res;
  return body || { };
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

getData(endpoint): Observable<any> {
  return this.http.get(endpoint).pipe(
    map(this.extractData));
}

postData(endpoint,data) : Observable<any>{
	return this.http.post(endpoint,data,httpOptions).pipe(
		map(this.extractData));
	
}

putData(endpoint,data) : Observable<any>{
	
	return this.http.put(endpoint,data).pipe(
		map(this.extractData));
	
}

deleteData(endpoint) : Observable<any>{
	
	return this.http.delete(endpoint).pipe(
		map(this.extractData));
	
}
}
