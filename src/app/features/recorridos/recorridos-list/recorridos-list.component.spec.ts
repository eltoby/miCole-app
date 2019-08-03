
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorridosListComponent } from './recorridos-list.component';

describe('RecorridosListComponent', () => {
  let component: RecorridosListComponent;
  let fixture: ComponentFixture<RecorridosListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorridosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecorridosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
