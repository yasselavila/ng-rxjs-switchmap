import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';

describe('[Shared] Component: Spinner', () => {
  let fixture: ComponentFixture<SpinnerComponent>;
  let cmp: SpinnerComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    cmp = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });
});
