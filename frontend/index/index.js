
const navGrid = document.getElementById("nav-grid")
const gridIcon = document.querySelectorAll('.nav-grid-icon')
const aboutMeSlide = document.getElementById("about-me")

gridIcon.forEach(icon => {

    function shrinkIcons(){
        gridIcon.forEach(i=>{
            i.setAttribute('style', 'width:120px;height:120px;')
        })
    }

    function appear(exception){
        const slides = document.querySelectorAll('.slide')
        console.log(slides)
        slides.forEach(slide=>{
            if(slide.id === exception) {

                slide.setAttribute('style', 'transition: all .5s; display: flex; flex-direction: column; opacity: 1; margin-right: 0px')
            } else {
                slide.setAttribute('style', 'transition: all .5s; opacity: 0; margin-left: 700px;')
                setTimeout(()=>{
                    slide.setAttribute('style', 'margin-right: 1400px; opacity: 0');
                }, 500)
                
            }
        })
    }

    function gridChange(){
        grid.setAttribute('style', 'opacity: 1; margin-top: 0px;')
        navGrid.setAttribute('style', 'grid-template-columns: repeat(4, 150px); grid-template-rows: 150px; gap: 10px;')
    }

    icon.addEventListener("click", (e)=>{
        if(icon.id === "skillset-icon"){
            shrinkIcons()
            gridChange()
            appear("skillset-slide")
            
            
        } else if(icon.id === "about-me-icon"){
            gridChange()
            shrinkIcons()
            appear('about-me')
            aboutMeSlide.setAttribute('style', 'opacity: 1; margin-top: 0px;')
        }
        
    })
})