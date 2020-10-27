import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomBPage } from './room-b.page';

describe('RoomBPage', () => {
  let component: RoomBPage;
  let fixture: ComponentFixture<RoomBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
