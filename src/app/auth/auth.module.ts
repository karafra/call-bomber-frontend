import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AuthComponent],
  imports: [FontAwesomeModule, RouterModule],
  exports: [AuthComponent]
})
export class AuthModule { }
