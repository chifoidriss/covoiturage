import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifieTrajetPage } from './modifie-trajet.page';

describe('ModifieTrajetPage', () => {
  let component: ModifieTrajetPage;
  let fixture: ComponentFixture<ModifieTrajetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieTrajetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifieTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
