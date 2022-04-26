import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialsSection1PageRoutingModule } from './tutorials-section1-routing.module';

import { TutorialsSection1Page } from './tutorials-section1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialsSection1PageRoutingModule
  ],
  declarations: [TutorialsSection1Page]
})
export class TutorialsSection1PageModule {}
