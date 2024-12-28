import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeavyMetalComponent } from './heavy-metal/heavy-metal.component';
import { LogInComponent } from './log-in/log-in.component';
import { FooterComponent } from './footer/footer.component';
import { SymphonicMetalComponent } from './symphonic-metal/symphonic-metal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeavyMetalComponent,
    LogInComponent,
    FooterComponent,
    SymphonicMetalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
