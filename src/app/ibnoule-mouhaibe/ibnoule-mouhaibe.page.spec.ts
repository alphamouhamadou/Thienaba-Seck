import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IbnouleMouhaibePage } from './ibnoule-mouhaibe.page';

describe('IbnouleMouhaibePage', () => {
  let component: IbnouleMouhaibePage;
  let fixture: ComponentFixture<IbnouleMouhaibePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IbnouleMouhaibePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IbnouleMouhaibePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
