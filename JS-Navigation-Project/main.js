var keys = {
  "0":["q","w","e","r","t","y","u","i","o","p"],
  "1":["a","s","d","f","g","h","j","k","l"],
  "2":["z","x","c","v","b","n","m"],
  "length":3
}
var hash = {
  "a":"amazon.co.jp",
  "b":"bbc.com",
  "c":"coursera.org",
  "d":"discord.com",
  "e":"evernote.com",
  "f":"facebook.com",
  "g":"google.com",
  "h":"heroku.com",
  "i":"instagram.com",
  "j":"japantaxcalculator.com",
  "k":"kengblog.com",
  "l":"lofi.cafe",
  "m":"manga1001.com",
  "n":"netflix.com",
  "o":"openvim.com",
  "p":"prog-8.com",
  "q":"quizlet.com",
  "r":"regexpal.com",
  "s":"sbisec.co.jp",
  "t":"twitter.com",
  "u":"udemy.com",
  "v":"voicetube.com",
  "w":"wappalyzer.com",
  "x":"xiedaimala.com",
  "y":"youtube.com",
  "z":"zh.kengblog.com"
}
localStorage.setItem("originalHash",JSON.stringify(hash))

// retrieve data in Local storage
let localStorageTrigger = function(){
  var hashInLocalStorage = JSON.parse(localStorage.getItem('hashTable') || null)
  if(hashInLocalStorage){
    hash=hashInLocalStorage
    let removeButton =document.createElement('button')
    removeStoredHash.appendChild(removeButton)
    removeButton.textContent ="Remove changes"
    removeButton.onclick = function(){
      localStorage.removeItem("hashTable");
      removeButton.remove();
      hash = JSON.parse(localStorage.getItem('originalHash'))

    }
  }
}
localStorageTrigger()

for (let i=0;i<keys["length"];i++){
  // console.log(i)
  let div1 = document.createElement('div')
  targetX.appendChild(div1)
  for (let k of keys[i]){
    let kbd = document.createElement('kbd')
    kbd.textContent=k
    let buttonEdit =document.createElement('button')
    buttonEdit.textContent="Edit URL"
    buttonEdit.id = k
    iconImg = document.createElement('img')
    iconImg.src = 'https://'+hash[k]+'/favicon.ico'
    iconImg.onerror = function(x){
      x.target.src='./icon.svg'
    } 
    buttonEdit.onclick = function(x){
      console.log(x.target.id)
      let newURL = prompt("Assign a new URL")
      hash[k] = newURL
      localStorage.setItem("hashTable",JSON.stringify(hash))
      localStorageTrigger()
    }
    kbd.onmouseover= function(x){
      let showURL = document.getElementById("showURL")
      showURL.textContent = hash[x.target.id]
    }
    kbd.appendChild(iconImg)
    kbd.appendChild(buttonEdit)
    div1.appendChild(kbd)
  }
}

document.onkeypress = function(pressedEvent){
  console.log(pressedEvent["key"])
  key = pressedEvent["key"]
  console.log(hash[key])
  // location.href = "https://"+hash[key]
  window.open("https://"+hash[key],"_blank")
}


let showURL = function(){

}