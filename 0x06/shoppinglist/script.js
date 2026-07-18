function getTarget(e){
    return e.target || e.srcElement
}
function itemDone(e) {
    let target = getTarget(e)
    const parent = target.parentNode
    console.log(parent)
    const elGrandParent = target.parentNode.parentNode
    console.log(elGrandParent)
    removeEventListener('click', itemDone)
    elGrandParent.removeChild(parent)
    if (e.preventDefault) {
        e.preventDefault()
    }   
}
const shoppingList = document.getElementById('shoppingList')

shoppingList.addEventListener('click', function (e){
    itemDone(e)
})