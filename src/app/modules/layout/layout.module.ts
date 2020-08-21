import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';



@NgModule({
  declarations: [LayoutComponent, MenuComponent, HeaderComponent, FooterComponent, MenuItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
