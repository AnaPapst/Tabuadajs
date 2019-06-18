function tabuada() {
    let num =  document.getElementById('txtn');
    let tab =  document.getElementById('seltab');
    if (num.value.length == 0) {
        alert('Por favor, digite um numero')
    } else {
        let n = Number(num.value) // Pega valor da var num que recebe 
        // de txtn no HTML e transforma em valor numérico.
        let c = 1
        tab.innerHTML = '' // Limpa a área de tabuada para "resetar" os numeros      
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${n} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    } 

}