import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable, Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Bookmark } from "src/app/shared/models/bookmark.model";
import { CityWeather } from "src/app/shared/models/weather.model";
import * as homeActions from "./state/home.actions";
import * as homeSelectors from "./state/home.selectors";
import * as bookmarksSelectors from "../bookmarks/state/bookmarks.selectors";

@Component({
  selector: "cm-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  public group: FormGroup;
  public cityWeather: CityWeather;
  public bookmarks: Bookmark[];
  public loading: Observable<boolean>;
  private componentDestroy = new Subject();
  private bookmarksSubscription: Subscription;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.group = this.fb.group({
      searchInput: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    });

    this.store
      .pipe(select(homeSelectors.selectCurrentWeather), takeUntil(this.componentDestroy))
      .subscribe((value) => (this.cityWeather = value));

    this.loading = this.store.pipe(select(homeSelectors.selectCurrentWeatherLoading));

    this.bookmarksSubscription = this.store
      .pipe(select(bookmarksSelectors.selectBookmarks))
      .subscribe((list) => (this.bookmarks = list));
  }

  ngOnDestroy(): void {
    this.componentDestroy.next();
    this.componentDestroy.unsubscribe();
    this.bookmarksSubscription.unsubscribe();
    this.store.dispatch(homeActions.clearHomeState());
  }

  search(): void {
    const query = this.group.controls["searchInput"].value;

    this.store.dispatch(homeActions.getCurrentWeather({ query }));
  }

  onToogleBookmark(): void {
    const bookmark = new Bookmark();

    bookmark.id = this.cityWeather.city.id;
    bookmark.name = this.cityWeather.city.name;
    bookmark.country = this.cityWeather.city.country;
    bookmark.coord = this.cityWeather.city.coord;

    this.store.dispatch(homeActions.toogleBookmark({ entity: bookmark }));
  }

  existsOnBookmarks(): boolean {
    return this.bookmarks.find((item) => item.id == this.cityWeather.city.id) != undefined;
  }
}
