import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class incident_listService {
  private url = 'http://localhost:8089/riskmanagement/';

  constructor(private http: HttpClient) { }

  getAllIncidents() {
    return this.http.get(this.url + 'get-all-incidents');
  }

  addIncident(incident: any) {
    return this.http.post(this.url + 'add-incident', incident);
  }

  updateIncident(id: number, incident: any) {
    return this.http.put(this.url + 'update-incident/' + id, incident);
  }

  delIncident(id: any) {
    return this.http.delete(this.url + 'delete-incident/' + id);
  }

  getIncidentById(id: number) {
    return this.http.get(this.url + 'get-incident-by-id/' + id);
  }
}
