import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../ticket/ticket.service';
import {Article} from './article';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit {

  articleForm: FormGroup;

  articles: Article[] = [];

  constructor(private formBuilder: FormBuilder, private ticketService: TicketService) {
    this.articleForm = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.articles = this.ticketService.getArticles();
  }

  onSubmit() {
    this.articles.push(this.articleForm.value);
  }

  public supprimerArticle(i: any) {
    this.ticketService.supprimerArticle(i);
  }
}
