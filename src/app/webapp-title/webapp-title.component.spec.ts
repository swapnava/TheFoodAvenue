import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappTitleComponent } from './webapp-title.component';

describe('WebappTitleComponent', () => {
  let component: WebappTitleComponent;
  let fixture: ComponentFixture<WebappTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebappTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebappTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
