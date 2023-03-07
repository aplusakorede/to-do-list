let myLists = [];
const taskEl = document.getElementById("task");
const addBtnEl = document.getElementById("add-btn");
const listsEl = document.getElementById("lists");
const listsFromLocalStorage = JSON.parse( localStorage.getItem("myLists") );
const delEl = document.getElementById("del-btn");
const errorEl = document.getElementById("error");

if (listsFromLocalStorage) {
    myLists = listsFromLocalStorage;
    render();
};

addBtnEl.addEventListener("click", function () {
        myLists.push(taskEl.value);
        taskEl.value = "";
        localStorage.setItem("myLists", JSON.stringify(myLists) );
        render();
});

delEl.addEventListener("dblclick", function() {
    localStorage.clear();
    myLists = [];
    render();
});

function render() {
    let listItems = "";
    
    for (let i = 0; i < myLists.length; i++) {
        listItems += `
        <li><input type="checkbox" name="" id ="box">
            ${myLists[i]}
            </li>
        `;
    }
    listsEl.innerHTML = listItems;
}