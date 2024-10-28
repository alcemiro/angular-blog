import { Component, NgModule } from '@angular/core';
import { BigCardComponent } from './components/big-card/big-card.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { SmallCardComponent } from './components/small-card/small-card.component';



export const routes: Routes = [
    {path: '', component: BigCardComponent },

    {path: 'menu-bar', component: MenuBarComponent },
    
    {path:'menu-title', component: MenuTitleComponent },
    
    {path: 'small-card', component: SmallCardComponent }
    
];


