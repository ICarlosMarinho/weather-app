import { createReducer, Action, on } from "@ngrx/store";
import * as homeActions from "./home.actions";

export interface HomeState {
  entity: any;
  loading: boolean;
  error: boolean;
}

export const homeInitialState: HomeState = {
  entity: null,
  loading: false,
  error: false,
};

export const reducer = createReducer(
  homeInitialState,
  on(homeActions.getCurrentWeather, (state) => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(homeActions.getCurrentWeatherSuccess, (state, { entity }) => ({
    ...state,
    entity,
    loading: false,
  })),
  on(homeActions.getCurrentWeatherFailed, (state) => ({
    ...state,
    loading: false,
    error: true,
  })),
  on(homeActions.clearHomeState, () => homeInitialState)
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
  return reducer(state, action);
}
