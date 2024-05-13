import { Component, OnInit } from '@angular/core';
import { IncidentService } from "./IncidentService";
@Component({
  selector: 'app-addincient',
  templateUrl: './addincident.component.html',
  styleUrls: ['./addincident.component.css']
})
export class AddincidentComponent implements OnInit {
  constructor(private incidentService: IncidentService) {
  };

  incidents: any[] = [];
  secondLevelIncidents: any[] = []
  selectedMacroProc: any;
  selectedProc: any;
  incident: any = {
    macroProc: '',
    proc: '',
    detectionDate: '',
    declarationDate: '',
    occurrenceDate: '',
    frequency: '',
    impact: '',
    risk: '',
    user: '',
    description: ''
  };

  ngOnInit() {
    this.incidentService.getIncidents().subscribe(result => {
      this.incidents = result;
      console.log(this.incidents);
    })


  }

  onIncidentSelect(event: Event) {
    const selectedIncidentId = parseInt((event.target as HTMLSelectElement).value);
    this.incidentService.getSecondLevelIncidents(selectedIncidentId).subscribe((secondLevelIncidents: any[]) => {

      this.secondLevelIncidents = secondLevelIncidents;
      console.log(this.secondLevelIncidents);

    });
    const selected = (document.getElementById('macro_proc') as HTMLSelectElement).name
    console.log(selected);
    this.incident.macroProc = selected
  }

  onprocSelect(event: Event) {
    const selected = (document.getElementById('proc') as HTMLSelectElement).name
    console.log(selected);
    this.incident.proc = selected

  }

  addincident() {
    this.incidentService.addincident(this.incident).subscribe(
      response => {
        console.log('Incident added successfully:', response);
        // to do Reset the incident object to clear the form
        this.incident = {
          macroProc: '',
          proc: '',
          detectionDate: '',
          declarationDate: '',
          occurrenceDate: '',
          frequency: '',
          impact: '',
          risk: '',
          //user: '',
          description: ''
        };
        alert("incident Added !");
      },
      error => {
        console.error('Error adding incident:', error);
        alert("incident cannot be added");
      }
    );
  }
}

  /*addincident() {
    // Here you can access form data from this.incident object
    console.log('Incident Data:', this.incident);
    // Add logic to handle form submission
    alert("incident Added !");
  }/*/
