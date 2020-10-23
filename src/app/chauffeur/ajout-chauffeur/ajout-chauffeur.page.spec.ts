import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutChauffeurPage } from './ajout-chauffeur.page';

describe('AjoutChauffeurPage', () => {
  let component: AjoutChauffeurPage;
  let fixture: ComponentFixture<AjoutChauffeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutChauffeurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutChauffeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
