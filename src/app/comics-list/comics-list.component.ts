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
 * component shows list of comics books
 */
export class ComicsList implements OnInit {
    loaded: boolean = false; // if data is loaded

    // list of all comics books
    comics;

    // currently selected page
    currentPage = 1;

    // number of items per page
    perPage = 12;

    // number of total available pages
    totalPages: number;

    constructor(
        private comicsListService: ComicsListService
    ) {}

    ngOnInit() {
        // fetch data
        this.setPage(this.currentPage);
    }

    /**
     * sets data to model for selected page
     */
    setPage(newPage: number) {
        // show loading
        this.loaded = false;

        // set new page
        this.currentPage = newPage;

        this.comicsListService.getComicsList(this.currentPage, this.perPage)
        .then(
            comics => {
                // set new data
                this.comics = comics;
                this.totalPages = Math.ceil(comics.data.total / comics.data.limit);

                // hide loading
                this.loaded = true;
            }
        )
        .catch(
            err => {
                console.log('error retrieving comics', err);
            }
        );
    }

}