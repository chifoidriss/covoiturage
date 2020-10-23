import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutVoiturePage } from './ajout-voiture.page';

describe('AjoutVoiturePage', () => {
  let component: AjoutVoiturePage;
  let fixture: ComponentFixture<AjoutVoiturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutVoiturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutVoiturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
