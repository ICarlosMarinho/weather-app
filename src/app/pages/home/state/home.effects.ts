import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { WeatherService } from "src/app/shared/services/weather.service";
import * as homeActions from "./home.actions";

@Injectable()
export class HomeEffects {
  loadCurrentWeather = createEffect(() =>
    this.actions.pipe(
      ofType(homeActions.getCurrentWeather),
      mergeMap(({ query }) => this.weatherService.getCurrentWeather(query)),
      map((entity: any) => homeActions.getCurrentWeatherSuccess({ entity }))
    )
  );

  constructor(
    private actions: Actions,
    private store: Store,
    private weatherService: WeatherService
  ) {}
}
