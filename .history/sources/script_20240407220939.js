//copy menu for mobile
function copyMenu() {
    //copy inside .dpt-cat to .department
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.department');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
}
copyMenu();