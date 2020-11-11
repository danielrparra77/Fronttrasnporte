import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { nuevaEmpresaPage } from './nuevaEmpresa.page';

describe('nuevaEmpresaPage', () => {
  let component: nuevaEmpresaPage;
  let fixture: ComponentFixture<nuevaEmpresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [nuevaEmpresaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(nuevaEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
