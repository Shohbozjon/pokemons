var elSection = document.querySelector(".row");

for(var pokemon of pokemons){
    console.log(pokemon);

    var newDiv = document.createElement("div");
    var newBox = document.createElement("div");
    var newImg = document.createElement("img");
    var newId = document.createElement("strong");
    var newName = document.createElement("h3");
    var newWeight = document.createElement("p")
    var newTime = document.createElement("time")
   

    newId.textContent = pokemon.id;
    newName.textContent = pokemon.name;
    newWeight.textContent = "weight: " + pokemon.weight;
    newTime.textContent = pokemon.spawn_time
    

    newDiv.setAttribute("class", "col-3 col-12 col-sm-3 ");
    newBox.setAttribute("class", "bg-light p-3 d-flex flex-column align-items-center shadow-lg bg-body rounded")
    newImg.setAttribute("src", pokemon.img);
    newWeight.setAttribute("class", "text-success fw-bolder")
    newTime.setAttribute("class", "text-primary")

    
    newDiv.appendChild(newBox);
    
    newBox.appendChild(newImg);
    newBox.appendChild(newId);
    newBox.appendChild(newName);
    newBox.appendChild(newWeight);
    newBox.appendChild(newTime);

    elSection.appendChild(newDiv);
    
    
}