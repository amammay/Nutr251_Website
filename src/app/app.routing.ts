import { TipsComponent } from './tips/tips.component';
import { NutritionHomeComponent } from './nutrition-home/nutrition-home.component';
import { routes as childRoutes, NutritionHomeModule } from './nutrition-home/nutrition-home.module';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'nutritionHome', component: NutritionHomeComponent, children: childRoutes},
    { path: 'tips', component: TipsComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
