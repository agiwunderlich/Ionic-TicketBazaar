import { Component } from "@angular/core";
import { HomePage } from "../home/home";
import { TicketsPage } from "../tickets/tickets";
import { SellTicketPage } from './../sell-ticket/sell-ticket';

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = TicketsPage;
  tab3Root = SellTicketPage;

  constructor() {}
}
