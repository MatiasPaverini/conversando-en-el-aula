import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomAPage } from './room-a.page';

describe('RoomAPage', () => {
  let component: RoomAPage;
  let fixture: ComponentFixture<RoomAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
