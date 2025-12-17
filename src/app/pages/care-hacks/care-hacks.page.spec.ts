import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareHacksPage } from './care-hacks.page';

describe('CareHacksPage', () => {
  let component: CareHacksPage;
  let fixture: ComponentFixture<CareHacksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CareHacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
