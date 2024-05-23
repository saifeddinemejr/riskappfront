import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { incident_listService } from "./incident-listService";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {
  idToDelete!: number;
  incident_list: any[] = [];
  isDeleteModalOpen = false;
  paginatedIncidents: any[] = [];
  pageSize: number = 5;
  currentPage: number = 0;

  constructor(
    private router: Router, 
    private incident_listservice: incident_listService
  ) { }

  ngOnInit(): void {
    this.getAllIncidents();
  }

  onEditButtonPressed(id: string): void {
    console.log("edit");

    this.router.navigateByUrl('/dashboard/editIncident/'+id);
  }

  getAllIncidents() {
    this.incident_listservice.getAllIncidents().subscribe({
      next: (data: any) => {
        this.incident_list = data;
        console.log(this.incident_list);
        this.updatePaginatedIncidents();
      },
      error: (err: any) => {
        console.error(err);
      },
      complete() { }
    });
  }
  updatePaginatedIncidents() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedIncidents = this.incident_list.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedIncidents();
  }

  openDeleteConfirmationModal(id: number): void {
    console.log("logic is here")
    this.idToDelete = id;
    this.isDeleteModalOpen = true;
    //  this.incident_listservice.delIncident(id).subscribe({
    //   next: (data: any) => {
    //     this.getAllIncidents();
    //     console.log("deleted")
    //   },
    //   error: (err: any) => {
    //     console.error(err);
    //   },
    //   complete() { }
    // });
  }

  closeDeleteConfirmationModal(): void {
    this.isDeleteModalOpen = false;
  }

  deleteIncident(id :number) {
    id = this.idToDelete;
    console.log(this.idToDelete)
    console.log("getting deleted")
    this.incident_listservice.delIncident(this.idToDelete).subscribe({
      next: (data: any) => {
        this.getAllIncidents();
        this.closeDeleteConfirmationModal();
      },
      error: (err: any) => {
        console.error(err);
      },
      complete() { }
    });
  }
}

