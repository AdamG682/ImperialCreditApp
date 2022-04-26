import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { Tab1PageModule } from '../tab1/tab1.module';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule,
    NgCalendarModule,
    Tab1PageModule
  ],
  declarations: [UserProfilePage],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ]
})
export class UserProfilePageModule {}
