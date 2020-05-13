import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefLoginRegisterComponent } from './chef-login-register.component';

describe('ChefLoginRegisterComponent', () => {
  let component: ChefLoginRegisterComponent;
  let fixture: ComponentFixture<ChefLoginRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefLoginRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefLoginRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
