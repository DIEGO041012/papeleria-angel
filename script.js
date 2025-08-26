document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".producto button");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const nombreProducto = boton.parentElement.querySelector("h4").textContent;
      alert(`Has agregado "${nombreProducto}" al carrito.`);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".producto button");
  const contador = document.getElementById("contador-carrito");
  const carritoLista = document.getElementById("carrito-lista");
  const itemsCarrito = document.getElementById("items-carrito");
  const totalCarrito = document.getElementById("total-carrito");
  const pagarBtn = document.getElementById("pagar");
  const carritoIcon = document.querySelector(".carrito");

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  function actualizarCarrito() {
    itemsCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.nombre} - $${item.precio}`;
      itemsCarrito.appendChild(li);
      total += item.precio;
    });

    contador.textContent = carrito.length;
    totalCarrito.textContent = total.toLocaleString();
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const producto = boton.parentElement;
      const nombre = producto.querySelector("h4").textContent;
      const precio = parseInt(producto.querySelector("p").textContent.replace("$", "").replace(".", "").replace(",", ""));

      carrito.push({ nombre, precio });
      actualizarCarrito();
    });
  });

  carritoIcon.addEventListener("click", () => {
    carritoLista.classList.toggle("oculto");
  });

  pagarBtn.addEventListener("click", () => {
    alert("Gracias por tu compra 😊");
    carrito = [];
    actualizarCarrito();
  });

  // Inicializar al cargar
  actualizarCarrito();
});

const filtros = document.querySelectorAll("#filtros-categoria li");
const productos = document.querySelectorAll(".producto");

filtros.forEach(filtro => {
  filtro.addEventListener("click", () => {
    const categoria = filtro.getAttribute("data-categoria");

    productos.forEach(prod => {
      const cat = prod.getAttribute("data-categoria");
      if (categoria === "Todos" || cat === categoria) {
        prod.style.display = "block";
      } else {
        prod.style.display = "none";
      }
    });
  });
});

const inputBuscar = document.getElementById("buscar");

inputBuscar.addEventListener("input", () => {
  const texto = inputBuscar.value.toLowerCase();

  productos.forEach(prod => {
    const nombre = prod.querySelector("h4").textContent.toLowerCase();
    prod.style.display = nombre.includes(texto) ? "block" : "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const botonesFiltro = document.querySelectorAll('[data-categoria]');
  const productos = document.querySelectorAll('.producto');

  botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
      const categoriaSeleccionada = boton.getAttribute('data-categoria');

      productos.forEach(producto => {
        const categoriaProducto = producto.getAttribute('data-categoria');

        if (categoriaSeleccionada === 'Todos' || categoriaProducto === categoriaSeleccionada) {
          producto.style.display = 'block';
        } else {
          producto.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const botonesFiltro = document.querySelectorAll('[data-categoria]');
  const productos = document.querySelectorAll('.producto');

  botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
      const categoriaSeleccionada = boton.getAttribute('data-categoria');

      // Filtrar productos
      productos.forEach(producto => {
        const categoriaProducto = producto.getAttribute('data-categoria');
        producto.style.display =
          categoriaSeleccionada === 'Todos' || categoriaProducto === categoriaSeleccionada
            ? 'block'
            : 'none';
      });

      // Quitar clase activo de todos los filtros
      botonesFiltro.forEach(b => b.classList.remove('activo'));
      
      // Agregar clase activo al botón actual
      boton.classList.add('activo');
    });
  });
});

/*menu de filtrado*/
document.addEventListener("DOMContentLoaded", () => {
  const filtroAside = document.querySelectorAll("#filtros-categoria li");
  const productos = document.querySelectorAll(".producto");

  filtroAside.forEach(filtro => {
    filtro.addEventListener("click", () => {
      const categoria = filtro.getAttribute("data-categoria");

      // Mostrar/ocultar productos
      productos.forEach(producto => {
        const catProducto = producto.getAttribute("data-categoria");

        if (categoria === "Todos" || catProducto === categoria) {
          producto.style.display = "block";
        } else {
          producto.style.display = "none";
        }
      });

      // Activar clase 'activo' en el ítem seleccionado
      filtroAside.forEach(item => item.classList.remove("activo"));
      filtro.classList.add("activo");
    });
  });
});
