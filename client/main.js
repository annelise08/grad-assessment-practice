const list = document.getElementById("list");

document.addEventListener('DOMContentLoaded', () => {
    // make a get request to the backend
    fetch('/items')
        .then(data => data.json())
        .then(items => {
            console.log('got items!')
            console.log(items)
            for (let i = 0; i < items.length; i++){
                const newItem = new Item(items[i])
            }
        })
})

class Item {
    constructor(item){
        this.toDo = item.item;

        this.node = document.createElement('div');

        const newItem = document.createElement('p');
        newItem.innerText = this.toDo;

        this.node.appendChild(newItem);
        list.appendChild(this.node);
    }
}