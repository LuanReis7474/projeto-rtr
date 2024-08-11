import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
