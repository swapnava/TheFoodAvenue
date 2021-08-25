import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginComponent } from './login';
import { signupComponent } from './signup';
import { FlipCardComponent } from './flip-card.component';



@NgModule({
  declarations: [loginComponent, signupComponent],
  imports: [
    CommonModule
  ],
  exports:[loginComponent, signupComponent]
})
export class FlipCardModule { }
