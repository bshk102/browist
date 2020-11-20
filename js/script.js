const modules = document.querySelectorAll('.program__modules-item')

function openModule(i) {
    modules[i].innerHTML += `<br><br><p>${data[i].text}</p>`
    modules[i].style.height = 'fit-content'
    modules[i].addEventListener('click', () => closeModule(i), {once: true})
}

function closeModule(i) {
    console.log('close')
    let p = modules[i].querySelector('p')
    modules[i].removeChild(p)
    modules[i].style.height = '5.65vw'
    modules[i].addEventListener('click', () => openModule(i), {once: true})
}

for (let i = 0; i < modules.length; i++) {
    modules[i].addEventListener('click', () => openModule(i), {once: true})
}