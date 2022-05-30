import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminGuard } from "./guards/admin.guard";
import { DepartmentComponent } from "./components/department/department.component";
import { MascotComponent } from "./components/mascot/mascot.component";
import { VisitComponent } from "./components/visit/visit.component";
import { CreateDepartmentComponent } from "./components/department/create-department/create-department.component";
import { CreateMascotComponent } from "./components/mascot/create-mascot/create-mascot.component";
import { CreateVisitComponent } from "./components/visit/create-visit/create-visit.component";
import { UserComponent } from "./components/register/user/user.component";
import { CreateUserComponent } from "./components/register/create-user/create-user.component";
import { UpdateUserComponent } from "./components/register/update-user/update-user.component";

const appRoute: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]},
    {path: 'dashboard', children: [
        {path: 'user', component: UserComponent, canActivate: [AdminGuard]},
        {path: 'user/create', component: CreateUserComponent, canActivate: [AdminGuard]},
        {path: 'user/update/:id', component: UpdateUserComponent, canActivate: [AdminGuard]},
        {path: 'department', component: DepartmentComponent, canActivate: [AdminGuard]},
        {path: 'department/create', component: CreateDepartmentComponent, canActivate: [AdminGuard]},
        {path: 'mascot', component: MascotComponent, canActivate: [AdminGuard]},
        {path: 'mascot/create', component: CreateMascotComponent, canActivate: [AdminGuard]},
        {path: 'visit', component: VisitComponent, canActivate: [AdminGuard]},
        {path: 'visit/create', component: CreateVisitComponent, canActivate: [AdminGuard]},
    ]},

    {path: 'login', component: LoginComponent}
]

export const appRoutingProvider: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);