import { Injectable } from '@angular/core';
import {Article} from '../liste/article';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  public articles: Article[] = [];

  constructor(private http: HttpClient) { }

  public getArticles() {
    return this.http.get('http://localhost:8080/api/articles');
  }

  public supprimerArticle(i: number) {
    this.articles.slice(i, 1);
  }

  public getTotal() {
    return this.articles.reduce(
      (total, article) => total + article.quantity * article.price, 0
    );
  }
}
