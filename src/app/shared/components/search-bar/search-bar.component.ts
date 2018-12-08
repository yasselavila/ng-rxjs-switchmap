import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
  private _currentValue = '';

  public formControl: FormControl = new FormControl('');

  @Output()
  public change: EventEmitter<string> = new EventEmitter<string>();

  public ngOnInit(): void {
    this.formControl.valueChanges.pipe(debounceTime(500)).subscribe((value: string) => {
      if (this._currentValue !== value) {
        this.change.emit(value);
        this._currentValue = value;
      }
    });
  }
}
