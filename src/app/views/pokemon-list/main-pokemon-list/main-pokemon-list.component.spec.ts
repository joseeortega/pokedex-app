import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { POKEMON_LIST_MOCK } from 'src/app/shared/mocks/models/pokemon.mock';
import { PokedexMockService } from 'src/app/shared/mocks/services/pokedex/pokedex.mock.service';
import { PokedexService } from 'src/app/shared/services/pokedex/pokedex.service';
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
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: PokedexService, useClass: PokedexMockService }
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

  it('should get all the profiles', done => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.pokemons).toEqual(POKEMON_LIST_MOCK);
    done();
  });

  it('should navigate to pokemon view detail', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.goToPokemonDetail('ivysaur');
    expect(navigateSpy).toHaveBeenCalled();
  });

});
