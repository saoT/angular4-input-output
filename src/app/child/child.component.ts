import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  @Input() carotte: string;
  @Output() childSignal = new EventEmitter<string> ();
 
  changeSignal () {
    this.childSignal.emit(this.carotte);
  }

  constructor() { }

  ngOnInit() {

  }

}
