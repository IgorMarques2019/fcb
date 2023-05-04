window.addEventListener("blur", () => {
  document.title = 'Nova Mensagem (1)'
  docS = 'Ui';
})

window.addEventListener("focus", () => {
  document.title = 'Igor Marques | Facebook';

})


let mw670px = window.matchMedia('(max-width:670px)').matches;

if (mw670px) {
  let menuBottomMobile = document.createElement('div');
  let navLinksMenu = document.querySelector('header .header-nav-links');
  menuBottomMobile.classList.add('menu-mobile')
  menuBottomMobile.append(navLinksMenu)
  document.body.append(menuBottomMobile)

}