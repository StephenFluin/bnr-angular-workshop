import { Component, OnInit } from '@angular/core';
import { DogList as dogs } from '../dogs';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  dogs = dogs.data;
  searchValue = '';

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
  filterDogs() {
    const lowerSearch = this.searchValue.toLowerCase();

    this.dogs = dogs.data.filter(dog => {
      if (!this.searchValue) return true;

      const matchesName = dog.name.toLowerCase().includes(lowerSearch);
      const matchesNickname = dog.nickname.toLowerCase().includes(lowerSearch);
      const matchesDescription = dog.description.toLowerCase().includes(lowerSearch);

      const isTextMatch = (matchesName || matchesNickname || matchesDescription) && lowerSearch.length;

      if (lowerSearch.length) {
        return isTextMatch;
      }
    });
  }
  onKey(event: KeyboardEvent) {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.filterDogs();
  }

}
