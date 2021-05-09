function centerLogo(id) {
    const elem = document.getElementById(id)
    const childWH = elem.children[0].getBBox()

    elem.style.width = `${childWH.width}px`
    elem.style.height = `${childWH.height}px`

    elem.classList.remove('opacity-zero')
}

function centerIcon(className) {
    const icons = document.querySelectorAll(`.${className}`)

    icons.forEach(icon => {
        const childWH = icon.children[0].getBBox()
        icon.style.width = `${childWH.height}px`
        icon.style.height = `${childWH.height}px`

        icon.parentElement.classList.remove('opacity-zero')
    })
}

function makeButtons(id) {
    const elem = document.getElementById(id)
    const card = elem.children[0]
    const buttons = elem.children[1]

    if(!isMobile()) {
        buttons.children[0].classList.add('display-none')
        buttons.children[1].setAttribute('style', 'grid-column: span 4;')
        card.children[2].classList.remove('display-none')
    }
}

function isMobile() {
    const UserAgent = navigator.userAgent

    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

    return mobileRegex.test(UserAgent)
}

function copyPhoneNumber() {

}