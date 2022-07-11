import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create user details', () => {
    expect(component).toBeTruthy();
  });

  // My Testing

  it('Must contain User in list', () => {
    const user = el.query(By.css('.card-body')).nativeElement;
    expect(user.textContent).toContain('User');
  });

  it('Must have border color green when user is active', () => {
    const borderColor = el.query(By.css('.card')).styles['borderColor'];
    expect(borderColor).toBe('greenyellow');
  });
});
