import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  // if small html file then,
  // template: `<h1>This is title</h1>`
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit, OnChanges, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
      
  }

  ngOnDestroy(): void {
      
  }

}
