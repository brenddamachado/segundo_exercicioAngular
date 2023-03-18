import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MainComponent } from './main/main.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RodapeComponent,
    MainComponent,
    TextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
