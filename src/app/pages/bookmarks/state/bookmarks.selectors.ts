import { createFeatureSelector, createSelector, Selector } from "@ngrx/store";
import { bookmarkReducer, BookmarksState } from "./bookmarks.reducer";

export const selectbookmarksState = createFeatureSelector("bookmarks") as Selector<any, any>;

export const selectBookmarks = createSelector(
  selectbookmarksState,
  (bookmarkState: BookmarksState) => bookmarkState.list
);
