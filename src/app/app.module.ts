import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  declarations: [AppComponent, UsersListComponent, UserDataComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
