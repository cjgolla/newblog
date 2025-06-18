const dropdownEntries = document.getElementById("blog")

//2025 dropdown
const dropdown2025 = document.getElementById("dropdown-2025")
const blogSublist2025 = document.getElementById("blog-sublist-2025")

//2026 dropdown
const dropdown2026 = document.getElementById("dropdown-2026")
const blogSublist2026 = document.getElementById("blog-sublist-2026")

dropdown2025.addEventListener("click", ()=>{
    blogSublist2025.classList.toggle("blog-sublist-toggle")
})

dropdown2026.addEventListener("click", ()=> {
    blogSublist2026.classList.toggle("blog-sublist-toggle")
})
