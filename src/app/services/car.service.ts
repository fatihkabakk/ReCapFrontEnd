import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDtoResponseModel } from '../models/carDetailDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44395/api/cars"
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<CarDetailDtoResponseModel>{
    return this.httpClient.get<CarDetailDtoResponseModel>(this.apiUrl + "/getcardetails");
  }
}
