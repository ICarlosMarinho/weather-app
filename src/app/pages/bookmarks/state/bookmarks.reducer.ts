import { createReducer, Action, on } from "@ngrx/store";
import { Bookmark } from "src/app/shared/models/bookmark.model";
import * as homeActions from "../../home/state/home.actions";
import * as bookmarkActions from "./bookmarks.actions";

export interface BookmarksState {
  list: Bookmark[];
}

export const bookmarksInitialState: BookmarksState = {
  list: [],
};

const reducer = createReducer(
  bookmarksInitialState,
  on(homeActions.toogleBookmark, (state, { entity }) => ({
    ...state,
    list: toogleBookmark(state.list, entity),
  })),
  on(bookmarkActions.removeBookmark, (state, { id }) => ({
    ...state,
    list: state.list.filter((item) => item.id != id),
  }))
);

export function bookmarkReducer(
  state: BookmarksState | undefined,
  actions: Action
): BookmarksState {
  return reducer(state, actions);
}

function toogleBookmark(list: Bookmark[], entity: Bookmark): Bookmark[] {
  const filtered = list.filter((item) => item.id != entity.id);

  return list.length < filtered.length ? filtered : [...list, entity];
}
