import { Injectable }     from '@angular/core';

// constants
import {AppSettings as APP_SETTINGS} from '../shared/appSettings';

// services
import {HttpService} from '../shared/services/http';

@Injectable()
/**
 * view service for manipulating list of comics books
 */
export class ComicsListService {
    comicsUrl: string;
    
    constructor(
        private http: HttpService
    ) {
        // set URL
        this.comicsUrl = APP_SETTINGS.API.baseUrl + APP_SETTINGS.API.comics;
    }

    /**
     * returns list of comics books
     */
    getComicsList(page: number, perPage: number) {
        let offset = (page - 1) * perPage;

        return this.http.get(this.comicsUrl + '?offset=' + offset + '&limit=' + perPage);
    }

    
}
