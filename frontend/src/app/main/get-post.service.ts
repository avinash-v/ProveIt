import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Posts } from './posts';

const httpOptions = {
  headers: new HttpHeaders({
  "Content-Type" : "application/json"
  }),
  withCredentials : true,
};

@Injectable(
  {providedIn : 'root'}
)
export class GetPostService {
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
  let body = res;
  return body || { };
}


  getPosts(): Observable<any>  {
    //this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => console.log(data));
    var userId = localStorage.getItem("userId");
    var endpoint = "http://127.0.0.1:5555/posts/user/get/" + userId;
    //console.log(this.http.get(endpoint).pipe(map(this.extractData)))
  	return this.http.get(endpoint).pipe(
    	map(this.extractData));
  }

  makePosts(inputPost) : Observable<any> {

    var userId = localStorage.getItem("userId");
    var endpoint = "http://127.0.0.1:5555/posts/make";
    //console.log(this.http.get(endpoint).pipe(map(this.extractData)))

    var data = {"groupIdPosted":1,"content":inputPost,"visibility":"public","owner":"user","userId":userId};
	return this.http.post(endpoint,data,httpOptions).pipe(
		map(this.extractData));


  }
}
