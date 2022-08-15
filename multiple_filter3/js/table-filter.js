let table_Name = document.getElementById('table_Name');
let table_Title = document.getElementById('table_Title');
let table_Email = document.getElementById('table_Email');
let table_Phone = document.getElementById('table_Phone');
let table_Company = document.getElementById('table_Company');
let table_Company_Size = document.getElementById('table_Company_Size');
let table_Revenue = document.getElementById('table_Revenue');
let table_City = document.getElementById('table_City');
let table_URL = document.getElementById('table_URL');
let table_refresh = document.getElementById('table_refresh');

function show_hide_column() {
    var tbl = document.getElementById('myTable');
    var rows = tbl.getElementsByTagName('tr');

    for (var row = 0; row < rows.length; row++) {
        var cols = rows[row].children;
        // console.log(1, cols.length);
        if (4 >= 0 && 4 < cols.length) {
            var cell = cols[4];
            // console.log(cell, cell.tagName);
            if (cell.tagName == 'td') cell.style.display = 'none';
        }
    }
}

function signShowHide(sign){
    if(sign.className == 'fas fa-plus'){
        sign.setAttribute('class', "fas fa-minus");
    }else{
        sign.setAttribute('class', "fas fa-plus");
    }
}


table_Name.addEventListener('click', function () {
    
    var sign = table_Name.querySelector('i');
    signShowHide(sign);
    
    if(sign.className !== 'fas fa-plus'){
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:first-child', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:first-child', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.display = 'none';
        });
    }else{
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:first-child', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:first-child', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.removeProperty('display');
        });
    }

    
});

table_Title.addEventListener('click', function () {
    var sign = table_Title.querySelector('i');
    signShowHide(sign);

    if(sign.className !== 'fas fa-plus'){
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(2)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(2)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.display = 'none';
        });
    }else{
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(2)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(2)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.removeProperty('display');
        });
    }
});

table_Email.addEventListener('click', function () {
    var sign = table_Email.querySelector('i');
    signShowHide(sign);
    if(sign.className !== 'fas fa-plus'){
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(3)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(3)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.display = 'none';
        });
    }else{
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(3)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(3)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.removeProperty('display');
        });
    }
    
});

table_Phone.addEventListener('click', function () {
    var sign = table_Phone.querySelector('i');
    signShowHide(sign);

    if(sign.className !== 'fas fa-plus'){
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(4)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(4)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.display = 'none';
        });
    }else{
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(4)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(4)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.removeProperty('display');
        });
    }
});
table_Company.addEventListener('click', function () {
    var sign = table_Company.querySelector('i');
    signShowHide(sign);

    if(sign.className !== 'fas fa-plus'){
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(5)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(5)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.display = 'none';
        });
    }else{
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(5)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(5)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.removeProperty('display');
        });
    }
    
});
table_Company_Size.addEventListener('click', function () {
    var sign = table_Company_Size.querySelector('i');
    signShowHide(sign);

    if(sign.className !== 'fas fa-plus'){
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(6)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(6)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.display = 'none';
        });
    }else{
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(6)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(6)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.removeProperty('display');
        });
    }
    
});
table_Revenue.addEventListener('click', function () {
    var sign = table_Revenue.querySelector('i');
    signShowHide(sign);
    if(sign.className !== 'fas fa-plus'){
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(7)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(7)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.display = 'none';
        });
    }else{
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(7)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(7)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.removeProperty('display');
        });
    }
    
});
table_City.addEventListener('click', function () {
    var sign = table_City.querySelector('i');
    signShowHide(sign);

    if(sign.className !== 'fas fa-plus'){
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(8)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(8)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.display = 'none';
        });
    }else{
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(8)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(8)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.removeProperty('display');
        });
    }
    
});
table_URL.addEventListener('click', function () {
    var sign = table_URL.querySelector('i');
    signShowHide(sign);
    if(sign.className !== 'fas fa-plus'){
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(9)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(9)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.display = 'none';
        });
    }else{
        show_hide_column();
        var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(9)', 'table'), 0); // get the header cell
        var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(9)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
        lastColCells.forEach(function (cell) { // iterate and hide
            cell.style.removeProperty('display');
        });
    }
    
});

table_refresh.addEventListener('click', ()=>{

    table_Name.querySelector('i').setAttribute('class', "fas fa-plus");
    table_Title.querySelector('i').setAttribute('class', "fas fa-plus");
    table_Email.querySelector('i').setAttribute('class', "fas fa-plus");
    table_Phone.querySelector('i').setAttribute('class', "fas fa-plus");
    table_Company.querySelector('i').setAttribute('class', "fas fa-plus");
    table_Company_Size.querySelector('i').setAttribute('class', "fas fa-plus");
    table_Revenue.querySelector('i').setAttribute('class', "fas fa-plus");
    table_City.querySelector('i').setAttribute('class', "fas fa-plus");
    table_URL.querySelector('i').setAttribute('class', "fas fa-plus");

    let hideTH = document.querySelectorAll('th');
    for (let i = 0; i < hideTH.length; i++) {
        hideTH[i].style.removeProperty('display');
    }
    let hideTD = document.querySelectorAll('td');
    for (let i = 0; i < hideTD.length; i++) {
        hideTD[i].style.removeProperty('display');
    }

});