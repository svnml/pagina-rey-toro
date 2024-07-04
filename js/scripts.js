//CRUD tabla pedidos:
document.getElementById('contacto').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const idPedido = document.getElementById('idPedido').value;
    const nombrePedido = document.getElementById('nombrePedido').value;
    const costoPedido = document.getElementById('costoPedido').value;
    const fechaEntrega = document.getElementById('fechaEntrega').value;
    const comentarioCliente = document.getElementById('comentarioCliente').value;

    addRowToTable(idPedido, nombrePedido, costoPedido, fechaEntrega, comentarioCliente);
    document.getElementById('contacto').reset();
});

function addRowToTable(idPedido, nombrePedido, costoPedido, fechaEntrega, comentarioCliente) {
    const table = document.getElementById('contact-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cellidPedido = newRow.insertCell(0);
    const cellnombrePedido = newRow.insertCell(1);
    const cellcostoPedido = newRow.insertCell(2);
    const cellfechaEntrega = newRow.insertCell(3);
    const cellcomentarioCliente = newRow.insertCell(4);
    const cellActions = newRow.insertCell(5);

    cellidPedido.textContent = idPedido;
    cellnombrePedido.textContent = nombrePedido;
    cellcostoPedido.textContent = costoPedido;
    cellfechaEntrega.textContent = fechaEntrega;
    cellcomentarioCliente.textContent = comentarioCliente;

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('edit');
    editButton.addEventListener('click', function() {
        editRow(newRow);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        deleteRow(newRow);
    });

    cellActions.className = 'crud-actions';
    cellActions.appendChild(editButton);
    cellActions.appendChild(deleteButton);
}

function editRow(row) {
    const cells = row.getElementsByTagName('td');
    document.getElementById('idPedido').value = cells[0].textContent;
    document.getElementById('nombrePedido').value = cells[1].textContent;
    document.getElementById('costoPedido').value = cells[2].textContent;
    document.getElementById('fechaEntrega').value = cells[3].textContent;
    document.getElementById('comentarioCliente').value = cells[4].textContent;

    deleteRow(row);
}

function deleteRow(row) {
    row.parentNode.removeChild(row);
}

//Descarga de tabla de pedidos a excel con SheetJS (xlsx):
document.getElementById('downloadExcel').addEventListener('click', function() {
    // Obtiene la tabla de pedidos
    var table = document.getElementById('contact-table');
    
    // Convierte la tabla a un objeto de libro de trabajo
    var workbook = XLSX.utils.table_to_book(table, {sheet: "Pedidos"});

    // Genera un archivo Excel
    var excelBuffer = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
    });

    // Crea un Blob con el contenido del archivo Excel
    var blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    // Crea un enlace de descarga
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'pedidos.xlsx';
    link.click();
});
