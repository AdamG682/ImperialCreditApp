import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertCtrl: AlertController)
  {}

  async showAlert(){
    this.alertCtrl.create({
      header: "Requires Premium Subscription",
      message: "To unlock this lesson, press OK to subscribe for only $1.99.",

      buttons:[
        {
          text: "OK"
        },
        {
          text: "CANCEL"
        }
      ]


    }).then (res => res.present());
  }

}
