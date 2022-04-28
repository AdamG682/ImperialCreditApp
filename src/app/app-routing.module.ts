import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'tutorials-section1',
    loadChildren: () => import('./tutorials-section1/tutorials-section1.module').then( m => m.TutorialsSection1PageModule)
  },
  {
    path: 'tutorials-section2',
    loadChildren: () => import('./tutorials-section2/tutorials-section2.module').then( m => m.TutorialsSection2PageModule)
  },  {
    path: 'cal-modal',
    loadChildren: () => import('./cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'tutorials-section3',
    loadChildren: () => import('./tutorials-section3/tutorials-section3.module').then( m => m.TutorialsSection3PageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
