import { ROUTING } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NutritionHomeComponent } from './nutrition-home/nutrition-home.component';
import { NutritionFastFoodComponent } from './nutrition-home/nutrition-fast-food/nutrition-fast-food.component';

@NgModule({
  declarations: [
    AppComponent,
    NutritionHomeComponent,
    NutritionFastFoodComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
