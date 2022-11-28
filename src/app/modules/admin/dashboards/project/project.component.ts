import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ProjectService } from 'app/modules/admin/dashboards/project/project.service';
import { InventoryProduct } from '../../apps/ecommerce/inventory/inventory.types';
import { AlertasLog, LogsSinEscritura, LogsSinTransacciones } from './project.interfaces';

@Component({
    selector       : 'project',
    templateUrl    : './project.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit, OnDestroy
{
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    
    idAmbiente = "1";

    AlertasLog$: Observable<AlertasLog[]>;
    AlertasSinTransacciones$: Observable<LogsSinTransacciones[]>;
    AlertasSinEscritura$: Observable<LogsSinEscritura[]>;

    displayedColumnsAlertasLogs: string[] = ['nombre_Aplicacion','ip', 'puerto', 'rutaLog', 'error', 'fecha']
    displayedColumnsLogsSinEscritura: string[] = ['nombre_Aplicacion','host', 'puerto', 'rutaLog', 'fechaUltimaEscritura', 'fechaUltimaEjecucion', 'umbralEscritura'];
    displayedColumnsLogsSinTransacciones: string[] = ['sistema','descripcion', 'os', 'pais', 'vista', 'transacciones'];
    /**
     * Constructor
     */
    constructor(
        private _projectService: ProjectService,
        private _router: Router,
        private _ActivatedRoute: ActivatedRoute
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        this._ActivatedRoute.params.subscribe(params => {
            this.idAmbiente = params['idAmbiente']; // (+) converts string 'id' to a number
     
            this.AlertasLog$ = this._projectService.ObtenerAlertasLogs(this.idAmbiente);
            this.AlertasSinEscritura$ = this._projectService.ObtenerLogsSinEscritura(this.idAmbiente);
            this.AlertasSinTransacciones$ = this._projectService.ObtenerLogsSinTransacciones(this.idAmbiente);
            console.log(this.idAmbiente);
            
         });

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

}
