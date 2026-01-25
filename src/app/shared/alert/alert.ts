import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-alert',
  imports: [NgClass],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  color = input('blue')

  get bgColor () {
    return  `bg-${this.color()}-400`;
  }
}
