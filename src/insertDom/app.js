const projectsList = [
  {
    name: 'Project1',
    desc: 'a lil description of something.',
    url: 'https://picsum.photos/200?random=1',
    tags: '#css, #html, #bootstrap'

  },
  {
    name: 'Project2',
    desc: 'a lil description of something.',
    url: 'https://picsum.photos/200?random=1',
    tags: '#css, #html, #bootstrap'

  },
  {
    name: 'Project3',
    desc: 'a lil description of something.',
    url: 'https://picsum.photos/200?random=1',
    tags: '#css, #html, #bootstrap'

  },
  {
    name: 'Project4',
    desc: 'a lil description of something.',
    url: 'https://picsum.photos/200?random=1',
    tags: '#css, #html, #bootstrap'

  },
  {
    name: 'Project5',
    desc: 'a lil description of something.',
    url: 'https://picsum.photos/200?random=1',
    tags: '#css, #html, #bootstrap'

  },
  {
    name: 'Project6',
    desc: 'a lil description of something.',
    url: 'https://picsum.photos/200?random=1',
    tags: '#css, #html, #bootstrap'

  },
]

let rowDiv = document.querySelector('.app')
console.log('rowDiv', rowDiv)

projectsList.forEach(project => {
  // console.log('project', project)
  let cardTemplate =`<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${ project.url }" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${ project.name }</h5>
    <p class="card-text">${ project.desc }</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
  rowDiv.insertAdjacentElement('beforeend', cardTemplate)
  
});