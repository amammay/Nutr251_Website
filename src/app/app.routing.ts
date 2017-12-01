import { SourcesComponent } from './sources/sources.component';
import { TipsComponent } from './tips/tips.component';
import { NutritionHomeComponent } from './nutrition-home/nutrition-home.component';
import { routes as childRoutes, NutritionHomeModule } from './nutrition-home/nutrition-home.module';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
export const ROUTES: Routes = [
    { path: '', redirectTo: 'nutritionHome', pathMatch: 'full' },
    { path: 'nutritionHome', component: NutritionHomeComponent, children: childRoutes},
    { path: 'tips', component: TipsComponent},
    { path: 'sources', component: SourcesComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
