window.addEventListener("load", () => {
    const loader = document.querySelector(".pre-loader");
    loader.classList.add("hidden");
    loader.addEventListener("transitioned", () => {
      document.body.removeChild(loader)
        }
    )
  });
