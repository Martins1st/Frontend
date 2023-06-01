import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAdicionarComponent } from './cliente-adicionar.component';

describe('ClienteAdicionarComponent', () => {
  let component: ClienteAdicionarComponent;
  let fixture: ComponentFixture<ClienteAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAdicionarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
