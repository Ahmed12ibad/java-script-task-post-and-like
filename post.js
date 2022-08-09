var input  =  document.getElementById("val")
var div2 = document.getElementById("div_2")
var ul = document.getElementById("ul")


function post() {
    var text = document.createTextNode(input.value)
    var li = document.createElement("li")
    li.setAttribute("id",'list')
    li.setAttribute('class','li')
   li.appendChild(text)
    ul.appendChild(li)
    div2.appendChild(ul)
    input.value=""
    divclor()
}


function del(){
    ul.innerHTML=""

}

function divclor(){
  
    div2.style.backgroundColor='rgba(255, 251, 251, 0.581)'

}

function like(){
var like = document.getElementById('icon')

like.style.color='black'


}

function icon_but(){

    var like = document.getElementById('icon')

like.style.color='darkblue'

    

}

