import { Component, OnInit } from '@angular/core';
import { Nutrition } from './nutrition-item.model';
@Component({
  selector: 'app-nutrition-home',
  templateUrl: './nutrition-home.component.html'
})
export class NutritionHomeComponent implements OnInit {

  nutritions: Nutrition[];
  nutrGrp1: Nutrition[];
  nutrGrp2: Nutrition[];
  nutrGrp3: Nutrition[];

  constructor() {
    this.nutritions = [
      new Nutrition('Taco Bell', 'https://pbs.twimg.com/profile_images/918972315991384064/qwetpLdA_400x400.jpg', 'helloTacoBell'),
      new Nutrition('Popeye’s Chicken', 'https://pbs.twimg.com/profile_images/892045859386515456/huvlLQDV_400x400.jpg', 'hello1'),
      new Nutrition('Chick-Fil-A', 'https://pbs.twimg.com/profile_images/878010440248438785/7c8GErUd_400x400.jpg', 'hello2'),
      new Nutrition('Wendy’s', 'https://pbs.twimg.com/profile_images/905469122674393089/m49BKeBS_400x400.jpg', 'hello3'),
      new Nutrition('Panda Express', 'https://pbs.twimg.com/profile_images/495351262167048195/3E8S2C4S_400x400.jpeg', 'hello'),
      new Nutrition('Kentucky Fried Chicken', 'https://pbs.twimg.com/profile_images/930134660075499521/G0XAp-et_400x400.jpg', 'hello'),
      new Nutrition('A&W', 'https://pbs.twimg.com/profile_images/434046919812214784/sTmhuLO-_400x400.png', 'hello'),
      new Nutrition('Subway', 'https://pbs.twimg.com/profile_images/763049278306652160/1AgT2EJt_400x400.jpg', 'hello'),
      new Nutrition('BroadHead Bistro', 'https://beavercampusliving.psu.edu/sites/beavercampusliving/files/brodhead_bistro_blue.jpg', 'hello'),
      new Nutrition('BroadHead Bistro', 'https://beavercampusliving.psu.edu/sites/beavercampusliving/files/brodhead_bistro_blue.jpg', 'hello'),
      new Nutrition('BroadHead Bistro', 'https://beavercampusliving.psu.edu/sites/beavercampusliving/files/brodhead_bistro_blue.jpg', 'hello'),
      new Nutrition('BroadHead Bistro', 'https://beavercampusliving.psu.edu/sites/beavercampusliving/files/brodhead_bistro_blue.jpg', 'hello')
    ];

    this.nutrGrp1 = this.nutritions.slice(0, 4);
    this.nutrGrp2 = this.nutritions.slice(4, 8);
    this.nutrGrp3 = this.nutritions.slice(8, 12);
  }

  ngOnInit() {
  }

}
