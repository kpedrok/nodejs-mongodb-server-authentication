import { Component, Inject, OnInit } from '@angular/core'
import { expand, flyInOut } from '../animations/animations'
import { DishService } from '../services/dish.service'
import { LeaderService } from '../services/leader.service'
import { PromotionService } from '../services/promotion.service'
import { Dish } from '../shared/dish'
import { Leader } from '../shared/leader'
import { Promotion } from '../shared/promotion'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {
  dish: Dish
  promotion: Promotion
  leader: Leader
  dishErrMess: string
  promotionErrMess: string
  leaderErrMess: string

  constructor(
    private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('baseURL') private baseURL
  ) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish, errmess => this.dishErrMess = <any>errmess)
    this.promotionservice.getFeaturedPromotion().subscribe(
      promotion => this.promotion = promotion, errmess => this.promotionErrMess = <any>errmess
    )
    this.leaderservice.getFeaturedLeader().subscribe(leader => (this.leader = leader, errmess => this.leaderErrMess = <any>errmess))
  }
}
