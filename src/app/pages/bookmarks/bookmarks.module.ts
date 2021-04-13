import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookmarksComponent } from "./bookmarks.component";
import { StoreModule } from "@ngrx/store";
import { bookmarkReducer } from "./state/bookmarks.reducer";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [BookmarksComponent],
  imports: [CommonModule, RouterModule, StoreModule.forFeature("bookmarks", bookmarkReducer)],
})
export class BookmarksModule {}
