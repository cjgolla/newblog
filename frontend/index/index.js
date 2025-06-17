
const navGrid = document.getElementById("nav-grid")
const gridIcons = document.querySelectorAll('.nav-grid-icon')
const aboutMeSlide = document.getElementById("about-me")
const slides = document.querySelectorAll('.slide')

const iconHandlers = new Map();

function appears(exception){
    console.log(slides)
    slides.forEach(slide=>{
        if(slide.id === exception) {
            slide.setAttribute('style', 'transition: all .5s; display: flex;flex-direction: column; opacity: 1; margin-right: 0px')
        } else {
            slide.setAttribute('style', 'transition: all .5s; opacity: 0;margin-left: 700px;')
            setTimeout(()=>{
                slide.setAttribute('style', 'margin-right: 1400px; opacity: 0');
            }, 500)
            
        }
    })
}

function aaEventListener(icon) {
    if(icon.id === "skillset-icon"){
            shrinkIcons()
            gridChange()
            appears("skillset-slide")
            rEventListener()

    } else if(icon.id === "about-me-icon"){
        gridChange()
        shrinkIcons()
        appears('about-me')
        aboutMeSlide.setAttribute('style', 'opacity: 1; margin-top: 0px;')
        rEventListener()
    }
}


function aEventListener(icon) {
    const handler = () => aaEventListener(icon)
    iconHandlers.set(icon, handler);
    icon.addEventListener("click", handler)
}

function gridChange(){
        grid.setAttribute('style', 'opacity: 1; margin-top: 0px;')
        navGrid.setAttribute('style', 'grid-template-columns: repeat(4, 170px); grid-template-rows: 170px; gap: 10px;')
}

function shrinkIcons(){
        gridIcons.forEach(i=>{
            
            i.classList.add('nav-grid-icon-small')
        })
    }

function rEventListener(){
    gridIcons.forEach(icon=>{
        const handler = iconHandlers.get(icon)
        icon.removeEventListener("click", handler)
    })
    console.log("liseners removed")
    setTimeout(()=> {
        gridIcons.forEach(icon=>{
            aEventListener(icon)
            console.log("Listeners applied")
        })
    }, 550)
    
}

gridIcons.forEach(icon => {
    aEventListener(icon)
})