import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { DishdetailPage } from "../pages/dishdetail/dishdetail";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { MenuPage } from "../pages/menu/menu";
import { DishProvider } from "../providers/dish/dish";
import { LeaderProvider } from "../providers/leader/leader";
import { ProcessHttpmsgProvider } from "../providers/process-httpmsg/process-httpmsg";
import { PromotionProvider } from "../providers/promotion/promotion";
import { baseURL } from "../shared/baseurl";
import { MyApp } from "./app.component";
import { FavoriteProvider } from "../providers/favorite/favorite";
import { FavoritesPage } from "../pages/favorites/favorites";
import { ReservationPage } from "../pages/reservation/reservation";
import { CommentPage } from "../pages/comment/comment";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage,
    FavoritesPage,
    ReservationPage,
    CommentPage,
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    MenuPage,
    ContactPage,
    DishdetailPage,
    FavoritesPage,
    ReservationPage,
    CommentPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DishProvider,
    LeaderProvider,
    PromotionProvider,
    ProcessHttpmsgProvider,
    { provide: "BaseURL", useValue: baseURL },
    FavoriteProvider,
  ],
})
export class AppModule { }
