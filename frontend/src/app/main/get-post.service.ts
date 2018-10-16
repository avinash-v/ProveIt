import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Posts } from './posts';
import { map } from 'rxjs/operators';
@Injectable(
  {providedIn : 'root'}
)
export class GetPostService {
  constructor(private http: HttpClient) { }
  getPosts() {
    //this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => console.log(data));
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
