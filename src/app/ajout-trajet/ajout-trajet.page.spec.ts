import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjoutTrajetPage } from './ajout-trajet.page';

describe('AjoutTrajetPage', () => {
  let component: AjoutTrajetPage;
  let fixture: ComponentFixture<AjoutTrajetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutTrajetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjoutTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
