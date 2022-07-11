import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title ='Component One'
  text="Some quick component created using CLI"
  constructor() { }

  ngOnInit(): void {
  }

}
