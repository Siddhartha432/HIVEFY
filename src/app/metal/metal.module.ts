import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';
@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddAlbumComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MetalModule { }
