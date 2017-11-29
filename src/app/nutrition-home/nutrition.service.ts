import { Injectable } from '@angular/core';
import { Nutrition } from './nutrition-item.model';
import { Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class NutritionService {

    nutr: any;
    nutrList: Nutrition[];

    constructor(private http: Http) { }

    setNutr(myNutr) {
        this.nutr = myNutr;
    }

    getNutr() {
        return this.nutr;
    }

    myListOfNutr() {
        // this.nutrList = [
        //     new Nutrition('Taco Bell', 'https://pbs.twimg.com/profile_images/918972315991384064/qwetpLdA_400x400.jpg', 'hello hello hello hello'),
        //     new Nutrition('Popeye’s Chicken', 'https://pbs.twimg.com/profile_images/892045859386515456/huvlLQDV_400x400.jpg', 'hello1'),
        //     new Nutrition('Chick-Fil-A', 'https://pbs.twimg.com/profile_images/878010440248438785/7c8GErUd_400x400.jpg', 'hello2'),
        //     new Nutrition('Wendy’s', 'https://pbs.twimg.com/profile_images/905469122674393089/m49BKeBS_400x400.jpg', 'hello3'),
        //     new Nutrition('Panda Express', 'https://pbs.twimg.com/profile_images/495351262167048195/3E8S2C4S_400x400.jpeg', 'hello'),
        //     new Nutrition('Kentucky Fried Chicken', 'https://pbs.twimg.com/profile_images/930134660075499521/G0XAp-et_400x400.jpg', 'hello'),
        //     new Nutrition('A&W', 'https://pbs.twimg.com/profile_images/434046919812214784/sTmhuLO-_400x400.png', 'hello'),
        //     new Nutrition('Subway', 'https://pbs.twimg.com/profile_images/763049278306652160/1AgT2EJt_400x400.jpg', 'hello'),
        //     new Nutrition('BroadHead Bistro', 'https://beavercampusliving.psu.edu/sites/beavercampusliving/files/brodhead_bistro_blue.jpg', 'hello'),
        //     new Nutrition('BroadHead Bistro', 'https://beavercampusliving.psu.edu/sites/beavercampusliving/files/brodhead_bistro_blue.jpg', 'hello'),
        //     new Nutrition('BroadHead Bistro', 'https://beavercampusliving.psu.edu/sites/beavercampusliving/files/brodhead_bistro_blue.jpg', 'hello'),
        //     new Nutrition('BroadHead Bistro', 'https://beavercampusliving.psu.edu/sites/beavercampusliving/files/brodhead_bistro_blue.jpg', 'hello')
        // ];
       
        this.http.request('https://api.myjson.com/bins/k866b')
            .subscribe((res: Response) => {
                this.nutrList = res.json();
                return this.nutrList;
            });

       

    }

    searchNutr(id: string) {
        return this.nutrList.find(x => x.title === id);
    }

}
