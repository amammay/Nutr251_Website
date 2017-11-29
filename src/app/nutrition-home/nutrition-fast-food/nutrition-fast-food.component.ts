import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-nutrition-fast-food',
  templateUrl: './nutrition-fast-food.component.html'
})
export class NutritionFastFoodComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute, private location: Location) {
    route.params.subscribe(params => { this.id = params['id']; });

  }

  ngOnInit() {
  }

}
