import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './services/interceptor.service';
import { OwnerComponent } from './components/owner/owner.component';
import { DepartmentComponent } from './components/department/department.component';
import { MascotComponent } from './components/mascot/mascot.component';
import { VisitComponent } from './components/visit/visit.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateOwnerComponent } from './components/owner/create-owner/create-owner.component';
import { CreateDepartmentComponent } from './components/department/create-department/create-department.component';
import { CreateVisitComponent } from './components/visit/create-visit/create-visit.component';
import { CreateMascotComponent } from './components/mascot/create-mascot/create-mascot.component';
import { CreateUserComponent } from './components/register/create-user/create-user.component';
import { UserComponent } from './components/register/user/user.component';
import { UpdateUserComponent } from './components/register/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    LoginComponent,
    OwnerComponent,
    DepartmentComponent,
    MascotComponent,
    VisitComponent,
    TopbarComponent,
    FooterComponent,
    CreateOwnerComponent,
    CreateDepartmentComponent,
    CreateVisitComponent,
    CreateMascotComponent,
    CreateUserComponent,
    UserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
