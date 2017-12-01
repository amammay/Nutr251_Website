import { ROUTING } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NutritionHomeComponent } from './nutrition-home/nutrition-home.component';
import { NutritionFastFoodComponent } from './nutrition-home/nutrition-fast-food/nutrition-fast-food.component';
import { NutritionService } from './nutrition-home/nutrition.service';
import { TipsComponent } from './tips/tips.component';
import { SourcesComponent } from './sources/sources.component';

@NgModule({
  declarations: [
    AppComponent,
    NutritionHomeComponent,
    NutritionFastFoodComponent,
    TipsComponent,
    SourcesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    ROUTING,
    HttpModule
  ],
  providers: [ NutritionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
