import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button nbButton hero status="info" *ngIf="value == 'O'">
      {{ value }}
    </button>
  `,
  styles: [
    `
      button {
        width: 200px;
        height: 200px;
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
}
