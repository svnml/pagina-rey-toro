
var productos = {
    1: {
        nombre: "Arándanos x 1kg ",
        precio: "$16.850",
        categoria: "Fruta",
        descripcion: "Los arándanos tienen acción antiinflamatoria, contribuyen a prevenir enfermedades cardiovasculaes y combaten el estreñimiento. Una fruta que entrega muchas cosas y tiene un delicioso sabor.<br>Muy rico en antioxidantes<br>Buen aporte de Vimamina C<br>Previenen la degeneración del cerebro"
    },
    2: {
        nombre: "Kiwi",
        precio: "$4.290",
        categoria: "Fruta",
        descripcion: "Delicioso Kiwi exportación, ideal para su consumo a diario de la manera que prefieras; en un rico jugo natural o un delicioso postre de frutas"
    },
    3: {
        nombre: "Manzana",
        precio: "$2.490",
        categoria: "Fruta",
        descripcion: "¿Sabías que la manzana Fuji estimula la liberación de líquidos para nuestro cuerpo? Esto la hace un alimento ideal para casos de obesidad o enfermedades reumáticas. Además, tiene altas concentraciones de bioflavonoides que protegen el corazón."
    },
    4: {
        nombre: "Pera",
        precio: "$1.990",
        categoria: "Fruta",
        descripcion: "Deliciosas Pera Packham’s, ideales para su consumo a diario de la manera que prefieras; en un rico jugo natural o un delicioso postre de frutas."
    },
    5: {
        nombre: "Plátano x 1kg",
        precio: "$1.590",
        categoria: "Fruta",
        descripcion: "Su delicioso sabor y textura, su alto contenido de potasio, hacen del plátano un alimento perfecto para su consumo a diario. Prepáralo de la manera que prefieras o cómelo directamente."
    },
    6: {
        nombre: "Sandía x 10kgs aprox.",
        precio: "$7.000",
        categoria: "Fruta",
        descripcion: "La sandía es una fruta refrescante y deliciosa que ofrece numerosos beneficios para la salud. En primer lugar, es rica en agua, lo que la convierte en una excelente opción para mantenerse hidratado, especialmente durante los días calurosos de verano. Además, contiene una cantidad significativa de vitamina C, un antioxidante esencial para el fortalecimiento del sistema inmunológico y la salud de la piel."
    },
    7: {
        nombre: "Uva Blanca sin pepa x 1kg",
        precio: "$3.590",
        categoria: "Fruta",
        descripcion: "La uva blanca sin pepa es una fruta deliciosa y muy beneficiosa para la salud. En primer lugar, es una excelente fuente de antioxidantes, como los flavonoides y el resveratrol, que ayudan a proteger el cuerpo contra el daño de los radicales libres y a reducir el riesgo de enfermedades crónicas. Además, estas uvas son ricas en vitamina C, esencial para fortalecer el sistema inmunológico y mantener la salud de la piel."
    },
    8: {
        nombre: "Brocoli 1 un.",
        precio: "$1.590",
        categoria: "Verdura",
        descripcion: "Brassica oleracea var. italica, el brócoli, ? brécol? o bróquil? del italiano broccoli, es una planta de la familia de las brasicáceas. Otras variedades de la misma especie son el repollo, la coliflor, el colinabo y la col de Bruselas. El llamado brócoli chino o kale es también una variedad de Brassica oleracea.<br>Consumir brócoli beneficia el hígado y ayuda a desintoxicar el organismo. Comer brócoli es excelente para mantener los huesos sanos y fuertes, dado su contenido de calcio, fósforo, magnesio y zinc."
    },
    9: {
        nombre: "Lechuga Escarola 2 un.",
        precio: "$2.690",
        categoria: "Verdura",
        descripcion: "Descubre la frescura y el sabor de nuestra lechuga escarola. Perfecta para ensaladas frescas y wraps saludables.<br>Rica en vitaminas y minerales<br>Buena fuente de calcio y Omega 3<br>Ideal para acompañar una ensalada"
    },
    10: {
        nombre: "Palta Hass Chilena 700 grs.",
        precio: "$6.690",
        categoria: "Fruta",
        descripcion: "Consumir Palta Hass proporciona numerosos beneficios para la salud gracias a su rica composición nutricional. En primer lugar, es una excelente fuente de grasas saludables, especialmente ácidos grasos monoinsaturados, que ayudan a reducir el colesterol LDL (malo) y aumentar el colesterol HDL (bueno), mejorando así la salud cardiovascular. Además, la palta Hass es rica en fibra, lo que favorece una digestión saludable y contribuye a mantener un peso adecuado al proporcionar una sensación de saciedad duradera."
    },
    11: {
        nombre: "Papa en malla 2kgs.",
        precio: "$3.890",
        categoria: "Verdura",
        descripcion: "La papa es una gran fuente de energía con alto nivel de antioxidantes, además es muy versátil en la cocina.<br>Con alto nivel de antioxidantes<br>Gran fuente de energía<br>Alimento útil en cualquier preparación"
    },
    12: {
        nombre: "Tomate x 1kg",
        precio: "$1.990",
        categoria: "Fruta",
        descripcion: "Por una alimentación basada en vegetales, prefiere los tomates de nuestra tienda. Recuerda que el tomate es un potente antioxidante natural, rico en vitamina A, K, hierro y potasio."
    },
    13: {
        nombre: "Zanahoria x 1kg",
        precio: "$1.550",
        categoria: "Verdura",
        descripcion: "Consumir zanahorias ofrece numerosos beneficios para la salud. En primer lugar, son una excelente fuente de vitamina A, gracias a su alto contenido de betacaroteno. Esta vitamina es esencial para mantener una buena visión, especialmente en condiciones de poca luz. Además, la vitamina A contribuye a la salud de la piel y el sistema inmunológico."
    },
    14: {
        nombre: "Zapallo Italiano 1 un.",
        precio: "$790",
        categoria: "Verdura",
        descripcion: "Encuentra la mejor variedad de frutas y verduras frescas navegando en nuestro sitio web.<br>Ideal para tus preparaciones favoritas<br>Frescura y calidad garantizada<br>Delicioso sabor"
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

