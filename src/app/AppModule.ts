import { NgModule } from "@angular/core";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeavyMetalComponent } from "./heavy-metal/heavy-metal.component";
import { LogInComponent } from "./log-in/log-in.component";
import { SymphonicMetalComponent } from "./symphonic-metal/symphonic-metal.component";
import { MetalModule } from "./metal/metal.module";

@NgModule({
  declarations: [
    AppComponent,
    HeavyMetalComponent,
    LogInComponent,
    SymphonicMetalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetalModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
