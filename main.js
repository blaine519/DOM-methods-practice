const bodyElement = document.querySelector('body')

const removeButton = document.createElement('button')
removeButton.append('Remove')
bodyElement.append(removeButton)

let mainElement = document.createElement('main')
bodyElement.append(mainElement)

let imageElement = document.createElement('img')
mainElement.append(imageElement)
imageElement.className = 'image'
imageElement.src = 'https://www.loc.gov/static/managed-content/uploads/sites/16/2018/09/cat_yoder.jpg'
imageElement.alt = 'cat loaf'

let linkElement = document.createElement('a')
linkElement.className = 'link'
linkElement.append('How were cats domesticated')
linkElement.href = 'https://www.mentalfloss.com/article/72188/how-were-cats-domesticated'
linkElement.target = '_blank'
mainElement.append(imageElement, linkElement)

removeButton.addEventListener('click', function () {
    mainElement.remove()

})