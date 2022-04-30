import { Component, OnInit } from '@angular/core';
import { Labor } from 'src/app/model/labor.model';
import { LaborService } from 'src/app/services/labor.service';

@Component({
  selector: 'app-labor-read',
  templateUrl: './labor-read.component.html',
  styleUrls: ['./labor-read.component.css']
})
export class LaborReadComponent implements OnInit {

  labors: Labor[];
  laborFilter: any = {description: '', groupFamily: '', subGroup: '', application: ''}

  constructor(private service: LaborService) { }

  ngOnInit(): void {
    this.service.readAll().subscribe(labors => {
      this.labors = labors;
    })
  }
}
