import { Component, OnInit } from '@angular/core';
import { Nutrition } from './nutrition-item.model';
import { NutritionService } from './nutrition.service';
@Component({
  selector: 'app-nutrition-home',
  templateUrl: './nutrition-home.component.html'
})
export class NutritionHomeComponent implements OnInit {

  nutritions: Nutrition[];

  constructor(private nutritionService: NutritionService) {
    this.nutritions = this.nutritionService.myListOfNutr();
  }

  ngOnInit() {
  }

}
