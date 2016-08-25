// let ul = document.getElementById('list');
// let   add = document.getElementById('add');
// let  removeall = document.getElementById('removeAll')
// console.log(add)
//    add.onclick =function(){
//            console.log('Clicked on add button');
//    }





// function insert(item){
//     alert(item);
//   }
let insert = item=>{
      let va = (<HTMLInputElement>document.getElementById('input')).value ;
      (<HTMLInputElement>document.getElementById('input')).value =null;
        // let va:HTMLInputElement;
        // let va = document.getElementById('input');
        console.log(va);
        let ul = document.getElementById('list');
        let li = document.createElement('li');
        let text = document.createTextNode(va);
        let removeButton = document.createElement('button');
        let editButton = document.createElement('button');
        if (va.split(' ').join('').length === 0) {
    // Check for empty inputs (only spaces are not enough)
    alert('No input');
    return false;
  }
                removeButton.className = 'removeMe'; // Add class to button for CSS
                removeButton.innerHTML = ' DONE!'; // Add text to the remove button
                removeButton.setAttribute('onclick', 'removeMe(this);'); 

               editButton.className = 'editMe'; // Add class to button for CSS
                editButton.innerHTML = ' EDIT!'; // Add text to the remove button
                editButton.setAttribute('onclick', 'edit(this);'); 

        li.appendChild(text);
        li.appendChild(removeButton);
        li.appendChild(editButton);

        ul.appendChild(li);
};
function removeMe(item){
  var parent = item.parentElement;
  
  parent.parentElement.removeChild(parent);
}
function removeAll() {
  let ul = document.getElementById('list');
  ul.innerHTML = '';
};
function edit(item){
            var newval = prompt("Please edit this", item.parentElement.innerText.replace("DONE!EDIT!", ""));
    if (newval != null) {
            let text = document.createTextNode(newval);
             let myli = item.parentElement;
        let removeButton = document.createElement('button');
        let editButton = document.createElement('button');
                        removeButton.className = 'removeMe'; // Add class to button for CSS
                                removeButton.innerHTML = ' DONE!'; // Add text to the remove button
                                removeButton.setAttribute('onclick', 'removeMe(this);'); 

                        editButton.className = 'editMe'; // Add class to button for CSS
                                editButton.innerHTML = ' EDIT!'; // Add text to the remove button
                                editButton.setAttribute('onclick', 'edit(this);'); 
       myli.innerText = "";
       myli.appendChild(text);
       myli.appendChild(removeButton);
       myli.appendChild(editButton);                         

//       console.log(myli.innerText="pakitan zinda bad");
       
       
    }
     

       
}
function del(item){
     console.log(item.tabIndex);
        var ul = document.getElementById('list');
var items = ul.getElementsByTagName("li");
// console.log(items);
for (var i = 0; i < items.length; ++i) {
  // do something with items[i], which is a <li> element
  console.log(items[i].tabIndex);
}

}

document.addEventListener( 'DOMContentLoaded', function () {
  
  
}, false );