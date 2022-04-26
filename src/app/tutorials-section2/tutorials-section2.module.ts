import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialsSection2PageRoutingModule } from './tutorials-section2-routing.module';

import { TutorialsSection2Page } from './tutorials-section2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialsSection2PageRoutingModule
  ],
  declarations: [TutorialsSection2Page]
})
export class TutorialsSection2PageModule {}
