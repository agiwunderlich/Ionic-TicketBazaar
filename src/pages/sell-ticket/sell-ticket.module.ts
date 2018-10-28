import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellTicketPage } from './sell-ticket';

@NgModule({
  declarations: [
    SellTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(SellTicketPage),
  ],
})
export class SellTicketPageModule {}
