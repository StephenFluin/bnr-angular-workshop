import { Component, OnInit } from '@angular/core';
import { DogList as dogs } from '../dogs';
@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  dogs = dogs.data;
 breeds = Array.from(
    new Set(dogs.data.flatMap(dog => dog.breeds))
 ).sort((a,b) => a > b ? 1 : -1);
  searchValue = '';
  breedFilter = '';

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
      let valid = true;

      if (this.breedFilter.length > 0) {
        if (dog.breeds.indexOf(this.breedFilter) === -1) {
          valid = false;
        }
      }

      const matchesName = dog.name.toLowerCase().includes(lowerSearch);
      const matchesNickname = dog.nickname.toLowerCase().includes(lowerSearch);
      const matchesDescription = dog.description.toLowerCase().includes(lowerSearch);

      const isTextMatch = (matchesName || matchesNickname || matchesDescription) && lowerSearch.length;

      if (lowerSearch.length && !isTextMatch) {
        valid = false;
      }
      return valid;
    });
    console.log('dogs is now',this.dogs);
  }
  onKey(event: KeyboardEvent) {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.filterDogs();
  }
  onBreedChange(value) {
    console.log('breed changed to',value);
    this.breedFilter = value;
    this.filterDogs();
  }

}
