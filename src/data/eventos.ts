export interface Evento {
  fecha?: string;
  frecuencia?: string;
  dia?: string;
  horaCorta?: string;
  tipo: string;
  nombre: string;
  img?: string;
  lugar: string;
  hora: string | null;
  precio: number | null;
  precioTexto?: string;
  url: string;
  descripcionArchivo?: string;
}

export const eventos: Evento[] = [
  {
    frecuencia: "Todos los sabados",
    dia: "SAB",
    horaCorta: "7 P. M.",
    tipo: "Noche de echadas",
    nombre: "Noche de echadas",
    img: "noche-de-echadas.webp",
    lugar: "Autódromo Internacional El Jabalí, La Libertad",
    hora: "7:00 p. m. – 12:00 a. m.",
    precio: 3,
    precioTexto: "Entrada: $3.00 (competidores $5.00)",
    url: "https://www.autodromoeljabali.com/eventos/noche-de-echadas",
    descripcionArchivo: "noche-echadas",
  },
  {
    fecha: "2026-10-17",
    tipo: "Car Meeting",
    nombre: "Racemania Meet Weekend",
    img: "racemania-meet-weekend.webp",
    lugar: "Autódromo Internacional El Jabalí, La Libertad",
    hora: "12:00 p. m.",
    precio: 6,
    url: "https://www.vamoseventos.com/event/racemania-meet-weekend-0a7dc8be-20fa-4e66-ac71-d881d10d12d3",
    descripcionArchivo: "recemania",
  },
  {
    fecha: "2026-10-17",
    tipo: "Car Show",
    nombre: "Supercar Fest",
    img: "SUPERCAR_SANTA_ANA.webp",
    lugar: "Las Ramblas, Santa Ana",
    hora: "1:00 p. m. – 6:00 p. m.",
    precio: null,
    precioTexto: "Entrada: llevar un juguete o apoyar con más de una persona",
    url: "https://www.tiktok.com/@engine_hub503/photo/7689159518495755527?image_index=2",
    descripcionArchivo: "super-cardfest",
  },
  {
    fecha: "2026-10-18",
    tipo: "Car Show",
    nombre: "All Japan Day 2026",
    img: "All_JAPAN_DAY.webp",
    lugar: "Parqueo UCA",
    hora: "8:00 a. m.",
    precio: 1,
    precioTexto: "Entrada: $1.00 · Parqueo: $2.00",
    url: "https://www.facebook.com/reel/1416963087295625?locale=es_LA",
    descripcionArchivo: "all-japan-day",
  },
  {
    fecha: "2026-10-24",
    tipo: "Car Meeting",
    nombre: "Car Meeting Formando Sonrisas 2026",
    img: "car-meet-formando-sonrisas.webp",
    lugar: "Garden Mall San Miguel, San Miguel",
    hora: "3:00 p. m.",
    precio: null,
    precioTexto: "Entrada: un juguete",
    url: "https://www.facebook.com/gardenmallsv/posts/car-meet-sonrisas-2026-en-garden-mall-nos-unimos-a-esta-noble-causa-con-los-chic/1506808444823299/",
    descripcionArchivo: "sonrisas",
  },
  {
    fecha: "2026-10-25",
    tipo: "Karting",
    nombre: "Campeonato 4T, 6.ª ronda",
    img: "campeonato4t.webp",
    lugar: "Autódromo Internacional El Jabalí, La Libertad",
    hora: null,
    precio: null,
    url: "https://www.autodromoeljabali.com/karting/campeonato-4t",
    descripcionArchivo: "campeonato4t",
  },
  {
    fecha: "2026-10-31",
    tipo: "Car Meeting",
    nombre: "Teyo Horror Night",
    img: "Teyo_Night.webp",
    lugar: "Teyo Detailing Studio, San Miguel",
    hora: "6:00 p. m. – 11:00 p. m.",
    precio: 3,
    url: "https://vt.tiktok.com/ZSbTYrS2y/",
    descripcionArchivo: "teyo-horror",
  },
  {
    fecha: "2026-11-15",
    tipo: "Car Show",
    nombre: "Car Show Zacate Fest - Edición 1",
    img: "car-show_ Zacateluca.webp",
    lugar: "Pista El Salvador SpeedTrack (Ex Zacate Raceway)",
    hora: "8:00 a. m. – 5:00 p. m.",
    precio: null,
    precioTexto: "Más detalles por confirmar",
    url: "https://vt.tiktok.com/ZSbTYBjpE/",
    descripcionArchivo: "zacatefest",
  },
  {
    fecha: "2026-11-15",
    tipo: "Car Show",
    nombre: "Dynamics Crew Competition",
    img: "Dynamics.webp",
    lugar: "Zacatecoluca, La Paz",
    hora: "8:00 a. m. – 5:00 p. m.",
    precio: null,
    precioTexto: "Inscripción: $15 · Entrada: $2 · Parqueo: $3",
    url: "https://vt.tiktok.com/ZSbT2pVkf/",
    descripcionArchivo: "dynamics-crew",
  },
  {
    fecha: "2026-11-21",
    tipo: "Car Show",
    nombre: "Super Auto Show (SAS), edición XXXVIII",
    img: "SAS.webp",
    lugar: "Lugar por confirmar",
    hora: null,
    precio: null,
    precioTexto: "Más detalles por confirmar",
    url: "https://vt.tiktok.com/ZSbT2RbnG/",
    descripcionArchivo: "sas",
  },
  {
    fecha: "2026-11-22",
    tipo: "Car Show",
    nombre: "Classic Garage",
    img: "classic_garage.webp",
    lugar: "UCA",
    hora: null,
    precio: 1,
    precioTexto: "Entrada: $1.00 · Parqueo: $3.00",
    url: "https://vt.tiktok.com/ZSbTYgHqq/",
    descripcionArchivo: "classic-garage",
  },
  {
    tipo: "Truck Show",
    nombre: "Inox for Trucks, 10 años de aniversario",
    img: "inox-for-trucks-10-aniversario.webp",
    lugar: "Pista Singüil, Santa Ana",
    hora: "12:00 p. m.",
    precio: null,
    url: "https://www.facebook.com/pistasinguilelsalvador/posts/pfbid0wXvNtS7PXaiMZs9PbN2HuAqSqUgLgc186fRxtYCoYdFsUYRG3jtx6aiUBB3EcYekl",
    descripcionArchivo: "inixfortuck",
  },
  {
    fecha: "2026-11-29",
    tipo: "Car Show",
    nombre: "Nissan Fest 6",
    img: "nissan-fest.webp",
    lugar: "Pista Singüil, Santa Ana",
    hora: "Por confirmar",
    precio: 0,
    url: "",
    descripcionArchivo: "nissanfestival",
  },
  {
    fecha: "2026-05-31",
    tipo: "Resistencia",
    nombre: "3 Horas de El Salvador",
    img: "3-horas-de-el-salvador.webp",
    lugar: "Autódromo Internacional El Jabalí, La Libertad",
    hora: "8:00 a. m.",
    precio: null,
    url: "https://www.fiaregion4.com/novedades/noticias/el-salvador-sera-sede-de-las-3-horas-y-abrira-la-copa-centroamericana-de-endurance.html",
    descripcionArchivo: "3-horas",
  },
  {
    fecha: "2026-08-16",
    tipo: "Car Show",
    nombre: "Congo Fest Car Show 6.0",
    img: "congo-fest-car-show-6.webp",
    lugar: "El Congo, Santa Ana",
    hora: "8:00 a. m.",
    precio: 0,
    url: "https://theeventus.com/event/15332",
    descripcionArchivo: "congo-fest",
  },
  {
    fecha: "2026-09-06",
    tipo: "Motovelocidad",
    nombre: "Gran Premio Suzuki",
    img: "gran-premio-suzuki.webp",
    lugar: "Autódromo Internacional El Jabalí, La Libertad",
    hora: "8:30 a. m.",
    precio: 4,
    url: "https://web.indes.gob.sv/?p=150308",
    descripcionArchivo: "premio-suzuki",
  },
  {
    fecha: "2026-10-10",
    tipo: "Karting",
    nombre: "Cadet House",
    img: "cadet-house.webp",
    lugar: "Autódromo Internacional El Jabalí, La Libertad",
    hora: "8:00 a. m.",
    precio: 0,
    url: "https://diarioelsalvador.com/dedeportes/el-karting-quemo-neumaticos-en-la-pista-el-jabali/853767",
    descripcionArchivo: "cadet-house",
  },
  {
    fecha: "2026-12-05",
    tipo: "Karting",
    nombre: "3 Horas de El Jabalí",
    img: "3-horas-kart.webp",
    lugar: "Autódromo Internacional El Jabalí, La Libertad",
    hora: "4:00 p. m.",
    precio: 0,
    url: "https://www.facebook.com/AutodromoElJabali",
    descripcionArchivo: "3-horas-kart",
  },
  {
    fecha: "2026-11-01",
    tipo: "Car Meet",
    nombre: "Rodada a Santo Tomás",
    img: "rodada-a-santo-tomas.webp",
    lugar: "Santo Tomás, San Salvador",
    hora: "Por confirmar",
    precio: 0,
    url: "",
    descripcionArchivo: "rodada-santo-tomas",
  },
];

export const slugEvento = (nombre: string) =>
  nombre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const textoPrecio = (evento: Evento) =>
  evento.precioTexto ??
  (evento.precio === null
    ? "Entrada por confirmar"
    : evento.precio === 0
      ? "Entrada gratis"
      : `Entrada: $${evento.precio.toFixed(2)}`);
