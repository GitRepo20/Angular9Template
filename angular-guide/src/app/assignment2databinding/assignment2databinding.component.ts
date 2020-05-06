import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2databinding',
  templateUrl: './assignment2databinding.component.html',
  styleUrls: ['./assignment2databinding.component.css']
})
export class Assignment2databindingComponent implements OnInit {

  username: string;
  constructor() { }

  ngOnInit(): void {
    this.username = '';
  }

  reset() {
    alert(this.username);
    this.username='';
  }

}
