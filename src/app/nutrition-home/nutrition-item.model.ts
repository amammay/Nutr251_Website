import { FoodItem } from './food-item.model';
export class Nutrition {
    title: string;
    img: string;
    desc: string;
    fooditem: FoodItem[];

    constructor(title: string, img: string, desc: string, fooditems: FoodItem[]){
        this.title = title;
        this.img = img;
        this.desc = desc;
        this.fooditem = fooditems;
    }
}