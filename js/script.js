const modules = document.querySelectorAll('.program__modules-item')
const insert = document.querySelectorAll('.program__modules-item p')
const arrows = document.querySelectorAll('.program__modules__arrow')

for (let i = 0; i < modules.length; i++) {
    modules[i].addEventListener('mouseover', () => arrows[i].classList.add('program__modules__arrow-hover'))
    modules[i].addEventListener('mouseout', () => arrows[i].classList.remove('program__modules__arrow-hover'))
    modules[i].addEventListener('click', () => openModule(i), {once: true})
}

function openModule(i) {
    for (let i = 0; i < modules.length; i++) {
        if (modules[i].classList.contains('program__modules-item-opened')) {
            closeModule(i)
        }
    }
    insert[i].textContent += data[i].text
    modules[i].style.height = 'fit-content'
    modules[i].classList.add('program__modules-item-opened')
    arrows[i].classList.add('program__modules__arrow-active')
    modules[i].addEventListener('click', () => closeModule(i), {once: true})
}

function closeModule(i) {
    insert[i].textContent = ''
    modules[i].style.height = '5.65vw'
    modules[i].classList.remove('program__modules-item-opened')
    arrows[i].classList.remove('program__modules__arrow-active')
    modules[i].addEventListener('click', () => openModule(i), {once: true})
}