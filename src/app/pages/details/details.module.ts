import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { RouterModule } from "@angular/router";
import { DetailsGuard } from "./services/details.guard";

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: DetailsComponent,
        canActivate: [DetailsGuard],
      },
    ]),
  ],
})
export class DetailsModule {}
