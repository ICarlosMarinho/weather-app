import { createAction, props } from "@ngrx/store";
import { Bookmark } from "src/app/shared/models/bookmark.model";

export const getCurrentWeather = createAction(
  "[Home] Get current weather from API",
  props<{ query: string }>()
);

export const getCurrentWeatherSuccess = createAction(
  "[API] Load current weather success",
  props<{ entity: any }>()
);

export const getCurrentWeatherFailed = createAction("[API] Load current weather failed");

export const toogleBookmark = createAction("[Home] Toogle bookmark", props<{ entity: Bookmark }>());

export const clearHomeState = createAction("[Home] clear home state");
