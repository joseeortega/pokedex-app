import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'src/assets/test/testing';

import { MainPokemonListComponent } from './main-pokemon-list.component';

describe('MainPokemonListComponent', () => {
  let component: MainPokemonListComponent;
  let fixture: ComponentFixture<MainPokemonListComponent>;
  let router: Router;

  configureTestSuite();

  beforeAll(done => (async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainPokemonListComponent
      ],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPokemonListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to pokemon view detail', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.goToPokemonDetail('ivysaur');
    expect(navigateSpy).toHaveBeenCalled();
  });

});
