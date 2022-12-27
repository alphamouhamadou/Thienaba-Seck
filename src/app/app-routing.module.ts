import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'alif',
    loadChildren: () => import('./alif/alif.module').then( m => m.AlifPageModule)
  },
  {
    path: 'ba',
    loadChildren: () => import('./ba/ba.module').then( m => m.BaPageModule)
  },
  {
    path: 'ta',
    loadChildren: () => import('./ta/ta.module').then( m => m.TaPageModule)
  },
  {
    path: 'tha',
    loadChildren: () => import('./tha/tha.module').then( m => m.ThaPageModule)
  },
  {
    path: 'jim',
    loadChildren: () => import('./jim/jim.module').then( m => m.JimPageModule)
  },
  {
    path: 'ha',
    loadChildren: () => import('./ha/ha.module').then( m => m.HaPageModule)
  },
  {
    path: 'kha',
    loadChildren: () => import('./kha/kha.module').then( m => m.KhaPageModule)
  },
  {
    path: 'dal',
    loadChildren: () => import('./dal/dal.module').then( m => m.DalPageModule)
  },
  {
    path: 'jhal',
    loadChildren: () => import('./jhal/jhal.module').then( m => m.JhalPageModule)
  },
  {
    path: 'ra',
    loadChildren: () => import('./ra/ra.module').then( m => m.RaPageModule)
  },
  {
    path: 'zay',
    loadChildren: () => import('./zay/zay.module').then( m => m.ZayPageModule)
  },
  {
    path: 'sin',
    loadChildren: () => import('./sin/sin.module').then( m => m.SinPageModule)
  },
  {
    path: 'shin',
    loadChildren: () => import('./shin/shin.module').then( m => m.ShinPageModule)
  },
  {
    path: 'sad',
    loadChildren: () => import('./sad/sad.module').then( m => m.SadPageModule)
  },
  {
    path: 'dad',
    loadChildren: () => import('./dad/dad.module').then( m => m.DadPageModule)
  },
  {
    path: 'taa',
    loadChildren: () => import('./taa/taa.module').then( m => m.TaaPageModule)
  },
  {
    path: 'za',
    loadChildren: () => import('./za/za.module').then( m => m.ZaPageModule)
  },
  {
    path: 'hayn',
    loadChildren: () => import('./hayn/hayn.module').then( m => m.HaynPageModule)
  },
  {
    path: 'ghayn',
    loadChildren: () => import('./ghayn/ghayn.module').then( m => m.GhaynPageModule)
  },
  {
    path: 'fa',
    loadChildren: () => import('./fa/fa.module').then( m => m.FaPageModule)
  },
  {
    path: 'hah',
    loadChildren: () => import('./hah/hah.module').then( m => m.HahPageModule)
  },
  {
    path: 'kaf',
    loadChildren: () => import('./kaf/kaf.module').then( m => m.KafPageModule)
  },
  {
    path: 'lam',
    loadChildren: () => import('./lam/lam.module').then( m => m.LamPageModule)
  },
  {
    path: 'mim',
    loadChildren: () => import('./mim/mim.module').then( m => m.MimPageModule)
  },
  {
    path: 'nun',
    loadChildren: () => import('./nun/nun.module').then( m => m.NunPageModule)
  },
  {
    path: 'heu',
    loadChildren: () => import('./heu/heu.module').then( m => m.HeuPageModule)
  },
  {
    path: 'waw',
    loadChildren: () => import('./waw/waw.module').then( m => m.WawPageModule)
  },
  {
    path: 'yaa',
    loadChildren: () => import('./yaa/yaa.module').then( m => m.YaaPageModule)
  },
  {
    path: 'zha',
    loadChildren: () => import('./zha/zha.module').then( m => m.ZhaPageModule)
  },
  {
    path: 'lamalif',
    loadChildren: () => import('./lamalif/lamalif.module').then( m => m.LamalifPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
