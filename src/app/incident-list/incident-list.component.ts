import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {incident_listService} from "./incident-listService";

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit{
  idToDelete!:number;
  incident_list: any[]=[];
  constructor(private router:Router,private incident_listservice:incident_listService){

  }
  ngOnInit(): void {
    this.getAllincdients();
  }



  onEditButtonPressed(id: string): void {
    this.router.navigateByUrl('/dashboard/contacts/' + id + '/edit');
  }
  getAllincdients(){
    this.incident_listservice.getAllincidents().subscribe(
      { next: (data: any) => {
          this.incident_list = data ;
          console.log(this.incident_list)

        },
        error: (err: any) => {

        },complete() {

        },})

  }

  deleteincident(id:number){
    this.incident_listservice.deleteincident(this.idToDelete).subscribe(
      {next: (data: any) => {
          //this.toastService.success("Supprimer avec suce")
          this.getAllincdients();

        },
        error: (err: any) => {
          //this.toastService.error("quelque chose s'est mal passé, réessayez plus tard");
        },complete() {

        },})
  }




}
