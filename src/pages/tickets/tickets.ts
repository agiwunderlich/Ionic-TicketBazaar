import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, NavOptions } from "ionic-angular";
import { Tabs } from "ionic-angular/umd/navigation/nav-interfaces";
import { animation } from "@angular/core/src/animation/dsl";

/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tickets",
  templateUrl: "tickets.html"
})
export class TicketsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad TicketsPage");
  }

  clickOnBackButton(tabIndex: number): void {
    // let options: NavOptions = {
    //   updateUrl: true,
    //   direction: "back",
    //   animate: true,
    //   animation: "md-transition",
    //   duration: 1500,
    //   easing: "in"
    // };
    (this.navCtrl.parent as Tabs).select(tabIndex, {}, false);
  }
}
