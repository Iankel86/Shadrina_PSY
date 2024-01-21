import initHeadAndFooter from './assets/scripts/loadHeadAndFooter.js';
import initLoadYear from './assets/scripts/loadYear.js';

document.addEventListener('DOMContentLoaded', (event) => {
    initHeadAndFooter().then(() => {
        initLoadYear();
    });
});