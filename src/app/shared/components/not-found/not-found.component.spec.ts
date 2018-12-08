import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';

describe('Module: Shared / Component: Not Found', () => {
  let fixture: ComponentFixture<NotFoundComponent>;
  let cmp: NotFoundComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    cmp = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  const expectedTitle: string = 'Not Found';

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });

  it('should render title in a h3 tag', async(() => {
    expect(element.querySelector('h3').textContent).toContain(expectedTitle);
  }));
});
