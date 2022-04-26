import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialsSection1Page } from './tutorials-section1.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialsSection1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialsSection1PageRoutingModule {}
