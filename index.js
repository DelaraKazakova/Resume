
if (window.innerWidth > 767) {

  const left = document.querySelectorAll(".text-end");

  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-right");
        observer1.unobserve(entry.target);
      }
    });
  });
  left.forEach(rowl => {
    observer1.observe(rowl);
  });

  const right = document.querySelectorAll(".text-start");

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-left");
        observer2.unobserve(entry.target);
      }
    });
  });
  right.forEach(rowr => {
    observer2.observe(rowr);
  });
} 
