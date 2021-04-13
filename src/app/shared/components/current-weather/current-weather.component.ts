import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from "@angular/core";
import { CityWeather } from "../../models/weather.model";

@Component({
  selector: "cm-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherComponent {
  @Input() cityWeather: CityWeather | null;
  @Input() existsOnBookmarks: boolean;
  @Output() toogleBookmark = new EventEmitter();

  get cityName(): string {
    return `${this.cityWeather?.city.name}, ${this.cityWeather?.city.country}`;
  }

  onToogleBookmark(): void {
    this.toogleBookmark.emit();
  }
}
