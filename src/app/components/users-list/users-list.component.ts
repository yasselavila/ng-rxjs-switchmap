import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { User } from '../../shared/models';

export const enum Filter {
  None = 1,
  LessThan10Followers = 2,
  Between10And100Followers = 3,
  MoreThan100Followers = 4
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  public _filterApplied: Filter = Filter.None;
  public _data: User[];
  public _users: User[];

  @Input()
  public set users(value: User[]) {
    this._filterApplied = Filter.None;
    this._users = this._data = value;
    this.cd.markForCheck();
  }

  public constructor(private cd: ChangeDetectorRef) {}

  public trackUser(index: number, user: User): any {
    return user.login;
  }

  public clearFilters(): void {
    this._users = this._data;
    this._filterApplied = Filter.None;
    this.cd.markForCheck();
  }

  public filterByLessThan10Followers(): void {
    this._users = this._data.filter((user: User) => user.followers < 10);
    this._filterApplied = Filter.LessThan10Followers;
    this.cd.markForCheck();
  }

  public filterByBetween10And100Followers(): void {
    this._users = this._data.filter((user: User) => user.followers >= 10 && user.followers <= 100);
    this._filterApplied = Filter.Between10And100Followers;
    this.cd.markForCheck();
  }

  public filterByMoreThan100Followers(): void {
    this._users = this._data.filter((user: User) => user.followers > 100);
    this._filterApplied = Filter.MoreThan100Followers;
    this.cd.markForCheck();
  }
}
