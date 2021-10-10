'use strict'
const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
let ticketPrice = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click', (e) => {
    if (!e.target.classList.contains('seat-booked')) {
        e.target.classList.toggle('seat-active');
        let activeSeats = schemeSvg.querySelectorAll('.seat-active').length;
        totalPrice = activeSeats * ticketPrice;
        totalPriceTag.textContent = totalPrice;
    }
});