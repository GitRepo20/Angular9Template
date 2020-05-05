import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventinfo',
  templateUrl: './eventinfo.component.html',
  styleUrls: ['./eventinfo.component.css']
})
export class EventinfoComponent implements OnInit {

  typingCaptured : any;
  constructor() { }

  ngOnInit(): void {
  }

  typingCapturing(event : Event) { // Capture event into Event type
    /* event.target = cast event into HTMLInputElement so we can 
       access it's value (Only available for input elements)
    */
    this.typingCaptured = (<HTMLInputElement>event.target).value;
  }
}
