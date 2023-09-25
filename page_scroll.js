const smoothScroll = function(target) {
    const header = document.querySelector(target);
    header.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  document.querySelector('a[href="#header"]').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#header');
  });