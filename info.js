var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");

//This makes the words come up after you click an image
item1.addEventListener("click", function(){
    info1.innerHTML = "<li>There are 32 panels on a traditional soccer ball, one for each country in Europe</li> <li>A professional soccer player runs 48 kilometers, or 3.9 miles, in an average soccer game</li> <li>Soccer was illegal in Mississippi until 1991</li>";
});
      
//This makes the information on pizza pop up when you click on the image of the pizza                 
item2.addEventListener("click", function(){
    info1.innerHTML = "<li>Since 1987, October has been officially designated National Pizza Month in the United States.</li><li>Approximately three billion pizzas are sold in the United States every year, plus an additional one billion frozen pizzas.</li><li>Ninety-three percent of Americans eat pizza at least once a month.</li>";
});

//This shows the information on blobfish
item4.addEventListener("click", function(){
    info1.innerHTML = "<li>Blobfish lack very many muscles. This means that they typically don’t do much moving while stationed on the bottom of the ocean.</li><li>Waters around Australia, Tasmania, and New Zealand are all places where you will find blobfish.</li><li>On average, blobfish will be around ten inches to a foot long.</li>";
});

//This shows fun facts about bunnies when you click on the image
item3.addEventListener("click", function(){
    info1.innerHTML = "<li>More than half of the world’s rabbits live in North America.</li><li>Rabbits have a lifespan of around 10 years.</li><li>Rabbits are born with their eyes closed and without fur.</li>";
});