import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  standalone: false,
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css',
})
export class Demo1Component implements OnInit {
  /**
   *
   */
  constructor() {
    console.log('Demo1 Constructor');
  }

  ngOnInit(): void {
    console.log('Demo1 Initialized!');
  }
}
