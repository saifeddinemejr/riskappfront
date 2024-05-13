import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http: HttpClient) {
  }

  // URL pointing to the Spring Boot API endpoint for incidents
  private baseUrl = 'http://localhost:8089/riskmanagement/';

  getIncidents() {
    return this.http.get<any[]>(this.baseUrl + 'get-macro-proc/all');
  }

  getSecondLevelIncidents(incidentId: number): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + `get-proc-by-macro/${incidentId}`);
  }


  addincident(incident: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'add-incident', incident);
  }
}
