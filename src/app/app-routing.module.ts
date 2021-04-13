import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookmarksComponent } from "./pages/bookmarks/bookmarks.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "bookmarks",
    component: BookmarksComponent,
  },
  {
    path: "details",
    loadChildren: () => import("./pages/details/details.module").then((m) => m.DetailsModule),
  },
  {
    path: "*",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
