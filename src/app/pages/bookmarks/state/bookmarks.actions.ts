import { createAction, props } from "@ngrx/store";

export const removeBookmark = createAction(
  "[Bookmark] Remove bookmark from list",
  props<{ id: number }>()
);
