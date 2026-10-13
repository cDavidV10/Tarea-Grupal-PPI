export interface EnlaceClub {
    nombre: string;
    url: string;
}

export interface PerfilClub {
    id: string;
    nombre: string;
    tipo: "Club" | "Página";
    categoria: string;
    descripcion: string;
    requisitos: string;
    contacto: string;
    enlaces: EnlaceClub[];
    imagen: string;
}

const imagenes: Record<string, string> = {
    "F7LTHY": "f7lthy",
    "cultura-motorsv": "cultura-motor",
    "element-car": "element-car",
    "kings-dream": "kings-dream",
    koreansv: "koreansv",
    mostro4x4: "mostro4x4",
    "royal-empire": "royal-empire",
    tijuliando: "tijuilogueando",
    "todo-motor": "todo-motor",
    "top-carsv": "top-carsv",
    "turbo-team": "turbo-team",
    "unique-concept": "unique-concept",
    "unlimited-car": "unlimited-car",
};

const archivos = import.meta.glob<string>(
    "../descripciones/clubes-paginas/*.md",
    { eager: true, query: "?raw", import: "default" },
);

function extraerPerfil(id: string, contenido: string): PerfilClub {
    const campos: Record<string, string> = {};
    const enlaces: EnlaceClub[] = [];
    let campoActual = "";
    let leyendoEnlaces = false;

    for (const linea of contenido.split(/\r?\n/)) {
        const texto = linea.trim();
        if (!texto) continue;

        if (texto === "Enlaces:") {
            campoActual = "";
            leyendoEnlaces = true;
            continue;
        }

        const campo = /^(Nombre del club|Nombre de la página|Etiqueta\/Categoría|Descripción|Requisitos|Contacto):\s*(.*)$/i.exec(texto);
        if (campo) {
            campoActual = campo[1].toLowerCase();
            campos[campoActual] = campo[2];
            leyendoEnlaces = false;
            continue;
        }

        if (leyendoEnlaces) {
            const enlace = /^([^:]+):\s*(https?:\/\/\S+)\s*$/.exec(texto);
            if (enlace) enlaces.push({ nombre: enlace[1].trim(), url: enlace[2] });
            continue;
        }

        if (campoActual) campos[campoActual] = `${campos[campoActual]} ${texto}`.trim();
    }

    const nombre = campos["nombre del club"] || campos["nombre de la página"];
    const categoria = campos["etiqueta/categoría"];
    const descripcion = campos["descripción"];
    const imagen = imagenes[id];

    if (!nombre || !categoria || !descripcion || !imagen) {
        throw new Error(`La descripción del perfil "${id}" está incompleta o no tiene una imagen asociada.`);
    }

    return {
        id,
        nombre,
        tipo: campos["nombre de la página"] ? "Página" : "Club",
        categoria,
        descripcion,
        requisitos: campos["requisitos"],
        contacto: campos["contacto"],
        enlaces,
        imagen: `/images/clubes-paginas/${imagen}.webp`,
    };
}

export const clubes = Object.entries(archivos)
    .map(([ruta, contenido]) => {
        const id = ruta.split("/").at(-1)?.replace(/\.md$/i, "");
        if (!id) throw new Error(`No se pudo obtener el identificador del perfil "${ruta}".`);
        return extraerPerfil(id, contenido);
    })
    .sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
