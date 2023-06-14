import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('constructor');
  }
  ngOnInit(): void {
      console.log('ngoninit');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
}

}
