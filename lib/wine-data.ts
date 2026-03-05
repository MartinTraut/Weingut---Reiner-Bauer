export type WineCategory = "rot" | "weiss" | "sekt" | "destillate";

export interface Wine {
  id: string;
  name: string;
  grape: string;
  style: string;
  volume: string;
  description: string;
  price?: string;
  isBestseller?: boolean;
  category: WineCategory;
}

export interface CategoryInfo {
  key: WineCategory;
  label: string;
  subtitle: string;
  image: string;
  description: string;
}

export const categories: CategoryInfo[] = [
  {
    key: "rot",
    label: "Rotweine",
    subtitle: "Kraftvoll & Charakterstark",
    image: "/images/rotwein-bordeaux.jpg",
    description:
      "Kraftvolle Rotweine aus württembergischen Rebsorten — geprägt von Keuperböden und Südlagen.",
  },
  {
    key: "weiss",
    label: "Weißweine",
    subtitle: "Frisch & Elegant",
    image: "/images/trauben-weiss-nah.jpg",
    description:
      "Frische, elegante Weißweine mit feiner Frucht und lebendiger Säure aus besten Lagen.",
  },
  {
    key: "sekt",
    label: "Sekt",
    subtitle: "Prickelnd & Festlich",
    image: "/images/weinglaeser-sonnenuntergang.jpg",
    description:
      "Feinperlige Schaumweine für festliche Momente — aus hauseigenen Trauben vinifiziert.",
  },
  {
    key: "destillate",
    label: "Destillate & Liköre",
    subtitle: "Edel & Intensiv",
    image: "/images/weinregal-dunkel.jpg",
    description:
      "Handgemachte Destillate und Liköre — das Beste aus Trauben und Früchten unserer Region.",
  },
];

export const wines: Wine[] = [
  // ── Rotweine ──
  {
    id: "trollinger",
    name: "Trollinger",
    grape: "Trollinger",
    style: "QbA · trocken, halbtrocken & lieblich",
    volume: "0,75 L & 1,0 L",
    description:
      "Der württembergische Klassiker — fruchtig, mild und vielseitig. Perfekt zu regionaler Küche.",
    isBestseller: true,
    category: "rot",
  },
  {
    id: "trollinger-lemberger",
    name: "Trollinger-Lemberger",
    grape: "Trollinger · Lemberger",
    style: "QbA · halbtrocken",
    volume: "0,75 L",
    description:
      "Eine harmonische Cuvée zweier württembergischer Rebsorten, vereint Fruchtigkeit mit Tiefe.",
    category: "rot",
  },
  {
    id: "lemberger",
    name: "Lemberger",
    grape: "Lemberger",
    style: "QbA · trocken",
    volume: "0,75 L",
    description:
      "Kraftvoll und ausdrucksstark mit dunklen Beerennoten und feiner Würze. Ein Wein mit Charakter.",
    isBestseller: true,
    category: "rot",
  },
  {
    id: "spaetburgunder",
    name: "Spätburgunder",
    grape: "Spätburgunder",
    style: "Vollmundig",
    volume: "0,75 L",
    description:
      "Samtiger Rotwein mit eleganter Struktur — Noten von Kirsche und feiner Reife.",
    category: "rot",
  },
  {
    id: "schwarzriesling",
    name: "Schwarzriesling",
    grape: "Schwarzriesling",
    style: "Fruchtig",
    volume: "0,75 L",
    description:
      "Fruchtbetonter, weicher Rotwein — ideal für den unkomplizierten Weingenuss.",
    category: "rot",
  },
  {
    id: "samtrot",
    name: "Samtrot",
    grape: "Samtrot",
    style: "Lieblich",
    volume: "0,75 L",
    description:
      "Sanft und samtig, wie der Name verspricht. Eine württembergische Spezialität.",
    category: "rot",
  },
  {
    id: "dornfelder",
    name: "Dornfelder",
    grape: "Dornfelder",
    style: "Tiefrot & Fruchtig",
    volume: "0,75 L",
    description:
      "Intensiv in Farbe und Geschmack — vollmundig mit samtigen Tanninen.",
    category: "rot",
  },
  {
    id: "cabernet-mitos",
    name: "Cabernet Mitos",
    grape: "Cabernet Mitos",
    style: "Kräftig & Komplex",
    volume: "0,75 L",
    description:
      "Kräftiger, dunkelroter Wein mit komplexer Aromatik und langem Nachhall.",
    category: "rot",
  },
  // ── Weißweine ──
  {
    id: "riesling",
    name: "Riesling",
    grape: "Riesling",
    style: "QbA · halbtrocken",
    volume: "0,75 L & 1,0 L",
    description:
      "Der König der deutschen Rebsorten — mineralisch, lebendig und mit feiner Frucht.",
    isBestseller: true,
    category: "weiss",
  },
  {
    id: "grauburgunder",
    name: "Grauburgunder",
    grape: "Grauburgunder",
    style: "QbA · trocken",
    volume: "0,75 L",
    description:
      "Elegant und vielschichtig mit Nuancen von Birne und Mandel. Perfekt als Speisebegleiter.",
    category: "weiss",
  },
  {
    id: "weissburgunder",
    name: "Weißburgunder",
    grape: "Weißburgunder",
    style: "Fein & Cremig",
    volume: "0,75 L",
    description:
      "Dezente Frucht, feine Cremigkeit — ein Weißwein für anspruchsvolle Genießer.",
    category: "weiss",
  },
  {
    id: "muskateller",
    name: "Muskateller",
    grape: "Muskateller",
    style: "Aromatisch",
    volume: "0,75 L",
    description:
      "Ausdrucksstarkes Bouquet mit intensivem Muskatduft und blumiger Eleganz.",
    category: "weiss",
  },
  {
    id: "kerner",
    name: "Kerner",
    grape: "Kerner",
    style: "Fruchtig & Frisch",
    volume: "0,75 L",
    description:
      "Frischer, unkomplizierter Weißwein mit feiner Muskatnote und lebendiger Säure.",
    category: "weiss",
  },
  // ── Sekt ──
  {
    id: "riesling-sekt",
    name: "Riesling Sekt",
    grape: "Riesling",
    style: "Brut",
    volume: "0,75 L",
    description:
      "Feinperlig und elegant — Riesling in seiner festlichsten Form. Ideal zum Anstoßen.",
    category: "sekt",
  },
  {
    id: "trollinger-rose-sekt",
    name: "Trollinger Rosé Sekt",
    grape: "Trollinger",
    style: "Trocken",
    volume: "0,75 L",
    description:
      "Zartrosa Schaumwein mit beeriger Frische — ein Genuss in jedem Moment.",
    category: "sekt",
  },
  {
    id: "trollinger-sekt",
    name: "Trollinger Sekt",
    grape: "Trollinger",
    style: "Trocken",
    volume: "0,75 L",
    description:
      "Ein Sekt mit württembergischem Charakter — fruchtig, spritzig und einzigartig.",
    category: "sekt",
  },
  // ── Destillate & Liköre ──
  {
    id: "weinbrand",
    name: "Weinbrand",
    grape: "Traubendestillat",
    style: "10 Jahre Holzfassreifung",
    volume: "0,5 L",
    description:
      "Zehn Jahre im Holzfass gereift — tiefgolden, weich und mit vielschichtigen Aromen von Vanille und Trockenfrucht.",
    category: "destillate",
  },
  {
    id: "johannisbeerlikoer",
    name: "Johannisbeerlikör",
    grape: "Schwarze Johannisbeere",
    style: "Fruchtlikör",
    volume: "0,5 L",
    description:
      "Intensiv fruchtiger Likör aus sonnengereiften schwarzen Johannisbeeren.",
    category: "destillate",
  },
  {
    id: "weinbergpfirsichlikoer",
    name: "Weinbergpfirsichlikör",
    grape: "Weinbergpfirsich",
    style: "Fruchtlikör",
    volume: "0,5 L",
    description:
      "Der Geschmack des Weinbergs — aromatischer Pfirsichlikör aus eigener Ernte.",
    category: "destillate",
  },
  {
    id: "kraeuterlikoer",
    name: "Kräuterlikör",
    grape: "Kräuter",
    style: "Kräuterlikör",
    volume: "0,5 L",
    description:
      "Hauseigene Kräuterkomposition — würzig, herb und wunderbar bekömmlich.",
    category: "destillate",
  },
];

// ── Weinpaket ──
export const winePackage = {
  id: "paket-von-jedem-etwas",
  name: "Von jedem Etwas",
  description:
    "Unser Weinpaket mit 6 ausgewählten Weinen — von Riesling über Grauburgunder bis Lemberger. Der perfekte Einstieg in die Vielfalt unseres Weinguts.",
  price: "29,00 €",
  details: "6 Flaschen · 5 Liter · inkl. MwSt.",
  isBestseller: true,
};

// ── Helpers ──
export function getWinesByCategory(category: WineCategory): Wine[] {
  return wines.filter((w) => w.category === category);
}

export function getBestsellers(): Wine[] {
  return wines.filter((w) => w.isBestseller);
}

export function getCategoryInfo(key: WineCategory): CategoryInfo {
  return categories.find((c) => c.key === key)!;
}

export function getCategoryImage(category: WineCategory): string {
  return getCategoryInfo(category).image;
}
