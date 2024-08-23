export const menuEng = [
    { to: "inicio", text: "Home" },
    { to: "special-events", text: "Special Events" },
    { to: "weekly-activities", text: "Weekly Activities" },
    { to: "restaurants", text: "Restaurants" },
    { to: "experiences", text: "Experiences" },
    { to: "spa", text: "Spa" },
    { to: "classes-and-tastings", text: "Classes and tastings" },
    { to: "rituals", text: "Rituals" },
];

export const menuEsp = [
    { to: "inicio", text: "Inicio" },
    { to: "special-events", text: "Eventos especiales" },
    { to: "weekly-activities", text: "Actividades" },
    { to: "restaurants", text: "Restaurantes" },
    { to: "experiences", text: "Experiencias" },
    { to: "spa", text: "Spa" },
    { to: "classes-and-tastings", text: "Clases y degustaciones" },
    { to: "rituals", text: "Rituales" },
];

export const listMenuTranslation = {
    "/contact/": "/contacto/",
    "/notice-of-privacy/": "/aviso-privacidad/",
    "/terms-and-conditions/": "/terminos-condiciones/",
    "/thank-you/": "/gracias/"
};

export function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

export function exitsLocale(pathname, locale) {
    return pathname.includes(locale);
};