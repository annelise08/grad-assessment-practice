

document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById("list");
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
        // get item information
        this.toDo = item.item;
        // make a new node, a div
        this.node = document.createElement('div');
        // make a paragraph
        const newItem = document.createElement('p');
        newItem.innerText = this.toDo;

        this.node.appendChild(newItem);
        // add a button that will delete info
        const button = document.createElement('button');
        button.innerText = 'delete';
        button.onclick = function(){remove(item.item)}
        this.node.appendChild(button)
        list.appendChild(this.node);
    }
}

function remove(item){
    // this will make a delete request to the back end
    fetch('/items', {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({item})
    })
    .then(res => console.log(res))
}