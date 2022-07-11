import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './MyComponent/users-list/users-list.component';
import { ActiveModule } from './MyModules/active/active.module';
import { DeletedModule } from './MyModules/deleted/deleted.module';
@NgModule({
  declarations: [AppComponent, UsersListComponent],
  imports: [BrowserModule, AppRoutingModule, ActiveModule, DeletedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
