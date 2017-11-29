import { NutritionFastFoodComponent } from './nutrition-fast-food/nutrition-fast-food.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: '', redirectTo: 'nutritionFastFood', pathMatch: 'full' },
  { path: 'nutritionFastFood', component: NutritionFastFoodComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: []
})
export class NutritionHomeModule { }
