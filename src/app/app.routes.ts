import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { FichasComponent } from './pages/fichas/fichas.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'roles', component: UserComponent },
    { path: 'mantenimiento', component: MantenimientoComponent },
    { path: 'fichas', component: FichasComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];








