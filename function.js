function artDisplay(x){
    let box = document.createElement("div");
    let img = document.createElement('img');
    let p = document.createElement("p");
    p.innerHTML = `${x.title}`
    box.classList.add("box")
    gallery.append(box);
    img.src = x.primaryImage
    box.append(p);
    box.append(img);
    
  }

  export{artDisplay }