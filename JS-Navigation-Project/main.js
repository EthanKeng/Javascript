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
  "u":"uedemy.com",
  "v":"voicetube.com",
  "w":"wappalyzer.com",
  "x":"xiedaimala.com",
  "y":"youtube.com",
  "z":"zh.kengblog.com"
}

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
    buttonEdit.onclick = function(x){
      console.log(x.target.id)
      let newURL = prompt("Assign a new URL")
      hash[k] = newURL
    }
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
