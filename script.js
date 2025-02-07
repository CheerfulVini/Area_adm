function carregaArquivo(container, arquivo){
    fetch(arquivo).
    then(arq => arq.text()).
    then(elemento => {
        document.getElementById(container).innerHTML = elemento;
    }).catch(erro => console.log('deu pau no' + arquivo))
}

carregaArquivo('container-sidebar', 'sidebar.html');
carregaArquivo('container-navbar', 'navbar.html');

// document.addEventListener('DOMContentLoaded', ()=>{
//     let toggleMenu = document.getElementById('toggleMenu');
//     let sidebar = document.querySelector('.sidebar');
    
//     toggleMenu.addEventListener('click', ()=>{
//         sidebar.classList.toggle('show');
//     });
// })

