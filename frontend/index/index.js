/* const grid = document.getElementById("grid")
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

 */