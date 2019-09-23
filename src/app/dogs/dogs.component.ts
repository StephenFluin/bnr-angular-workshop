import { Component, OnInit } from '@angular/core';
import { DogList as dogs } from '../dogs';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  dogs = dogs.data;
  constructor() { }

  ngOnInit() {
  }
  unfavorite(event, name) {
    event.stopPropagation();
    const dog = this.dogs.find(dog => dog.name === name);
    dog.favorite = false;
  }

  favorite(event, name) {
    event.stopPropagation();
    const dog = this.dogs.find(dog => dog.name === name);
    dog.favorite = true;
  }

}
