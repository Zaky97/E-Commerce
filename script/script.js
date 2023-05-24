function setActive(link) {
  // remove active class from all nav-items
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => {
    item.classList.remove("active");
  });

  // add active class to clicked nav-item
  link.parentNode.classList.add("active");

  // add active class to nav-item based on section id
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    if (section.id === link.getAttribute("href").substring(1)) {
      const navItem = document.querySelector(
        `.nav-item a[href="#${section.id}"]`
      ).parentNode;
      navItem.classList.add("active");
    }
  });
}
