fetch('data/datos.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const tituloPagina = document.getElementById('titulo_pagina');
        tituloPagina.innerHTML = data.titulo_pagina;

        const datos = document.getElementById('datos');
        datos.innerHTML = `<p id="nombre_pagina">Nombre: ${data.datos_tienda.nombre}</p>
                    <p id="correo_pagina">Correo: ${data.datos_tienda.correo}</p>
                    <p id="telefono_pagina">Telefono: ${data.datos_tienda.telefono}</p>
                    <p id="direccion_pagina">Dirección: ${data.datos_tienda.direccion}</p>
                    <p id="horario_atencion" ${data.datos_tienda.horario_atencion}</p>`;
        
        
        const productos = data.productos;
        console.log(productos);

        let productosHTML = '';
        for(i = 0; i < productos.length; i++) {
            console.log(productos[i].nombre);
            let reseñasHTML = '';
            productos[i].reseñas.forEach(reseña => {
                reseñasHTML += `
                    <td>${reseña.usuario}</td>
                    <td>${reseña.comentario}</td>
                    <td>${reseña.calificacion}</td>
                `;
           
            productosHTML += `
                <td>${productos[i].nombre}</td>
                <td>${productos[i].categoria}</td>
                <td>${productos[i].descripcion}</td>
                <td>${productos[i].precio}</td>
                <td>${reseñasHTML}}</td>
              
            </tr>`;
        });
        }

        const tabla_productos = document.getElementById('tabla_productos');
        tabla_productos.innerHTML = productosHTML;
    
        
         
       
      
    });