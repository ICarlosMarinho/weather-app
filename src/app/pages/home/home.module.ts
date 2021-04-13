import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { homeReducer } from "./state/home.reducer";
import { HomeEffects } from "./state/home.effects";
import { CurrentWeatherComponent } from "src/app/shared/components/current-weather/current-weather.component";
import { DetailedWeatherComponent } from "src/app/shared/components/detailed-weather/detailed-weather.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HomeComponent, CurrentWeatherComponent, DetailedWeatherComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature("home", homeReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
})
export class HomeModule {}
