const navslide =  () => {
    const lines = document.querySelector(".lines");
    const items = document.querySelector(".items");

    const item = document.querySelectorAll("#item")

 
    lines.addEventListener('click', ()=>{
        //Toggle Nev
        items.classList.toggle("navbar-active");

        //Animate items
        item.forEach((li, index) =>{
            if(li.style.animation){
                li.style.animation =``
            }else{
                li.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
            }
        })

        //Lines Animate
        lines.classList.toggle('toggle')


    });



}

navslide();
