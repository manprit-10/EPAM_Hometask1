import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { RouterTestingModule } from '@angular/router/testing';

// describe('UserComponent', () => {
//   let component: UserComponent;
//   let fixture: ComponentFixture<UserComponent>;
//   let el: DebugElement;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [UserComponent],
//     }).compileComponents();

//     fixture = TestBed.createComponent(UserComponent);
//     component = fixture.componentInstance;
//     el = fixture.debugElement;
//     fixture.detectChanges();
//     imports: [RouterTestingModule];
//   });

// it('should create', () => {
//   expect(component).toBeTruthy();
// });

// my test cases

// it('Must contain User in list', () => {
//   const user = el.query(By.css('.card-body')).nativeElement;
//   expect(user.textContent).toContain('User');
// });
// });
