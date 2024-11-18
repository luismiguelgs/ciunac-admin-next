import packageJson from '../../package.json';

export const VERSION = packageJson.version
export const DRAWER_WIDTH = 240

export const ESTADO = [
    {value:'NUEVO',label:'Nuevo'},
    {value:'ELABORADO',label:'Elaborado'},
    {value:'ENTREGADO',label:'Entregado'},
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
    {id:'INGLES-BASICO',label:'INGLÉS BÁSICO', niveles:9},
    {id:'INGLES-INTERMEDIO',label:'INGLÉS INTERMEDIO', niveles:9},
    {id:'INGLES-AVANZADO',label:'INGLÉS AVANZADO', niveles:9},
    {id:'PORTUGUES-BASICO',label:'PORTUGUÉS BÁSICO', niveles:5},
    {id:'PORTUGUES-INTERMEDIO',label:'PORTUGUÉS INTERMEDIO', niveles:4},
    {id:'PORTUGUES-AVANZADO',label:'PORTUGUÉS AVANZADO', niveles:3},
    {id:'ITALIANO-BASICO',label:'ITALIANO BÁSICO', niveles:5},
    {id:'ITALIANO-INTERMEDIO',label:'ITALIANO INTERMEDIO', niveles:4},
    {id:'ITALIANO-AVANZADO',label:'ITALIANO AVANZADO', niveles:3},
    {id:'FRANCES-BASICO',label:'FRANCÉS BÁSICO', niveles:5},
    {id:'FRANCES-INTERMEDIO',label:'FRANCÉS INTERMEDIO', niveles:4},
    {id:'FRANCES-AVANZADO',label:'FRANCÉS AVANZADO', niveles:3},
    {id:'QUECHUA-BASICO',label:'QUECHUA BÁSICO', niveles:5},
    {id:'QUECHUA-INTERMEDIO',label:'QUECHUA INTERMEDIO', niveles:4},
    {id:'QUECHUA-AVANZADO',label:'QUECHUA AVANZADO', niveles:3},
]