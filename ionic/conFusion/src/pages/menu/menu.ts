import { Component, Inject } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { DishProvider } from "../../providers/dish/dish";
import { Dish } from "../../shared/dish";
import { DishdetailPage } from "../dishdetail/dishdetail";
import { FavoriteProvider } from "../../providers/favorite/favorite";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html",
})
export class MenuPage {
  dishes: Dish[];
  errMess: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dishservice: DishProvider,
    @Inject("BaseURL") private BaseURL,
    private favoriteservice: FavoriteProvider,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.dishservice.getDishes().subscribe(
      (dishes) => (this.dishes = dishes),
      (errmess) => (this.errMess = <any>errmess)
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MenuPage");
  }

  dishSelected(event, dish) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DishdetailPage, {
      dish: dish,
    });
  }

  addToFavorites(dish: Dish) {
    console.log("Adding to Favorites", dish.id);
    this.favoriteservice.addFavorite(dish.id);

    this.toastCtrl.create({
      message: 'Dish ' + dish.id + ' added as a favorite successfully',
      duration: 3000
    }).present();
  }
}
