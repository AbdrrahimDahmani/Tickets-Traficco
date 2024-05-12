import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WelcomBlockComponent } from './home/welcom-block/welcom-block.component';
import { GamesGridComponent } from './home/games-grid/games-grid.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, HomeComponent, WelcomBlockComponent, GamesGridComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
