import { Component } from '@angular/core';

import { Hero } from 'app/service/hero';
import { HeroService } from 'app/service/hero.service';

import { Router } from "@angular/router";

@Component({
  selector: 'heroes-root',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  title = "Hero Details";
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


  onSelect(hero: Hero, i: number): void {
    this.selectedHero = hero;
    // console.clear();
    // console.log(i);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
