$(document).ready(function () {
  $(".modal").modal();
  $(".sidenav").sidenav();
  $(".slider").slider({ full_width: true });
  $(".parallax").parallax();
  $(".myreviews").carousel({
    numVisible: 8,
    shift: 55,
    padding: 20,
  });
  $(".dropdown-trigger").dropdown();
});

function toggleModal() {
  var instance = M.Modal.getInstance($("#modal2"));
  instance.open();
}

const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
