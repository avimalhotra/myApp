import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ErrorComponent } from './error/error.component';
import { ReactComponent } from './react/react.component';
import { AngularComponent } from './angular/angular.component';
import { SearchComponent } from './search/search.component';
import { authGuard } from './auth.guard';
import { logOutGuard } from './log-out.guard';



export const routes: Routes = [
    { path:"", component:HomeComponent, title:"Home Component"},
    { path:"courses", component:CoursesComponent, title:"Course Component",
    children : [
        { path :"react", component:ReactComponent, title:"React Component"},
        { path:"angular", component: AngularComponent, title:"Angular Component"}
    ] },
    { path:"teachers", title:"Teachers Component", loadComponent:()=>import('./teachers/teachers.component').then(m=>m.TeachersComponent)},
    { path:"search", component:SearchComponent, title:"Search Component" },
    { path:"search/:params", component:SearchComponent, title:"Search Query Component"},
    { path:"**", component:ErrorComponent, title:"Error"},
];
