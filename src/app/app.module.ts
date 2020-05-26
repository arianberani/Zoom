import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServiceComponent } from './components/service/service.component';
import { DesignComponent } from './components/design/design.component';
import { PhoneresponsiveComponent } from './components/phoneresponsive/phoneresponsive.component';
import { DesignSliderComponent } from './components/design-slider/design-slider.component';
import { SectionIconComponent } from './components/section-icon/section-icon.component';
import { TeamComponent } from './components/team/team.component';
import { YourVisionComponent } from './components/your-vision/your-vision.component';
import { SubbscribeComponent } from './components/subbscribe/subbscribe.component';
import { SomeSiteComponent } from './components/some-site/some-site.component';
import { ModernDesignComponent } from './components/modern-design/modern-design.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailsComponent } from './pages/services/service-details/service-details.component';
import { ServicesMainComponent } from './pages/services/services-main/services-main.component';
import { PortfolioDitailsComponent } from './components/portfolio/portfolio-ditails/portfolio-ditails.component';
import { PortfolioMainComponent } from './components/portfolio/portfolio-main/portfolio-main.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { AboutMainComponent } from './components/about/about-main/about-main.component';
import { AboutDetailsComponent } from './components/about/about-details/about-details.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ServiceComponent,
    DesignComponent,
    PhoneresponsiveComponent,
    DesignSliderComponent,
    SectionIconComponent,
    TeamComponent,
    YourVisionComponent,
    SubbscribeComponent,
    SomeSiteComponent,
    ModernDesignComponent,
    ClientsComponent,
    ContactUsComponent,
    HomeComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    ServicesMainComponent,
    PortfolioDitailsComponent,
    PortfolioMainComponent,
    PortfolioComponent,
    AboutComponent,
    AboutMainComponent,
    AboutDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
