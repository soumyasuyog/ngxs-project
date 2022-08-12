import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor(private http:HttpClient) { }
  videos:any;

  fetchVideos(){
    return this.http.get('https://my-json-server.typicode.com/Uxtrendz/apis/videoList')
  }
}
