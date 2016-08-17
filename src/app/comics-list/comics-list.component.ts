import { Component, OnInit } from '@angular/core';

// constants
import {AppSettings as APP_SETTINGS} from '../shared/appSettings';

// services
import {ComicsListService} from './comics-list.service';

@Component({
    selector: 'comics-list',
    styleUrls: ['./comics-list.style.css'],
    templateUrl: './comics-list.template.html',
    providers: [
        ComicsListService
    ]
})
/**
 * component shows list of comics
 */
export class ComicsList implements OnInit {
    loaded: boolean = false; // if data is loaded

    // list of all comics
    comics;
    currentPage = 1;
    perPage = 5;
    totalPages: number;

    constructor(
        private comicsListService: ComicsListService
    ) {}

    ngOnInit() {
        // fetch data
        this.setPage(this.currentPage);
    }

    setPage(newPage: number) {
        this.currentPage = newPage;

        this.comicsListService.getComicsList(this.currentPage, this.perPage)
        .then(
            comics => {
                this.comics = comics;
                this.totalPages = Math.ceil(comics.data.total / comics.data.limit);
                this.loaded = true;
            }
        )
        .catch(
            err => {
                console.log('error retrieving comics', err);
            }
        );
    }

    navigateToComics(comics) {
        console.log(comics.title);
    }

}