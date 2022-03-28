import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YachtService {
  yachtUrl :string = 'http://localhost:3000';
  // yachtUrl :string = 'https://prestigious-yachting.herokuapp.com';

  
  constructor(private httpClient: HttpClient) { }

  sendRequestToGetAllYachts(){
    return this.httpClient.get<{yachts:any}>(`${this.yachtUrl}/yachts`);
  }

  sendRequestToAddYacht(yacht:any){
    return this.httpClient.post<{message:string}>(`${this.yachtUrl}/yachts/add`,yacht);
  }
}
