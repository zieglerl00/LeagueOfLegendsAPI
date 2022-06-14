let data = new FormData();

let arr = []

fetch("https://www.masterypoints.com/api/v1.1/static/champions", {
    method: "POST",
    body: data
}).then(response => response.json()).then(data => {
    for (const [key, value] of Object.entries(data)) {
        arr.push(value)
    }
    champs()
})

function champs() {
    let el;
    let textNote;
    let main = document.getElementById("main")
    
    arr.forEach(element => {
        el = document.createElement("p")
        textNote = document.createTextNode(element.name + " " + element.champkey)
        el.appendChild(textNote)
        main.appendChild(el)
    })
    
}

