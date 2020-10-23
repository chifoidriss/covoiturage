import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifieUserPage } from './modifie-user.page';

describe('ModifieUserPage', () => {
  let component: ModifieUserPage;
  let fixture: ComponentFixture<ModifieUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifieUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
