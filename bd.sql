-- Tabla de Facultades
CREATE TABLE facultades (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    etiqueta VARCHAR(255) NOT NULL
);

-- Tabla de Estudiantes
CREATE TABLE estudiantes (
    id SERIAL PRIMARY KEY,
    nombres VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    genero VARCHAR(10) NOT NULL,
    tipo_documento VARCHAR(50) NOT NULL,
    numero_documento VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    telefono VARCHAR(20),
    trabajador_unac BOOLEAN,
    img_dni TEXT,
    codigo_unac VARCHAR(50),
    id_facultad INT REFERENCES facultades(id)
);

-- Tabla de Idiomas
CREATE TABLE idiomas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    etiqueta VARCHAR(50) NOT NULL
);

-- Tabla de Ciclos
CREATE TABLE ciclos (
    id SERIAL PRIMARY KEY,
    id_idioma INT REFERENCES idiomas(id),
    nombre VARCHAR(255) NOT NULL,
    etiqueta VARCHAR(50) NOT NULL
);

-- Tabla de Niveles
CREATE TABLE niveles (
    id SERIAL PRIMARY KEY,
    idioma_id INT REFERENCES idiomas(id),
    id_ciclo INT REFERENCES ciclos(id),
    nombre VARCHAR(50) NOT NULL,
    id_nivel INT REFERENCES niveles(id),
    nota_ubicacion_min INT NOT NULL,
    nota_ubicacion_max INT NOT NULL
);

-- Tabla de Periodos
CREATE TABLE periodos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL
);

-- Tabla de Notas
CREATE TABLE notas (
    id SERIAL PRIMARY KEY,
    estudiante_id INT REFERENCES estudiantes(id),
    idioma_id INT REFERENCES idiomas(id),
    id_ciclo INT REFERENCES ciclos(id),
    nivel_id INT REFERENCES niveles(id),
    periodo_id INT REFERENCES periodos(id),
    nota DECIMAL(5, 2) NOT NULL,
    aprobado BOOLEAN NOT NULL,
    estado VARCHAR(50),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    homologado BOOLEAN,
    id_documento INT
);

-- Tabla de Exámenes de Ubicación
CREATE TABLE examenes_ubicacion (
    id SERIAL PRIMARY KEY,
    id_periodo INT REFERENCES periodos(id),
    id_salon INT REFERENCES salones(id),
    id_idioma INT REFERENCES idiomas(id),
    id_cronograma INT REFERENCES cronogramas_ubicacion(id),
    id_profesor INT REFERENCES profesores(id),
    hora_inicio TIMESTAMP NOT NULL,
    hora_fin TIMESTAMP NOT NULL
);

-- Tabla de Cronogramas de Ubicación
CREATE TABLE cronogramas_ubicacion (
    id SERIAL PRIMARY KEY,
    id_periodo INT REFERENCES periodos(id),
    fecha_examen DATE NOT NULL,
    activo BOOLEAN DEFAULT TRUE
);

-- Tabla de Salones
CREATE TABLE salones (
    id SERIAL PRIMARY KEY,
    etiqueta VARCHAR(50) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    capacidad INT NOT NULL
);

-- Tabla de Profesores
CREATE TABLE profesores (
    id SERIAL PRIMARY KEY,
    nombres VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(255),
    fecha_nacimiento DATE NOT NULL,
    genero VARCHAR(10) NOT NULL
);

-- Tabla de Tipo de Solicitudes
CREATE TABLE tipo_solicitudes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    etiqueta VARCHAR(50) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL
);

-- Tabla de Solicitudes
CREATE TABLE solicitudes (
    id SERIAL PRIMARY KEY,
    id_tipo_solicitud INT REFERENCES tipo_solicitudes(id),
    antiguo BOOLEAN DEFAULT FALSE,
    id_estudiante INT REFERENCES estudiantes(id),
    id_idioma INT REFERENCES idiomas(id),
    id_ciclo INT REFERENCES ciclos(id),
    numero_voucher VARCHAR(50),
    fecha_pago DATE NOT NULL,
    trabajador BOOLEAN DEFAULT FALSE,
    img_voucher TEXT,
    img_cert_trabajo TEXT,
    img_cert_estudio TEXT,
    tipo_trabajador VARCHAR(50),
    pago DECIMAL(10, 2),
    alumno_ciunac BOOLEAN DEFAULT FALSE,
    estado VARCHAR(50)
);

-- Tabla de Exámenes de Ubicación Notas
CREATE TABLE examen_ubicacion_notas (
    id SERIAL PRIMARY KEY,
    id_examen INT REFERENCES examenes_ubicacion(id),
    id_solicitud INT REFERENCES solicitudes(id),
    id_ciclo INT REFERENCES ciclos(id),
    id_estudiante INT REFERENCES estudiantes(id),
    nota INT NOT NULL,
    ubicacion INT REFERENCES niveles(id),
    terminado BOOLEAN DEFAULT FALSE
);

-- Tabla de Constancias
CREATE TABLE constancias (
    id SERIAL PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL,
    id_solicitud INT REFERENCES solicitudes(id),
    id_estudiante INT REFERENCES estudiantes(id),
    id_idioma INT REFERENCES idiomas(id),
    id_ciclo INT REFERENCES ciclos(id),
    id_nivel INT REFERENCES niveles(id),
    estado VARCHAR(50),
    horario VARCHAR(50),
    modalidad VARCHAR(50)
);

-- Tabla de Detalles de Constancias
CREATE TABLE constancias_detalle (
    id SERIAL PRIMARY KEY,
    id_constancia INT REFERENCES constancias(id),
    modalidad VARCHAR(50),
    id_periodo INT REFERENCES periodos(id),
    estado VARCHAR(50),
    id_nota INT REFERENCES notas(id)
);

-- Tabla de Certificados
CREATE TABLE certificados (
    id SERIAL PRIMARY KEY,
    id_idioma INT REFERENCES idiomas(id),
    id_estudiante INT REFERENCES estudiantes(id),
    id_ciclo INT REFERENCES ciclos(id),
    tipo VARCHAR(255) NOT NULL,
    id_solicitud INT REFERENCES solicitudes(id),
    curricula_antigua BOOLEAN DEFAULT FALSE,
    horas INT NOT NULL,
    fecha_emision DATE NOT NULL,
    numero_registro VARCHAR(50) NOT NULL,
    fecha_conclusion DATE NOT NULL,
    estado VARCHAR(50) NOT NULL,
    fecha_entrega DATE,
    elaborador VARCHAR(255),
    duplicado BOOLEAN DEFAULT FALSE
);

-- Tabla de Detalles de Certificados
CREATE TABLE certificados_detalle (
    id SERIAL PRIMARY KEY,
    id_certificado INT REFERENCES certificados(id),
    modalidad VARCHAR(50),
    id_nota INT REFERENCES notas(id)
);
