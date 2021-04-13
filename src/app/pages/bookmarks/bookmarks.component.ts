import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { Bookmark } from "src/app/shared/models/bookmark.model";
import * as bookmarksSelectors from "../bookmarks/state/bookmarks.selectors";
import * as bookmarksActions from "../bookmarks/state/bookmarks.actions";

@Component({
  selector: "cm-bookmarks",
  templateUrl: "./bookmarks.component.html",
  styleUrls: ["./bookmarks.component.css"],
})
export class BookmarksComponent implements OnInit, OnDestroy {
  public bookmarks: Bookmark[];
  private bookmarksSubscription: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.bookmarksSubscription = this.store
      .pipe(select(bookmarksSelectors.selectBookmarks))
      .subscribe((list) => (this.bookmarks = list));
  }

  ngOnDestroy(): void {
    this.bookmarksSubscription.unsubscribe();
  }

  removeBookmark(id: number | undefined): void {
    this.store.dispatch(bookmarksActions.removeBookmark({ id: id as number }));
  }
}
