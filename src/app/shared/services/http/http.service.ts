import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

// constants
import {AppSettings as APP_SETTINGS} from '../../../shared/appSettings';

@Injectable()
/**
 * wrapper for angular http service
 * allowes to add authorization headers
 */
export class HttpService {
    constructor(
        private http: Http
    ) {}

    /**
     * wrapper for GET method
     * @return promise
     */
    get(url: string): Promise<any> {
        let fullUrl: string = this.addApiKeyToUrl(url);

        return new Promise<any>((resolve, reject) => {
            this.http.get(fullUrl)
            .subscribe(
                res => {
                    resolve(res.json());
                },
                err => {
                    reject(err);
                }
            );
        });
    }

    /**
     * wrapper for POST method
     * @return promise
     */
    post(): Promise<any> {
        return Promise.reject('not implemented yet');
    }

    /**
     * wrapper for PUT method
     * @return promise
     */
    put(): Promise<any> {
        return Promise.reject('not implemented yet');
    }

    /**
     * adds api key to url string
     */
    private addApiKeyToUrl(url: string): string {
        return url + (url.indexOf('?') >= 0 ? '&' : '?')
            + APP_SETTINGS.API.apiKey;
    }
}
