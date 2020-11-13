import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { VehiculosEstrategicoPage } from './vehiculosEstrategico.page';

describe('VehiculosEstrategicoPage', () => {
  let component: VehiculosEstrategicoPage;
  let fixture: ComponentFixture<VehiculosEstrategicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculosEstrategicoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculosEstrategicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
