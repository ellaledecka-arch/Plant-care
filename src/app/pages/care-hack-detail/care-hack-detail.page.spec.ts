import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareHackDetailPage } from './care-hack-detail.page';

describe('CareHackDetailPage', () => {
  let component: CareHackDetailPage;
  let fixture: ComponentFixture<CareHackDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CareHackDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
