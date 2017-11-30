import { Nutrition } from './../nutrition-item.model';
import { NutritionService } from './../nutrition.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nutrition-fast-food',
  templateUrl: './nutrition-fast-food.component.html'
})
export class NutritionFastFoodComponent implements OnInit {
  id: string;
  localNutritionObject: Nutrition;

  constructor(private route: ActivatedRoute, private location: Location, private nutrService: NutritionService) {
    route.params.subscribe(params => {
      this.id = params['id'];
      this.localNutritionObject = this.nutrService.searchNutr(this.id);
    });

  }



  ngOnInit() {
  }

}
