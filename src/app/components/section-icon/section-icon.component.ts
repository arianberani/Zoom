import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-icon',
  templateUrl: './section-icon.component.html',
  styleUrls: ['./section-icon.component.scss']
})
export class SectionIconComponent implements OnInit {

  statisticsArray: any = [];

  constructor() {
    this.statisticsArray = [
      {id: '1', title: 'COMPLETED PROJECTS', number: '21593', src: 'assets/images/Icon.png'},
      {id: '2', title: 'COMPLETED PROJECTS', number: '7 134 835' , src: 'assets/images/Icon (1).png'},
      {id: '3', title: 'COMPLETED PROJECTS', number: '3656', src: 'assets/images/Icon (2).png'},
      {id: '4', title: 'COMPLETED PROJECTS', number: '524', src: 'assets/images/Icon (3).png'}
    ];
  }

  ngOnInit() {
  }

}
