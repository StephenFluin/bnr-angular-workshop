import { Component, OnInit } from '@angular/core';
import { Dog } from '../dogs';
import { DogList as dogs } from '../dogs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  dog: Dog;

  constructor() { }

  ngOnInit() {
    this.dog = dogs.data.find((dog) => dog.name === 'Mochi') || { name: 'not found' };
  }

}
