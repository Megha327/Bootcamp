import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActiveUserComponent } from './active-user/active-user.component';
import { InactiveUserComponent } from './inactive-user/inactive-user.component';
import { userService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUserComponent,
    InactiveUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
