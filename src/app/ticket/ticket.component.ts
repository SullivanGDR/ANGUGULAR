import {Component, OnInit} from '@angular/core';
import {Article} from '../liste/article';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {
  public articles: Article[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getArticles().subscribe(data => {console.log(data)});
  }

  public getTotal() {
    return this.ticketService.getTotal();
  }


}
