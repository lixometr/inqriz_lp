import SmoothScroll from "smooth-scroll";

export default function menuInit() {
  try {
    const menu = document.querySelector(".header .main_menu_wrapper");
    const burger = document.querySelector(".header .menu_burger_element");
    let isActive = false;
    burger.addEventListener("click", () => {
      if (isActive) {
        hide();
      } else {
        show();
      }
    });

    function show() {
      if (window.innerWidth > 992) return;


      $(menu).addClass('open');

      burger.classList.add("active");
      isActive = true;
    }
    function hide() {
      if (window.innerWidth > 992) return;
      $(menu).removeClass('open');
      $(burger).removeClass("active");
      isActive = false;
    }

    const menuItems = [...menu.querySelectorAll(".menu_item a")];
    new SmoothScroll('[data-scroll]', {
      speed: 300
    });

  } catch (err) {
    console.log(err);
  }
}
