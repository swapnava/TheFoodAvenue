import { Component } from '@angular/core';

@Component({
  selector: 'login',
  template: `
  <div class="login">
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ['./flip-card.component.css']
})
export class loginComponent { }