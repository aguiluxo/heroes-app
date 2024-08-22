import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private hs: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
       this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.hs.getHeroById(id))
        ).subscribe( hero => {
          if (!hero) return this.router.navigate(['/heroes.list']);
            this.hero = hero;
            return;
        })
  }

  goBack(): void {
    this.router.navigateByUrl('heroes/list')
  }
}
function delay(arg0: number): import("rxjs").OperatorFunction<import("@angular/router").Params, { id: any; }> {
  throw new Error('Function not implemented.');
}

