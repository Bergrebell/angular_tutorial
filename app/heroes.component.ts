//gives access to @Component decorator function
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  // selector, template, providers, etc are called "component metadata"
  selector: 'my-heroes',

  templateUrl: 'app/heroes.component.html',

  styleUrls: ['app/heroes.component.css']
  // register a HeroService provider
  //providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  // zum start der applikation
  ngOnInit(): void {
    this.holDieHelden();
  }

  holDieHelden(): void {
    this.heroService.getHeroes().then(rueckgabeAusPromise => this.heroes = rueckgabeAusPromise);
  }
  // Hero defines the type of object hero expects
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
 }
