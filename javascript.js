
    document.querySelectorAll(".servicio").forEach(el => {
    el.addEventListener("click", () => {
      el.classList.toggle("cambiado");
    });
  });

