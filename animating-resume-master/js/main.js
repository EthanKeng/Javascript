/*把code写到#code和style标签里*/
function writeCss(prefix, code, fn){
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = prefix +  code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 50)
}
function writeMarkdown(markdown, fn){
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 25)
}

var css1 = `/* 
 * Hi, I am Keng.
 * I will code to introduce myself.
 * Firstly, prepare some style.
 */

*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
}

/* Then, let's highlight the code*/

.token.selector{ color: #690; }
.token.property{ color: #905; }

/* Add some effects */

#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* Start writing my CV */

/* I need a new paper. */

#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;
}

#paper > .content {
 display: block;
}

/* Now I am going to write down the text to the right side.*/
`

var css2 = `
/* Next, use marked.js
 * to convert Markdown format to HTML format
 */



`
var md = `
# Self-intro

My name is Keng
Taiwanese, living in Japan since 2017.
Current a Technical Solutions Engineer at Criteo

# Skills

Web: JavaScript, CSS, HTML, HTTP, TCP/IP

Script: Python, VBA, bash

# Projects

1. [Weather App](https://nodejs.kengblog.com/): Use third party API to convert address/location-name to latitude/longitude and querty weather info
2. [Real-time chat room App](https://chatapp.kengblog.com/): Use socketio to play real time chat room

# Contact

- Email me@kengblog.com


`
let css3 = `
/*
 * The end.
 * Thank you.
 */
`

writeCss('', css1, ()=>{ // writeCss call the function
  createPaper(() => {
    writeMarkdown(md, ()=> {
      writeCss(css1, css2, ()=>{
        convertMarkdownToHtml(()=>{
          writeCss(css1 + css2, css3, ()=> {
            console.log('完成')
          })
        })
      })
    })
  })
})




function createPaper(fn){
  var paper = document.createElement('div') 
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn && fn.call()
}

function convertMarkdownToHtml(fn){
  var div = document.createElement('div')  
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}

