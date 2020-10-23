import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifieVoiturePage } from './modifie-voiture.page';

describe('ModifieVoiturePage', () => {
  let component: ModifieVoiturePage;
  let fixture: ComponentFixture<ModifieVoiturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieVoiturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifieVoiturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
