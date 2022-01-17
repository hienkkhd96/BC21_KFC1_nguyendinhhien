const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const tdItems = $$('td')

for (let i = 0; i < tdItems.length; i++) {
    switch (tdItems[i].innerText) {
        case ('Hot'):
        tdItems[i].style.textAlign = 'left';
        break;
        case ('cold'):
        tdItems[i].style.textAlign = 'right';
        break;
        case ('Cold (only)'):
        tdItems[i].style.textAlign = 'center';
        break;

    
    
    
}
}