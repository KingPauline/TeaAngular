import { Component } from '@angular/core';

@Component({
  selector: 'accordeon',
  templateUrl: './accrodeon.component.html',
  styleUrls: ['./accrodeon.component.scss']
})
export class AccrodeonComponent {
  items = [1, 2, 3, 4];

  constructor() { }
}
