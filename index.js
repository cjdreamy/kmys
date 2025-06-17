window.addEventListener('DOMContentLoaded', function () {
  let lastScrollTop = 0;
  const navbar = document.getElementById("nav-bar-1");

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-100px";
    } else {
      navbar.style.top = "0";
    }

    lastScrollTop = Math.max(scrollTop, 0);
  });
}
);

window.addEventListener('DOMContentLoaded', 
    function toggleMenu() {
    document.getElementById("sid-menu").classList.toggle("activate");
    document.getElementById("overlay").classList.toggle("activate");

  }
)


document.getElementById("m-check").onclick = ()=> 
{ document.getElementById("m-body").style.display = 'none';}


const menu = document.getElementById("menuicon");
menu.addEventListener('click',  
  function toggleMenu() {
    // document.getElementById("side-menu").classList.toggle("activate");
document.getElementById("overlay").style.display = 'block';
  })


//sidebar toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  menuButton.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });
});

