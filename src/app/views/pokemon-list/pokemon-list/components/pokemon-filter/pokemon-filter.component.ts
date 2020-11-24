import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { PokemonFilter } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-filter',
  templateUrl: './pokemon-filter.component.html',
  styleUrls: ['./pokemon-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonFilterComponent implements OnInit, OnDestroy {

  /**
   * Contains the search action event outputter
   */
  @Output() searchActionEvent: EventEmitter<PokemonFilter> = new EventEmitter<PokemonFilter>();

  /**
   * Contains the filter form
   */
  filterForm: FormGroup;

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this._initForm(new PokemonFilter(''));

    /**
     * Subscription to the Filter Form that executes the filtering after the time indicated in the debounce time has elapsed
     */
    this.filterForm.valueChanges.pipe(
      takeUntil(this.destroy$), debounceTime(400), distinctUntilChanged()
    ).subscribe((pokemonFilter: PokemonFilter) => {
      this.onSubmit(pokemonFilter);
    });

  }

  /**
   * Destroy all the unclosed subscriptions
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Initialize all form controls by object received
   * @param filter object filter used on init
   * @return initalized form
   */
  private _initForm(filter: PokemonFilter): FormGroup {
    return this.fb.group(
      {
        name: this.fb.control(filter.name, [])
      }
    );
  }

  /**
   * Emit search action event
   */
  private onSubmit(pokemonFilter: PokemonFilter): void {
    this.searchActionEvent.emit(pokemonFilter);
  }

}
