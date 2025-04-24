import packageJson from '../../package.json';

export const VERSION = packageJson.version
export const DRAWER_WIDTH = 240

export const MESES = [
    {value:'ENERO', label:'Enero'},
    {value:'FEBRERO', label:'Febrero'},
    {value:'MARZO', label:'Marzo'},
    {value:'ABRIL', label:'Abril'},
    {value:'MAYO', label:'Mayo'},
    {value:'JUNIO', label:'Junio'},
    {value:'JULIO', label:'Julio'},
    {value:'AGOSTO', label:'Agosto'},
    {value:'SEPTIEMBRE', label:'Septiembre'},
    {value:'OCTUBRE', label:'Octubre'},
    {value:'NOVIEMBRE', label:'Noviembre'},
    {value:'DICIEMBRE', label:'Diciembre'},
]

export const ESTADO = [
    {value:'NUEVO',label:'NUEVO'},
    {value:'ASIGNADO',label:'ASIGNADO'},
    {value:'ELABORADO',label:'EN PROCESO'},
    {value:'ENTREGADO',label:'TERMINADO'},
]
export const ESTADO_EXAMEN = [
    {value:'PROGRAMADO',label:'Programado'},
    {value:'ASIGNADO',label:'Asignado'},
    {value:'TERMINADO',label:'Terminado'},
]
export const NIVEL = [
    {value:'BASICO',label:'BÁSICO'},
    {value:'INTERMEDIO',label:'INTERMEDIO'},
    {value:'AVANZADO',label:'AVANZADO'},
]

export const GENERO = [
    {value: 'M', label: 'MASCULINO'},
    {value: 'F', label: 'FEMENINO'},
]

export const PROGRAMAS = [
    {id:'INGLES-BASICO',label:'INGLÉS BÁSICO', niveles:9, horas:360},
    {id:'INGLES-INTERMEDIO',label:'INGLÉS INTERMEDIO', niveles:9, horas:360},
    {id:'INGLES-AVANZADO',label:'INGLÉS AVANZADO', niveles:9,horas:360},
    {id:'PORTUGUES-BASICO',label:'PORTUGUÉS BÁSICO', niveles:5,horas:200},
    {id:'PORTUGUES-INTERMEDIO',label:'PORTUGUÉS INTERMEDIO', niveles:4, horas:160},
    {id:'PORTUGUES-AVANZADO',label:'PORTUGUÉS AVANZADO', niveles:3, horas:120},
    {id:'ITALIANO-BASICO',label:'ITALIANO BÁSICO', niveles:5, horas:200},
    {id:'ITALIANO-INTERMEDIO',label:'ITALIANO INTERMEDIO', niveles:4, horas:160},
    {id:'ITALIANO-AVANZADO',label:'ITALIANO AVANZADO', niveles:3, horas:120},
    {id:'FRANCES-BASICO',label:'FRANCÉS BÁSICO', niveles:5, horas:200},
    {id:'FRANCES-INTERMEDIO',label:'FRANCÉS INTERMEDIO', niveles:4, horas:160},
    {id:'FRANCES-AVANZADO',label:'FRANCÉS AVANZADO', niveles:3, horas:120},
    {id:'QUECHUA-BASICO',label:'QUECHUA BÁSICO', niveles:5, horas:200},
    {id:'QUECHUA-INTERMEDIO',label:'QUECHUA INTERMEDIO', niveles:4, horas:160},
    {id:'QUECHUA-AVANZADO',label:'QUECHUA AVANZADO', niveles:3, horas:120},
]