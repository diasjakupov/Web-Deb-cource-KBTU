import { Routes } from '@angular/router';
import { CompanyListComponent } from './view/company-list/company-list.component';
import { VacancyListComponent } from './view/vacancy-list/vacancy-list.component';

export const routes: Routes = [
    {path: "", component: CompanyListComponent},
    {path: "companies/:id/vacancies", component: VacancyListComponent}
];
