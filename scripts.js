const getElement = (selector) => {

    const element = document.querySelector(selector);
    if (element) return element
    throw Error('Please double check you class names, ther is no${selector} class')
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
})