import { people } from './data.js'

const output = (day, e) => {
    const room = e.target.innerText.substring(e.target.innerText.indexOf(":") + 2);
    const currentOl = document.querySelector(`#ol-${day}`)
    currentOl.innerHTML = ""
    const outputData = people[day][room]
    outputData.forEach(student => {
        const li = document.createElement("li")
        li.innerText = student
        currentOl.appendChild(li)
    })
}

document.querySelectorAll(".room").forEach(room => {
    room.addEventListener("click", (e) => {
        if(e.target.parentElement.id === "monday"){
            output('h', e)
        } else if(e.target.parentElement.id === "tuesday"){
            output('k', e)
        } else{
            output('sz', e)
        }
    })
})