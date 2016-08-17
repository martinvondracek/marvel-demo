import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

// constants
import {AppSettings as APP_SETTINGS} from '../shared/appSettings';

// services
import {HttpService} from '../shared/services/http';

@Component({
    selector: 'comics-detail',
    styleUrls: ['./comics-detail.style.css'],
    templateUrl: './comics-detail.template.html'
})
/**
 * component shows details of selected comiscs book
 */
export class ComicsDetail implements OnInit {
    loaded: boolean = false; // if data is loaded
    comicsUrl: string;

    // comics book detail
    comics;

    constructor(
        private route: ActivatedRoute,
        private http: HttpService
    ) {}

    ngOnInit() {
        // set URL
        this.comicsUrl = APP_SETTINGS.API.baseUrl + APP_SETTINGS.API.comics;

        // get comics book ID from router params
        let id = this.route.snapshot.params['id'];

        // fetch data
        this.http.get(this.comicsUrl + '/' + id)
        .then(
            comics => {
                this.comics = comics.data.results[0];
                this.loaded = true;
            }
        )
        .catch(
            err => {
                console.log('error retrieving comics', err);
            }
        );
    }

    /**
     * method returns url to selected comics book detail on external page
     */
    getDetailUrl(): string {
        if (this.comics.urls && this.comics.urls.length) {
            let url = this.comics.urls.filter(url => {
                return url.type === 'detail';
            });
            
            return (url && url.length) ? url[0].url : undefined;
        } else {
            return undefined;
        }
    }

}