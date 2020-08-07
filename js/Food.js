class Food {
constructor(){
this.foodStock = null
this.lastFed = null
this.bottleimg = loadImage("images/Milk.png")
}
getFS(){
var foodSref = db.ref('/Food')
foodSref.on("value", (data) =>{
    this.foodStock = data.val(); 
})
}
getLF(){
    var foodSref = db.ref('/LastFedTime')
    foodSref.on("value", (data) =>{
        this.lastFed = data.val(); 
    })
}
updateLF(){
    var foodSref = db.ref('/') 
    foodSref.update({
        'LastFedTime': hour + period

    })
}
updateFS(){
    var foodSref = db.ref('/') 
    foodSref.update({
        'Food': this.foodStock + 1
    })
}
deductF(){
    var foodSrefs = db.ref('/') 
    foodSrefs.update({
        'Food': this.foodStock - 1
    })
}

display(){
var x = 80
var y = 100
///c///onsole.log("1")
imageMode(CENTER);
if(this.foodStock > 0){
     //console.log("2")
    for(var i = 0; i < this.foodStock; i++){
        //console.log("3")
        if(i%10 === 0){
            x = 80
            y = y + 50
        }
        image(this.bottleimg, x, y , 50, 50)
        x = x + 30
    }
}

}

}
