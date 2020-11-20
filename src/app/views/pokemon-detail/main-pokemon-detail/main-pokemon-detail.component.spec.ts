import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { POKEMON_DETAIL_MOCK } from 'src/app/shared/mocks/models/pokemon.mock';
import { MainPokemonDetailMockService } from 'src/app/shared/mocks/services/main-pokemon-detail/main-pokemon-detail.mock.service';
import { configureTestSuite } from 'src/assets/test/testing';

import { MainPokemonDetailComponent } from './main-pokemon-detail.component';
import { MainPokemonDetailService } from './main-pokemon-detail.service';

describe('MainPokemonDetailComponent', () => {
  let component: MainPokemonDetailComponent;
  let fixture: ComponentFixture<MainPokemonDetailComponent>;
  let router: Router;

  const fakeActivatedRoute = {
    snapshot: {
      data: {
        pokemon: POKEMON_DETAIL_MOCK
      }
    }
  };

  configureTestSuite();

  beforeAll(done => (async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainPokemonDetailComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: MainPokemonDetailService, useClass: MainPokemonDetailMockService }
      ]
    })
      .compileComponents();
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPokemonDetailComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init pokemon element by resolver data', () => {
    expect(component.pokemon).toEqual(POKEMON_DETAIL_MOCK);
  });

  it('should navigate to pokemon list view', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.closeDetail();
    expect(navigateSpy).toHaveBeenCalled();
  });

});
