import { FoodItem } from './food-item.model';
import { Injectable } from '@angular/core';
import { Nutrition } from './nutrition-item.model';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class NutritionService {

    nutr: any;
    nutrList: Nutrition[];
    foodItemListTacoBell: FoodItem[];
    foodItemListChickFilA: FoodItem[];
    foodItemListWendys: FoodItem[];
    foodItemListSubway: FoodItem[];

    constructor(private http: Http) {
        this.foodItemListTacoBell = [
            new FoodItem('Fresco Tacos', '140', 'Steak or chicken, Crunchy or soft, all the same calories!'),
            new FoodItem('Fresco Burrito Supreme', '340', 'Steak or chicken'),
            new FoodItem('Fresco Bean Burrito', '350', ''),
            new FoodItem('Border Bowls', '500', 'Steak or Chicken. Lots of Protein!'),
            new FoodItem('Breakfast Soft Taco- Fresco Style', '230/210', 'Bacon / Sausage'),
            new FoodItem('Egg and Cheese Waffle Taco', '260', 'Another solid and tasty breakfast option')
        ];
        this.foodItemListChickFilA = [
            new FoodItem('Breakfast Egg White Grill', '300', 'Very Tasty!'),
            new FoodItem('Classic Chicken Sandwich', '440', 'Less calories than most people think'),
            new FoodItem('Grilled Chicken Sandwich', '320', 'The best low cal sandwich option on the menu'),
            new FoodItem('Grilled Nuggets- 8 count', '140', ''),
            new FoodItem('Chicken Tortilla Soup', '260', 'Very delicious for a chain'),
            new FoodItem('Grilled Chicken Cool Wrap', '350', 'The overall most nutritious item on the menu, but kinda bland and boring.')
        ];
        this.foodItemListWendys = [
            new FoodItem('Asian Cashew Chicken Salad', '400', 'The calories assumes you use only one dressing packet though, which is not enough IMO.'),
            new FoodItem('Ultimate Chicken Grill Sandwich', '370', 'Chick-Fil-A’s is far better and has less calories'),
            new FoodItem('Junior Frosty', '200', 'Yes, it’s just as yummy as you remember. If you can spare the calories, hook up it up with a small fry (310) and dip them for that dynamite savory and sweet combo.'),
            new FoodItem('Plain baked potato with small Chilli', '420', 'Just pour the chili over the potato and go to town. It fills you up like crazy, and is packed with protein')
        ];
        this.foodItemListSubway = [
            new FoodItem('Turkey Breast Sub', '280', 'The lowest calorie sub which contains meat.'),
            new FoodItem('Black Forest Ham', '290', ''),
            new FoodItem('Subway Club Sub', '310', 'The best bang for your buck sub by far'),
            new FoodItem('Steak and Cheese', '380', 'The lowest calorie hot sub, and the count includes the cheese. Order this toasted.'),
            new FoodItem('Tuna Salad Chopped salad', '360', 'Not including dressing, but good and filling'),
            new FoodItem('Double Chicken Chopped salad', '220', 'Also not including dressing but by far the most bang for your calorie buck to be had from Subway salads.')
        ];



    }

    setNutr(myNutr) {
        this.nutr = myNutr;
    }

    getNutr() {
        return this.nutr;
    }

    myListOfNutr() {
        this.nutrList = [
            new Nutrition(
                'Taco Bell',
                'https://pbs.twimg.com/profile_images/918972315991384064/qwetpLdA_400x400.jpg',
                'Sauce packets are calorie free with the exception of “Fire”, which tacks on one calorie per packet.',
                this.foodItemListTacoBell),
            new Nutrition(
                'Chick-Fil-A',
                'https://pbs.twimg.com/profile_images/878010440248438785/7c8GErUd_400x400.jpg',
                'be wary of the dipping sauces. Honey Mustard and BBQ are your best options at 45 cals each. The signature “chick-fil-a sauce” is delicious but packs a whopping 140 calories. One sauce packet is enough to get through 8 nuggets.',
                this.foodItemListChickFilA),
            new Nutrition(
                'Wendy’s',
                'https://pbs.twimg.com/profile_images/905469122674393089/m49BKeBS_400x400.jpg',
                '',
                this.foodItemListWendys),

            new Nutrition(
                'Subway',
                'https://pbs.twimg.com/profile_images/763049278306652160/1AgT2EJt_400x400.jpg',
                'Many sandwiches might be “healthy” but that does not matter if they are still riddled with calories. Still, Subway is easy to manage on a diet, and can easily be a “go to” for lunches. Also be aware this guide for Subway assumes you avoid mayo, dressings, and cheese. Most all cheeses at Subway tack on an extra 50-75 calories per 6 inch sub. I recommend you skip the mayos and dressings entirely. While there is not as much variation on calories with the bread as you might think, for the purposes of this guide I will assume wheat or 9 grain. It also assumes a typical “run it through the garden” arrangement as far as what you want on it. Double the count count below if you make it a foot long. Sorry for the long disclaimer, but this place has lots of options and precision can be tough.',
                this.foodItemListSubway),
            new Nutrition('McDonalds', 'https://pbs.twimg.com/profile_images/658746945565954048/Zrf2h3RD_400x400.jpg', ''),
            new Nutrition('BroadHead Bistro', 'https://beavercampusliving.psu.edu/sites/beavercampusliving/files/brodhead_bistro_blue.jpg', ''),

        ];



        return this.nutrList;



    }

    searchNutr(id: string) {
        return this.nutrList.find(x => x.title === id);
    }

}
