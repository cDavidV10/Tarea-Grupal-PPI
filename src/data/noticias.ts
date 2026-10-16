interface Noticia {
    id: string;
    bloque: number;
    categoria: string;
    titulo: string;
    metadatos: string;
    primerParrafo: string;
    segundoParrafo: string;
    url: string;
    imagen: string;
}

const bloquesPorArchivo: Record<string, number> = {
    "bloque-01-granprix": 1,
    "bloque-02-motociclista": 2,
    "bloque-03-ninos-competencia": 3,
    "bloque-04-ninos-analisis-video": 4,
    "bloque-05-incautacion-inmuebles": 5,
    "bloque-06-operativo-incautacion-video": 6,
    "bloque-07-pista-san-miguel": 7,
    "bloque-08-motovelocidad-indes": 8,
    "bloque-09-motovelocidad-jabali": 9,
    "bloque-10-premio-suzuki-video": 10,
    "bloque-11-premio-suzuki-final": 11,
    "bloque-12-suzuki-motos-video": 12,
};

const archivos = import.meta.glob<string>(
    "../descripciones/noticias/*.md",
    { eager: true, query: "?raw", import: "default" },
);

function obtenerCampo(contenido: string, campo: string): string {
    const valor = new RegExp(`^${campo}:\\s*(.*)$`, "m").exec(contenido)?.[1];
    if (!valor) throw new Error(`Falta el campo "${campo}" en una noticia.`);
    return valor;
}

function crearNoticia(ruta: string, contenido: string): Noticia {
    const id = ruta.split("/").at(-1)?.replace(/\.md$/i, "");
    const bloque = id ? bloquesPorArchivo[id] : undefined;
    if (!id || !bloque) {
        throw new Error(`No hay un número de bloque asignado al archivo "${ruta}".`);
    }

    const enlaces = /\]\((https?:\/\/[^)]+)\)/.exec(obtenerCampo(contenido, "Enlace"));
    if (!enlaces) throw new Error(`El enlace de la noticia "${id}" no es válido.`);

    return {
        id,
        bloque,
        categoria: obtenerCampo(contenido, "Categoría \\(Etiqueta\\)"),
        titulo: obtenerCampo(contenido, "Título de la Noticia"),
        metadatos: obtenerCampo(contenido, "Metadatos"),
        primerParrafo: obtenerCampo(contenido, "Primer Párrafo"),
        segundoParrafo: obtenerCampo(contenido, "Segundo Párrafo"),
        url: enlaces[1],
        imagen: `/images/noticias/n${bloque}.webp`,
    };
}

export const noticias = Object.entries(archivos)
    .map(([ruta, contenido]) => crearNoticia(ruta, contenido))
    .sort((a, b) => a.bloque - b.bloque);

export type { Noticia };
