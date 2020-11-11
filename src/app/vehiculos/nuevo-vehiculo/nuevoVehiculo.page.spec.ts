import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { NuevoVehiculoPage } from './nuevoVehiculo.page';

describe('NuevoVehiculoPage', () => {
  let component: NuevoVehiculoPage;
  let fixture: ComponentFixture<NuevoVehiculoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoVehiculoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
