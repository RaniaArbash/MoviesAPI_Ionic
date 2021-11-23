import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  isLoading = false;
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.isLoading = true;
    this.results = this.movieService.searchData(this.searchTerm, this.type);
    this.isLoading = false;
  }




}
