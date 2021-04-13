import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Weather } from "../../models/weather.model";

@Component({
  selector: "cm-detailed-weather",
  templateUrl: "./detailed-weather.component.html",
  styleUrls: ["./detailed-weather.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent {
  @Input() weather: Weather | undefined;

  get weatherIcon(): string {
    return `http://openweathermap.org/img/wn/${this.weather?.icon}@2x.png`;
  }
}
