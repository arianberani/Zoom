import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import {ServiceComponent} from "./components/service/service.component";
import {ServicesComponent} from "./pages/services/services.component";
import {ServiceDetailsComponent} from "./pages/services/service-details/service-details.component";
import {ServicesMainComponent} from "./pages/services/services-main/services-main.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {PortfolioDitailsComponent} from "./components/portfolio/portfolio-ditails/portfolio-ditails.component";
import {PortfolioMainComponent} from "./components/portfolio/portfolio-main/portfolio-main.component";
import {AboutComponent} from "./components/about/about.component";
import {AboutDetailsComponent} from "./components/about/about-details/about-details.component";
import {AboutMainComponent} from "./components/about/about-main/about-main.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: "full"
  },
  {
    path: 'homepage',
    component: HomeComponent
  },

  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'services',            //<---- parent component declared here
    component: ServicesComponent,
    children: [
      {path: '', component: ServicesMainComponent},//<---- child components declared here
      {
        path:'services-details/:id',
        component: ServiceDetailsComponent
      },
      ]
  },

  {
    path: 'portfolio',            //<---- parent component declared here
    component: PortfolioComponent,
    children: [
      {path: '', component: PortfolioMainComponent},//<---- child components declared here
      {
        path:'portfolio-ditails/:id',
        component: PortfolioDitailsComponent
      },
    ]
  },
  {
    path: 'about',            //<---- parent component declared here
    component: AboutComponent,
    children: [
      {path: '', component: AboutMainComponent},//<---- child components declared here
      {
        path:'about-details/:id',
        component: AboutDetailsComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
