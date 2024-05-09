import {Component, OnInit} from '@angular/core';
import {IncidentService} from "./IncidentService";
@Component({
  selector: 'app-addincient',
  templateUrl: './addincident.component.html',
  styleUrls: ['./addincident.component.css']
})
export class AddincidentComponent implements OnInit {
  constructor (private incidentService: IncidentService){} ;
  incidents:any[]=[] ;

  ngOnInit() {
  this.incidentService.getIncidents().subscribe(result=>{
    this.incidents=result ;
    console.log(this.incidents) ;
  })

  }

  ajouterContact() {
    // Votre logique d'ajout de contact ici

    // Afficher un message de confirmation
    alert("Contact ajouté avec succès !");


}


}

