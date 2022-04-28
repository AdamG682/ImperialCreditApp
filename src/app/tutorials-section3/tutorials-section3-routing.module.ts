import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialsSection3Page } from './tutorials-section3.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialsSection3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialsSection3PageRoutingModule {}
