import { Component, OnInit, ViewChild } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DishService } from '../services/dish.service';

import { Dish } from '../shared/dish';
import { switchMap } from 'rxjs/operators';


import { Comment } from '../shared/comment';




@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishDetailComponent implements OnInit {

  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;


  commentForm: FormGroup;
  comment: Comment;

  formErrors = {
    'author': '',
    'comment': ''
  };


  validationMessages = {
    'author': {
      'required': 'Author Name is required.',
      'minlength': 'Author Name must be at least 2 characters long.',
      'maxlength': 'Author Name cannot be more than 25 characters long.'
    },
    'comment': {
      'required': 'Comment is required.',
      'minlength': 'Comment must be at least 1 characters long.'
    }
  };
  feedbackFormDirective: any;


  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) {
    this.createForm();

  }
  // ngOnInit() {
  //   let id = +this.route.snapshot.params['id']; // (+) converts string 'id' to a number

  //   this.dishservice.getDish(id)
  //     .subscribe(dish => this.dish = dish);
  // }



  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }


  goBack(): void {
    this.location.back();
  }

  //comment sections
  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment: ['', [Validators.required, Validators.minLength(1)]],
      rating: 5
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
    this.comment = form.value;
  }


  onSubmit() {
    this.comment = this.commentForm.value;
    console.log(this.comment);
    //to insert date
    this.comment.date = new Date().toISOString();
    //to put it into array
    this.dish.comments.push(this.comment);
    console.log(this.comment);
    this.comment = null;
    //default blank comment form
    this.commentForm.reset({
      author: '',
      comment: '',
      rating: 5
    });

  }

}