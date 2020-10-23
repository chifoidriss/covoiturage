import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifieChauffeurPage } from './modifie-chauffeur.page';

describe('ModifieChauffeurPage', () => {
  let component: ModifieChauffeurPage;
  let fixture: ComponentFixture<ModifieChauffeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieChauffeurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifieChauffeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
