
// Табы
const tabsBtns = document .querySelectorAll(".tabs_nav button");
const tabsItems = document .querySelectorAll(".tabs_item");


// функция скрывает табы и убирает актив у кнопок
function hideTabs() {
    tabsItems .forEach(item => item.classList.add("hide"));
    tabsBtns .forEach(item => item.classList.remove("active"));
}

// функция показывает переданный номер таба и делает соответствующую ему кнопку активной
function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn,index)=> btn.addEventListener("click", () =>{
    hideTabs();
    showTab(index);
}));



//Якори Anchors

const anchors = document .querySelectorAll(".header__nav a");

anchors.forEach(anc => {
  anc.addEventListener("clik",function(event) {
    event.preventDefault();

    const id = anc.getAttribute("herf");
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});