import { Component, OnInit } from '@angular/core';
import { News } from '../../interfaces/news';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss'],
})
export class NewsHomeComponent implements OnInit {
  news: News[] = [];
  dataIsLoaded: boolean = false;

  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  navigateToDetails(currentNews: News) {
    this.router.navigate([
      '/news-details',
      currentNews.title.replace(/-/g, '#').replace(/ /g, '-'),
    ]);
  }

  getNews(): void {
    this.newsService.getNews().subscribe((news) => {
      this.news = news;
      this.dataIsLoaded = true;
      this.newsService.setData(news);
    });
  }
}
