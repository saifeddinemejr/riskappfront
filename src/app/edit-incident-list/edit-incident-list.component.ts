import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-incident-list',
  templateUrl: './edit-incident-list.component.html',
  styleUrls: ['./edit-incident-list.component.css']
})
export class EditIncidentListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  console.log(id); // Should print the id
}
}
