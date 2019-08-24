import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component'
import {ContactComponent} from './contact/contact.component'
import {HomeComponent} from  './home/home.component'
import {LoginComponent} from './login/login.component'
import {ComponetnotfoundComponent} from './componetnotfound/componetnotfound.component'
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'about',component:AboutComponent},

{path:'contact',component:ContactComponent},
{path:'home',component:HomeComponent}

,{

  path:'**',component:ComponetnotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
