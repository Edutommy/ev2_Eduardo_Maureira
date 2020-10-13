export default {
    trabajadores: [
            {nombre:'Rigby', sueldo:300000},
            {nombre:'Papaleta', sueldo:450000},
            {nombre:'Mordecay', sueldo:350000}, 
            {nombre:'Thomas', sueldo:270000}, 
            {nombre:'Benson', sueldo:700000},
            {nombre:'Skip', sueldo:450000} 
        ],
    data: `
        <h3>Autor: Eduardo Maureira</h3>
        <p>NOMBRE: El Parque Web</p><br>
        <p>EMPRESA: Cartoon</p><br><br>
        <div id="result"></div>
    `,
    cargar: function () {

        
        var result = document.getElementById('result');

        var numero = 0;
        var suma = 0;
        var promedio = 0;
        
        

        var tabla = `
            <table border='1' width='400'>
                <tr>
                    <th>N°</th>
                    <th>Trabajador</th>
                    <th>Sueldo</th>
                </tr>
        `;
        this.trabajadores.forEach((item) => {
            numero = numero + 1;
            suma = item.sueldo + suma;
            tabla += `
                <tr>
                    <td>${numero}</td>
                    <td>${item.nombre}</td>
                    <td>${item.sueldo}</td>
                </tr>
            `;
        });
        tabla += `
        <tr>
            <td></td>
            <td>Total</td>
            <td>${suma}</td>
        </tr>
            
        `;
        promedio = suma / numero;
        tabla += `
        <tr>
            <td></td>
            <td>Promedio</td>
            <td>${promedio}</td>
        </tr>   
        `;
        tabla += "</table>";

        

        result.innerHTML = tabla;

    
    },
}