const qtdhomem = document.querySelector('#Homens');
const qtdMulheres = document.querySelector('#Mulheres');
const qtdCrianças = document.querySelector('#Crianças');
const btmcalcular = document.querySelector('#calcular');
const lista = document.querySelector('#lista');
let qtdboicarne = 0
let qtdfrangocarne = 0
let qtdlingui = 0
let qtdrefri = 0
let qtdcerva=0


btmcalcular.addEventListener('click', () => { 
    if (qtdhomem.value) {
        qtdboicarne += qtdhomem.value * 500
        qtdfrangocarne += qtdhomem.value * 200
        qtdlingui += qtdhomem.value * 200
        qtdrefri += qtdhomem.value * 300
        qtdcerva += qtdhomem.value * 800
        
    }
    
     if (qtdMulheres.value) {
        qtdboicarne += qtdMulheres.value * 300
        qtdfrangocarne += qtdMulheres.value * 200
        qtdlingui += qtdMulheres.value * 200
        qtdrefri += qtdMulheres.value * 400
        qtdcerva += qtdMulheres.value * 500
    }
     if (qtdCrianças.value) {
        qtdboicarne += qtdCrianças.value * 200
        qtdfrangocarne += qtdCrianças.value * 100
        qtdlingui += qtdCrianças.value * 200
        qtdrefri += qtdCrianças.value * 200
       
     }
     
    const infocarneboi = document.createElement('li');
    const infocarnefrango = document.createElement('li');
    const infolingui = document.createElement('li');
    const inforefri = document.createElement('li');
    const infocerva = document.createElement('li');
    infocarneboi.textContent = `${qtdboicarne/1000}kg de carne bovina`
    infocarnefrango.textContent = `${qtdfrangocarne/1000}kg de carne frango` 
    infolingui.textContent = `${qtdlingui/1000}kg de carne suina` 
    inforefri.textContent = `${qtdrefri/1000}lts de refrigerante` 
    infocerva.textContent = `${qtdcerva/1000}lts de cerveja` 

    lista.appendChild(infocarneboi)
    lista.appendChild(infocarnefrango)
    lista.appendChild(infolingui)
    lista.appendChild(inforefri)
     lista.appendChild(infocerva)
       
})

