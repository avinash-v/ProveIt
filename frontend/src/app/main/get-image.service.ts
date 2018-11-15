import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetImageService {

  constructor(private http: HttpClient) { }
  getImage(imageUrl: string): Observable<Blob> {
    console.log(imageUrl);
    return this.http.get(imageUrl, { responseType: 'blob' });
  }
}
