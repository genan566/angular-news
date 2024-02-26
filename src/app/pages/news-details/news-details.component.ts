import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  currentNews: News | undefined;
  news: News[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCurrentNews();
  }

  getCurrentNews(): void {
    let newsData = this.newsService.getData();

    const title = this.route.snapshot.paramMap.get('title');
    const formatedSlug = title?.split("-").join(" ").split("#").join("-");
    console.log(formatedSlug);

    const result = newsData.find((n) => n.title === formatedSlug);
    
    if (result) {
      this.currentNews = result;
    } else {
      this.router.navigate(['/**']);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
