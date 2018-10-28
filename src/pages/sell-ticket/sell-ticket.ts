import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tabs } from 'ionic-angular/umd/navigation/nav-interfaces';

/**
 * Generated class for the SellTicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sell-ticket',
  templateUrl: 'sell-ticket.html',
})
export class SellTicketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellTicketPage');
  }

  clickOnBackButton(tabIndex: number): void {
    (this.navCtrl.parent as Tabs).select(tabIndex, {}, false);
  }

}
