import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminGuard } from "./guards/admin.guard";
import { RegisterComponent } from "./components/register/register.component";

const appRoute: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]},
    {path: 'panel-admistrativo', children: [
        {path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]}
    ]},

    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
]

export const appRoutingProvider: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);