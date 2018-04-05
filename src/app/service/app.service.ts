import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TOKEN } from '../config/constant';
import { environment } from '../../environments/environment';
import { reporte } from '../model/reporte.component';

@Injectable()

export class AppService{

    constructor( private http: HttpClient){}

    private url:string = environment.urlGit
    private endPoint: string = 'repos/beyakus/demo/issues'+TOKEN;
    private urlGitHub: string = this.url + this.endPoint;
    
    getIssues(){
        return this.http.get<reporte>(this.urlGitHub);
    }

    setNuevoIssue(body: object){
        return this.http.post<any>(this.urlGitHub,body);
    }

}