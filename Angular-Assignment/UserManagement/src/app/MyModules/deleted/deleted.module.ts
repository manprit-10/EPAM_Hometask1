import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from 'src/app/MyComponent/user/user.component';
import { UsersService } from 'src/app/MyServices/users.service';

@NgModule({
  imports: [CommonModule],

  providers: [UsersService],
})
export class DeletedModule {}
