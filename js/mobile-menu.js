// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector("[data-menu-open]"),
//     closeMenuBtn: document.querySelector("[data-menu-close]"),
//     menu: document.querySelector("[data-menu]"),
//     body: document.querySelector("body"),
//     menuList: document.querySelector(".mobile-menu"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);
//   refs.menuList.addEventListener("click", removeMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle("is-hidden");
//     refs.body.classList.toggle("no-scroll");
//   }

//   // function removeMenu() {
//   //   refs.menu.classList.toggle("is-hidden");
//   //   refs.body.classList.toggle("no-scroll");
//   // }
// })();

(() => {
  const mobileMenu = document.querySelector("[data-menu]");
  const openMenuBtn = document.querySelector("[data-menu-open]");
  const closeMenuBtn = document.querySelector("[data-menu-close]");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    console.log(openMenuBtn);
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    console.log(openMenuBtn);
    console.log(!isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    
    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  // window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  //   if (!e.matches) return;
  //   mobileMenu.classList.remove("is-open");
  //   openMenuBtn.setAttribute("aria-expanded", false);
  //   bodyScrollLock.enableBodyScroll(document.body);
  // });
})();
