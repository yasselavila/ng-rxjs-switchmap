import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserDataComponent } from './user-data/user-data.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  declarations: [AppComponent, UsersListComponent, UserDataComponent, SearchBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
