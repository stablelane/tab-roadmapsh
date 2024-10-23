const tabs = document.querySelectorAll('.tab-item')
const tabContent = document.querySelectorAll('.tab-content-item')

tabs.forEach(item => item.addEventListener('click', changetab))

function changetab(e) {
    removeContent()
    document.getElementById(`${this.id}-content`).classList.add('show')
    removeBorder()
    this.classList.add('tab-border')

}

function removeBorder() {
    tabs.forEach(item => item.classList.remove('tab-border'))
}

function removeContent() {
    tabContent.forEach(item => item.classList.remove('show'))
}
