require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from "./modules/tabs";
import timer from "./modules/timer";
import slider from "./modules/slider";
import modal from "./modules/modal";
import forms from "./modules/forms";
import cards from "./modules/cards";
import calculate from "./modules/calculate";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", function () {
    const modalTimerId = setTimeout(
        () => openModal(".modal", modalTimerId),
        50000
    );

    tabs(
        ".tabheader__item",
        ".tabcontent",
        ".tabheader__items",
        "tabheader__item_active"
    );
    modal("[data-modal]", ".modal", modalTimerId);
    timer(".timer", "2024-09-01");
    cards();
    calculate();
    forms("form", modalTimerId);
    slider({
        container: ".offer__slider",
        slide: ".offer__slide",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-iner",
    });
});
