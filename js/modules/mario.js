export default {
    mario: {
        estado: 'normal',
        vidas: 3,
    },
    data:`
        <h2>Autor: Eduardo Maureira</h2>
        <div id="vidah"></div>
        <button onclick="flor()">FLOR</button>
        <button onclick="pluma()">PLUMA</button>
        <button onclick="pierde()">PIERDE</button>
    `,
    cargar: () => {
        var vidah = document.getElementById('vidah')
        this.mario.forEach((item) => {
            vidah = `
                <p>TOTAL VIDAS: ${item.vidas}</p>
            `;
        })
        vidah.innerHTML = vidah;
        
    }
}