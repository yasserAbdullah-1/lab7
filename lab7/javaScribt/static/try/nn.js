document.addEventListener("DOMContentLoaded",function() {
    let colorForm=document.getElementById("form");
    let colorInput=document.getElementById("color_name");
    let heading=document.getElementById("header");

    colorForm.addEventListener("submit",function(event){
        event.preventDefault();
    
        heading.style.color=colorInput.value;
    
    });
});
