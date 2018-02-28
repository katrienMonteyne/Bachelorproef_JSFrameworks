import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  
    this.getHeroes();

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes); 
  }

  add(name:string) :void {
    name = name.trim();
    if(!name) {return;}
    this.heroService.addHero( {name} as Hero).subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero) : void {
    this.heroes = this.heroes.filter(h => h !== hero);

    // Ookal ben je niks het de return van deze delete, toch moet je subscriben.
    // Anders zal de observable gewoon niks doen
    this.heroService.deleteHero(hero).subscribe();
  }

/*  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

*/

}
