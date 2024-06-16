
var productos = {
    1: {
        nombre: "Arándanos x 1kg ",
        precio: "$16.850",
        categoria: "Categoría 1",
        descripcion: "Los arándanos tienen acción antiinflamatoria, contribuyen a prevenir enfermedades cardiovasculaes y combaten el estreñimiento. Una fruta que entrega muchas cosas y tiene un delicioso sabor.<br>Muy rico en antioxidantes<br>Buen aporte de Vimamina C<br>Previenen la degeneración del cerebro"
    },
    2: {
        nombre: "Kiwi",
        precio: "$20.00",
        categoria: "Categoría 2",
        descripcion: "Descripción larga del producto 2."
    },
    3: {
        nombre: "Manzana",
        precio: "$30.00",
        categoria: "Categoría 3",
        descripcion: "Descripción larga del producto 3."
    },
    4: {
        nombre: "Pera",
        precio: "$10.00",
        categoria: "Categoría 1",
        descripcion: "Descripción larga del producto 1."
    },
    5: {
        nombre: "Plátano",
        precio: "$20.00",
        categoria: "Categoría 2",
        descripcion: "Descripción larga del producto 2."
    },
    6: {
        nombre: "Sandia",
        precio: "$30.00",
        categoria: "Categoría 3",
        descripcion: "Descripción larga del producto 3."
    },
    7: {
        nombre: "Uvas",
        precio: "$10.00",
        categoria: "Categoría 1",
        descripcion: "Descripción larga del producto 1."
    },
    8: {
        nombre: "Brocoli",
        precio: "$20.00",
        categoria: "Categoría 2",
        descripcion: "Descripción larga del producto 2."
    },
    9: {
        nombre: "Lechuga",
        precio: "$30.00",
        categoria: "Categoría 3",
        descripcion: "Descripción larga del producto 3."
    },
    10: {
        nombre: "Palta",
        precio: "$10.00",
        categoria: "Categoría 1",
        descripcion: "Descripción larga del producto 1."
    },
    11: {
        nombre: "Papa",
        precio: "$20.00",
        categoria: "Categoría 2",
        descripcion: "Descripción larga del producto 2."
    },
    12: {
        nombre: "Tomate",
        precio: "$30.00",
        categoria: "Categoría 3",
        descripcion: "Descripción larga del producto 3."
    },
    13: {
        nombre: "Zanahoria",
        precio: "$10.00",
        categoria: "Categoría 1",
        descripcion: "Descripción larga del producto 1."
    },
    14: {
        nombre: "Zapallo Italiano",
        precio: "$20.00",
        categoria: "Categoría 2",
        descripcion: "Descripción larga del producto 2."
    }
};

document.addEventListener('DOMContentLoaded', function () {

    const overlay = document.getElementById('overlay');
    const overlayInfo = document.getElementById('overlay-info');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.producto img').forEach(img => {
        img.addEventListener('click', function () {
            const imgSrc = this.src;
            const productId = this.parentElement.getAttribute('data-id');
            const product = productos[productId];

            overlayInfo.innerHTML = `
                <img src="${imgSrc}" alt="${product.nombre}">
                <p>Item ${productId}</p>
                <p><strong>${product.nombre}</strong></p>
                <p><strong>${product.precio}</strong></p>
                <p><strong>Categoría:</strong> ${product.categoria}</p>
                <p><strong>Descripción:</strong> ${product.descripcion}</p>
            `;
            overlay.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});

