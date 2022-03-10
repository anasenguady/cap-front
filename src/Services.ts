import axios, { AxiosError, AxiosPromise } from 'axios';
import React from 'react';
import { World } from './world';


export class Services {
    server = "http://localhost:5500/"
    //server = "https://isiscapitalist.kk.kurasawa.fr"
    api = this.server + "adventureisis/generic";
    user = "";
    constructor(user: string) {
    this.user = user
    }
    private static handleError(error: AxiosError): AxiosPromise<any> {
        console.error('An error occurred', error.toJSON);
        return Promise.reject(error.message || error);
        }
        private static setHeaders(user : string) {
        return {
        "X-User": user
        }
        }
        getWorld(): AxiosPromise<World> {
        return axios({
        method: 'get',
        url: this.api + '/world',
        headers: Services.setHeaders(this.user)
        }).catch(Services.handleError)
        }
   }


