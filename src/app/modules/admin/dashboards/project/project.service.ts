import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, of } from 'rxjs';
import { AlertasLog, LogsSinEscritura, LogsSinTransacciones, ObtenerAlertasPorAplicacion } from './project.interfaces';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private _data: BehaviorSubject<any> = new BehaviorSubject(null);

    urlBancoMexico = environment.urlBancoMexico;
    urlBancoKio = environment.urlBancoKio;
    urlAforeMexico = environment.urlAforeMexico;
    urlAforeKio = environment.urlAforeKio;
    urlElektra = environment.urlElektra;
    urlConectividad = environment.urlConectividad;

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */
    get data$(): Observable<any> {
        return this._data.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    getData(): Observable<any> {
        return this._httpClient.get('api/dashboards/project').pipe(
            tap((response: any) => {
                this._data.next(response);
            })
        );
    }

    ObtenerAlertasLogs(idAmbiente: string): Observable<AlertasLog[]> {
        
        let urlEnpoint = "";

        switch (idAmbiente) {
            case "1":
                urlEnpoint = environment.urlBancoMexico;
                break;
            case "2":
                urlEnpoint = environment.urlBancoKio;
                break;
            case "3":
                urlEnpoint = environment.urlAforeMexico;
                break;
            case "4":
                urlEnpoint = environment.urlAforeKio;
                break;
            case "5":
                urlEnpoint = environment.urlElektra;
                break;
            case "6":
                urlEnpoint = environment.urlConectividad;
                break;

            default:
                break;

        }

        return this._httpClient.get<AlertasLog[]>(`${urlEnpoint}/${environment.enpointAlertasLogs}`);

        //return of(AlertasLogs);
    }


    ObtenerLogsSinEscritura(idAmbiente: string): Observable<LogsSinEscritura[]> {
        let urlEnpoint = "";

        switch (idAmbiente) {
            case "1":
                urlEnpoint = environment.urlBancoMexico;
                break;
            case "2":
                urlEnpoint = environment.urlBancoKio;
                break;
            case "3":
                urlEnpoint = environment.urlAforeMexico;
                break;
            case "4":
                urlEnpoint = environment.urlAforeKio;
                break;
            case "5":
                urlEnpoint = environment.urlElektra;
                break;
            case "6":
                urlEnpoint = environment.urlConectividad;
                break;

            default:
                break;

        }

        return this._httpClient.get<LogsSinEscritura[]>(`${urlEnpoint}/${environment.enpointLogsSinEscritura}`);
        //return of(AlertasSinEscritura);
    }

    ObtenerLogsSinTransacciones(idAmbiente: string): Observable<LogsSinTransacciones[]> {
        let urlEnpoint = "";

        switch (idAmbiente) {
            case "1":
                urlEnpoint = environment.urlBancoMexico;
                break;
            case "2":
                urlEnpoint = environment.urlBancoKio;
                break;
            case "3":
                urlEnpoint = environment.urlAforeMexico;
                break;
            case "4":
                urlEnpoint = environment.urlAforeKio;
                break;
            case "5":
                urlEnpoint = environment.urlElektra;
                break;
            case "6":
                urlEnpoint = environment.urlConectividad;
                break;

            default:
                break;

        }

        return this._httpClient.get<LogsSinTransacciones[]>(`${urlEnpoint}/${environment.enpointLogsSinTransacciones}`);
        //return of(AlertasSinTransacciones);
    }

}
