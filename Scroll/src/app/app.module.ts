import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { InfiniteScrollModule} from 'ngx-infinite-scroll';
// import { NgScrollbarModule, NG_SCROLLBAR_OPTIONS } from 'ngx-scrollbar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // InfiniteScrollModule,
    // NgScrollbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
