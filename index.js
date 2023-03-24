fetch("data.json")
    .then(function (response) { return response.json(); })
    .then(function (data) { return dataToHtml(data); });

// Universal data grabber and append for all block images.
function dataToHtml(data) {

    for(let i = 0; i < data.blocks.length; i++) {
        let blockID = "block" + i;
        var block = document.getElementById(blockID);
        // If statement checks if the block exists in that webpage. 
        if(block == null) {continue;} 
        let blockImage = data.blocks[i].image;
        append(blockImage, block);
    }

    for(let i = 0; i < data.blocks.length; i++) {
        let textID = "blockText" + i;
        var block = document.getElementById(textID);
        if(block == null) {continue;}
        let blockText = data.blocks[i].blockName;
        appendText(blockText, block);
    }

    for(let i = 0; i < data.blocks.length; i++) {
        let descriptionID = "blockDescription" + i;
        var block = document.getElementById(descriptionID);
        if(block == null) {continue;}
        let biomedescription = data.blocks[i].Biome;
        appendBiomeDescription(biomedescription, block);
    }

    for(let i = 0; i < data.blocks.length; i++) {
        let levelID = "levelDescription" + i;
        var block = document.getElementById(levelID);
        if(block == null) {continue;}
        let leveldescription = data.blocks[i].Layer;
        appendlevelDescription(leveldescription, block);
    }


}

function append(picture, id) {
    let image = document.createElement("div");
    image.innerHTML = "<img class=\"card-img-top\" src=\"" + picture + "\" alt=\"Minecraft Block\" />";
    id.appendChild(image);
}

function appendText(text, id) {
    let textBlock = document.createElement("div");
    textBlock.innerHTML = "<h5 style=\"font-family: 'minecraftbold';\">" + text + "</h5>";
    id.appendChild(textBlock);
}

function appendBiomeDescription(description, id){
    let biomeDescription = document.createElement("div");
    biomeDescription.innerHTML =  "<h4 style=\"font-family: 'minecraftregular';\">Biome: "  + description  + "</h4>";
    id.appendChild(biomeDescription);
}

function appendlevelDescription(level, id){
    let levelDescription = document.createElement("div");
    levelDescription.innerHTML =  "<h4 style=\"font-family: 'minecraftregular';\"> Layer: " + level  + "</h4>";
    id.appendChild(levelDescription);
}


