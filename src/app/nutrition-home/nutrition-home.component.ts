import { Component, OnInit } from '@angular/core';
import { Nutrition } from './nutrition-item.model';
import { NutritionService } from './nutrition.service';
@Component({
  selector: 'app-nutrition-home',
  templateUrl: './nutrition-home.component.html'
})
export class NutritionHomeComponent implements OnInit {

  nutritions: Nutrition[];
  nutrGrp1: Nutrition[];
  nutrGrp2: Nutrition[];
  nutrGrp3: Nutrition[];

  constructor(private nutritionService: NutritionService) {
    this.nutritions = this.nutritionService.myListOfNutr();

    // this.nutrGrp1 = this.nutritions.slice(0, 4);
    // this.nutrGrp2 = this.nutritions.slice(4, 8);
    // this.nutrGrp3 = this.nutritions.slice(8, 12);
  }

  nutrSet(nutrit: Nutrition){



    console.log(nutrit.title);

  }

  ngOnInit() {
  }

}
