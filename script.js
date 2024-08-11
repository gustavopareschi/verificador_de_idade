function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto_bebe_M.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto_jovem_m.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto_adulto_m.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto_idoso_m.png')
            }
        }else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto_bebe_f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto_jovem_f.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto_adulto_f.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto_idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}