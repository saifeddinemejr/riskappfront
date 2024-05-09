import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http: HttpClient) { }

  // URL pointing to the Spring Boot API endpoint for incidents (replace with your actual URL)
  private baseUrl = 'http://localhost:8089/riskmanagement/';

  getIncidents() {
    return this.http.get<any[]>(this.baseUrl + 'get-macro-proc/all');
  }
}

