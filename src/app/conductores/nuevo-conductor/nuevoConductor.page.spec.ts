import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { NuevoConductorPage } from './nuevoConductor.page';

describe('NuevoConductorPage', () => {
  let component: NuevoConductorPage;
  let fixture: ComponentFixture<NuevoConductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoConductorPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
