import { title } from 'process';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { BigCardComponent } from "./components/big-card/big-card.component";
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent} from '../app/pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, 
    HomeComponent, 
    MenuBarComponent, 
    BigCardComponent, 
    MenuTitleComponent, 
    RouterLink,
    SmallCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})


export class AppComponent {
  
     title = 'angular-blog';
}


