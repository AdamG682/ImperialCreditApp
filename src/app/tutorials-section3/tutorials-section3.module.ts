import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialsSection3PageRoutingModule } from './tutorials-section3-routing.module';

import { TutorialsSection3Page } from './tutorials-section3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialsSection3PageRoutingModule
  ],
  declarations: [TutorialsSection3Page]
})
export class TutorialsSection3PageModule {}
