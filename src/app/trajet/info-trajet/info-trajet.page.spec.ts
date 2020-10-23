import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoTrajetPage } from './info-trajet.page';

describe('InfoTrajetPage', () => {
  let component: InfoTrajetPage;
  let fixture: ComponentFixture<InfoTrajetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoTrajetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
