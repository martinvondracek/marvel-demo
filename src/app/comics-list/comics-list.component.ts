import { Component, OnInit } from '@angular/core';

// constants
import {AppSettings as APP_SETTINGS} from '../shared/appSettings';

// services
import {HttpService} from '../shared/services/http';

@Component({
    selector: 'comics-list',
    styleUrls: ['./comics-list.style.css'],
    templateUrl: './comics-list.template.html'
})
/**
 * component shows list of comics
 */
export class ComicsList implements OnInit {
    loaded: boolean = false; // if data is loaded
    comicsUrl: string;

    // list of all comics
    comics;

    constructor(
        private http: HttpService
    ) {}

    ngOnInit() {
        // set URL
        this.comicsUrl = APP_SETTINGS.API.baseUrl + APP_SETTINGS.API.comics;

        // fetch data
        this.http.get(this.comicsUrl)
        .then(
            comics => {
                this.comics = comics;
                this.loaded = true;
            }
        )
        .catch(
            err => {
                console.log('error retrieving comics', err);
            }
        );
    }

    navigateToComics(c) {
        console.log(c.title);
    }

}