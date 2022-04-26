import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialsSection2Page } from './tutorials-section2.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialsSection2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialsSection2PageRoutingModule {}
