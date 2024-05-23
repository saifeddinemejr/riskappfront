import { Component, OnInit } from '@angular/core';
import { IncidentService } from './IncidentService';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addincident',
  templateUrl: './addincident.component.html',
  styleUrls: ['./addincident.component.css']
})
export class AddincidentComponent implements OnInit {
  risks: any[] = []; // Assuming this array contains risk categories
  incidents: any[] = [];
  secondLevelIncidents: any[] = [];
  selectedMacroProc: any;
  selectedProc: any;
  selectedRiskCategoryId: number | null = null;
  incident: any = {
    procId: '',
    detectionDate: '',
    declarationDate: '',
    occurrenceDate: '',
    frequency: '',
    impact: '',
    riskCategoryId: '',
    // user: '',
    description: ''
  };

  constructor(private incidentService: IncidentService) { }

  ngOnInit(): void {
    this.loadRiskCategories();
    this.incidentService.getIncidents().subscribe(result => {
      this.incidents = result;
      console.log(this.incidents);
    });
  }

  loadRiskCategories(): void {
    this.incidentService.getRiskCategories().subscribe(
      (data: any[]) => {
        this.risks = data;
      },
      (error) => {
        console.error('Error fetching risk categories', error);
      }
    );
  }

  onIncidentSelect(event: Event): void {
    const selectedIncidentId = parseInt((event.target as HTMLSelectElement).value, 10);
    this.incidentService.getSecondLevelIncidents(selectedIncidentId).subscribe((secondLevelIncidents: any[]) => {
      this.secondLevelIncidents = secondLevelIncidents;
      console.log(this.secondLevelIncidents);
    });
    
    const selectElement = document.getElementById('macro_proc') as HTMLSelectElement;
    const selectedMacroProcId = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedMacroProcId);
    this.incident.macroProc = selectedMacroProcId;
  }

  onprocSelect(event: Event): void {
        const selectElement = document.getElementById('proc') as HTMLSelectElement;
    const selectedId = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedId);
    this.incident.procId = selectedId;
  }

  onRiskCategorySelect(event: Event): void {
    const element = event.target as HTMLSelectElement;
    this.selectedRiskCategoryId = parseInt(element.value, 10);
    this.incident.riskCategoryId = this.selectedRiskCategoryId;  // Add the selected risk category ID to the incident object
    console.log('Selected Risk Category ID:', this.selectedRiskCategoryId);
  }

  addincident(): void {
    console.log(this.incident)
    this.incidentService.addincident(this.incident).subscribe(
      response => {
        console.log('Incident added successfully:', response);
        // Reset the incident object to clear the form
        this.incident = {
          macroProc: '',
          proc: '',
          detectionDate: '',
          declarationDate: '',
          occurrenceDate: '',
          frequency: '',
          impact: '',
          riskCategory: '',
          // user: '',
          description: ''
        };
        alert("Incident Added!");
      },
      (error: HttpErrorResponse) => {
        console.error('Error adding incident:', error);
        // Display error details
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred
          console.error('Client-side error:', error.error.message);
          alert(`Client-side error: ${error.error.message}`);
        } else {
          // The backend returned an unsuccessful response code
          console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          alert(`Error adding incident: ${error.status} - ${error.message}\n${error.error}`);
        }
      }
    );
  }
}
