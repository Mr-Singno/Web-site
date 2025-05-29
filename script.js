const menuItemsDropDown = document.querySelectorAll('.menu-item-dropdown');
const menuItemsStatic = document.querySelectorAll('.menu-item-static');
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click',()=>{
  sidebar.classList.toggle('minimize');
});

menuItemsDropDown.forEach((menuItem)=>{
  menuItem.addEventListener('click',()=>{
    const subMenu = menuItem.querySelector('.sub-menu');
    const isActive = menuItem.classList.toggle('sub-menu-toggle');
    if(subMenu){
      if(isActive){
        subMenu.style.height = `${subMenu.scrollHeight + 6}px`;
        subMenu.style.padding = '0.2rem 0';
      }else{
        subMenu.style.height = '0';
        subMenu.style.padding ='0';
      }
    }
    menuItemsDropDown.forEach((item)=>{
      if(item !== menuItem){
        const otherSubmenu = item.querySelector('.sub-menu');
        if(otherSubmenu){
          item.classList.remove('sub-menu-toggle');
          otherSubmenu.style.height = '0';
          otherSubmenu.style.padding = '0';
        }
      }
    });
  });
});

menuItemsStatic.forEach((menuItem)=>{
  menuItem.addEventListener('mouseenter',()=>{

    if(sidebar.classList.contains('minimize'))return;

    menuItemsDropDown.forEach((item)=>{
      const otherSubmenu = item.querySelector('.sub-menu');
        if(otherSubmenu){
          item.classList.remove('sub-menu-toggle');
          otherSubmenu.style.height = '0';
          otherSubmenu.style.padding = '0';
        }
    });
  })
});

document.addEventListener("DOMContentLoaded", () => {
  // Ejemplo simple: desplazamiento horizontal con rueda del ratón
  const scrollContainer = document.getElementById('scroll-outer-container');

  scrollContainer.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    }
  });
});
document.querySelectorAll('.scroll-container').forEach(container => {
  container.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  });
});