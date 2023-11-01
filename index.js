// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name)
    return cats;
}
destructivelyAppendCat(Ralph)

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats;
}
destructivelyAppendCat(Bob)

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats;
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
destructivelyRemoveFirstCat()

function appendCat(name){
    const newCats = [...cats, name]
    return newCats
}
appendCat('Broom')

function prependCat(name){
    const moreCats = [name, ...cats]
    return moreCats
}
prependCat(Trish)

function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
  }
removeLastCat()

function removeFirstCat(){
    const newCats = cats.slice(1)
    return newCats;
}
removeFirstCat()