const darkModeBtn = document.getElementById('darkmode-btn')
document.body.style.backgroundColor = "white"
document.body.style.color = 'var(--black)';
const navbody = document.getElementById("nav")


const listItems = document.querySelectorAll("li, a, i")

/* Script for Grid */

const skillsetSlide = document.getElementById("skillset-slide")

const grid = document.getElementById("grid")
const rect = grid.getBoundingClientRect();

grid.scrollIntoView();

document.body.addEventListener("change", (e)=>{

    if(document.body.style.backgroundColor === "black"){
    console.log("YES")
    grid.classList.add("mask")
    document.addEventListener('mousemove', (e) => {
    const rect = grid.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    grid.style.setProperty('--x', `${x}px`)
    grid.style.setProperty('--y', `${y}px`)
    })
    } else {
        grid.classList.remove("mask")
    }
})

function disappear() {

    grid.style.opacity = 0;
           
            setTimeout(()=> {
                grid.style.opacity = 1;
                grid.classList.add("mask")
                document.addEventListener('mousemove', (e) => {
                    const rect = grid.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    grid.style.setProperty('--x', `${x}px`)
                    grid.style.setProperty('--y', `${y}px`)
            })
            }, 500)
}

function appear(){
    
    grid.style.transition = 'all 0s'
    grid.style.opacity = 0;
    skillsetSlide.style.opactiy = 0;
    grid.style.transition = 'all .5s'
    grid.style.opacity = 1;
    skillsetSlide.style.opactiy = 1;
    grid.classList.remove("mask")
  
}


darkModeBtn.addEventListener("click", (e)=> {
    console.log(document.body.style.backgroundColor)
    
    if(document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = 'var(--darkb1)'
        navbody.style.backgroundColor = 'var(--white)';
        listItems.forEach(item=> {
            item.style.color = "var(--darkb1)"
        })
        appear();
        
    } else {

       document.body.style.backgroundColor = "black";
       navbody.style.backgroundColor = 'black';
       navbody.style.color = "var(--lightb2)"
       document.body.style.color = 'var(--lightb1)';
       listItems.forEach(item=> {
            item.style.color = "var(--lightb1)"
        })
        disappear()
    }
})
