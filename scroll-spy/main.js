import './style.css'

const nav = document.getElementById("nav")
const article = document.getElementById("secsection")

window.onscroll = function s() {
  if (window.scrollY <= nav.offsetTop) {
    nav.classList.add = "active"
  } else {
    nav.classList.remove = "active"
  }
}


let blog = [{
  url: "neom-XykVSjPQJzQ-unsplash.jpg",
  title: "Comment devenir obsedé par la raclette",
  content: "zsecZEC  zec zeczexc zesc  zDSCZDC"
}, {
  url: "neom-XykVSjPQJzQ-unsplash.jpg",
  title: "Comment devenir obsedé par la raclette",
  content: "zsecZEC  zec zeczexc zesc  zDSCZDC"
}, {
  url: "neom-XykVSjPQJzQ-unsplash.jpg",
  title: "Comment devenir obsedé par la raclette",
  content: "zsecZEC  zec zeczexc zesc  zDSCZDC"
}, {
  url: "neom-XykVSjPQJzQ-unsplash.jpg",
  title: "Comment devenir obsedé par la raclette",
  content: "zsecZEC  zec zeczexc zesc  zDSCZDC"
}]

for (let i = 0; i < blog.length; i++) {
  article.innerHTML += `
  <article>
    <img src="${blog[i].url}" alt="turtle ${i}">
    <h3>${blog[i].title}</h3>
    <p>${blog[i].content}</p>
  </article>
  `

}