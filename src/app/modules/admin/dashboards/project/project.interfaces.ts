export interface AlertasLog {
    nombre_Aplicacion: string;
    ip: string;
    puerto: string;
    rutaLog: string;
    error: string;
    fecha: string;
}

export interface ObtenerAlertasPorAplicacion {
    nombre_Aplicacion: string;
    logs: {
        ip: string;
        puerto: string;
        rutaLog: string;
        error: string;
        fecha: string;
    }
}

export interface LogsSinEscritura {
    nombre_Aplicacion: string;
    host: string;
    puerto: string;
    rutaLog: string;
    fechaUltimaEscritura: string;
    fechaUltimaEjecucion: string;
    umbralEscritura: string;
}

export interface LogsSinEscrituraPorAplicacion {
    Nombre_Aplicacion: string;
    Logs: {
        host: string;
        Puerto: string;
        RutaLog: string;
        FechaUltimaEscritura: string;
        FechaUltimaEjecucion: string;
        UmbralEscritura: string;
    }
}

export interface LogsSinTransacciones {
    sistema : string;
    descripcion : string;
    os: string;
    pais: string;
    vista: string;
    transacciones: string;
}

export interface LogsSinTransaccionesPorAplicacion {
    Sistema: string;
    Logs: {
        descripcion : string;
        os: string;
        pais: string;
        vista: string;
        transacciones: string;
    }
}