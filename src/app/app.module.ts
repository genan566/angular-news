import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsHomeComponent } from './pages/news-home/news-home.component';
import { SourceNamePipe } from './customPipes/source-name.pipe';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { TruncatePipe } from './customPipes/truncate.pipe';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NonDefinedPipe } from './customPipes/non-defined.pipe';
import { PlaceholderImagePipe } from './customPipes/placeholder.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsHomeComponent,
    NewsDetailsComponent,

    SourceNamePipe,
    TruncatePipe,
    NonDefinedPipe,
    PlaceholderImagePipe,

    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
