import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsHomeComponent } from './pages/news-home/news-home.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: NewsHomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'news-details/:title',
    component: NewsDetailsComponent,
    data: { animation: 'DetailsPage' },
  },
  { path: '**', component: PageNotFoundComponent ,data: { animation: 'NotFound' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
