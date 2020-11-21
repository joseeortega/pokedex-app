import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'dist/pokedex-app/assets/test/testing';
import { POKEMON_DETAIL_MOCK } from 'src/app/shared/mocks/models/pokemon.mock';
import { PokemonDetailMockService } from 'src/app/shared/mocks/services/pokemon-detail/pokemon-detail.mock.service';

import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonDetailService } from './pokemon-detail.service';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
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
        PokemonDetailComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: PokemonDetailService, useClass: PokemonDetailMockService }
      ]
    })
      .compileComponents();
  })().then(done).catch(done.fail));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
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
