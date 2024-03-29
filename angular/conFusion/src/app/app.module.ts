import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSelectModule } from '@angular/material/select'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSliderModule } from '@angular/material/slider'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import 'hammerjs'
import { AboutComponent } from './about/about.component'
import { AppRoutingModule } from './app-routing/app-routing.module'
import { AppComponent } from './app.component'
import { ContactComponent } from './contact/contact.component'
import { HighlightDirective } from './directives/highlight.directive'
import { DishdetailComponent } from './dishdetail/dishdetail.component'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { MenuComponent } from './menu/menu.component'
import { DishService } from './services/dish.service'
import { FeedbackService } from './services/feedback.service'
import { LeaderService } from './services/leader.service'
import { ProcessHTTPMsgService } from './services/process-httpmsg.service'
import { PromotionService } from './services/promotion.service'
import { baseURL } from './shared/baseurl'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule
  ],
  entryComponents: [LoginComponent],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    ProcessHTTPMsgService,
    FeedbackService,
    { provide: 'baseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
