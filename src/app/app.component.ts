import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  rForm: FormGroup;
  post: any;                   // A property for our submitted form
  description: string = '';
  name: string = '';

  constructor(fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'validate': ''
    });
  }

  addPost(post) {
    this.name = post.name;
    this.description = post.description;
  }


}
