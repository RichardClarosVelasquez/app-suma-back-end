import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/ambiental/habilitacion-consultor.service';


@Component({
  selector: 'app-habilitacion-consultor',
  templateUrl: './habilitacion-consultor.component.html',
  styleUrls: ['./habilitacion-consultor.component.css']
})
export class HabilitacionConsultorComponent implements OnInit {
  entities: any[] = [];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getSelectedColumns().subscribe((data) => {
      this.entities = data;
    });
    // this.dataService.getAll().subscribe((data) => {
    //   this.entities = data;
    // });
  }

}
