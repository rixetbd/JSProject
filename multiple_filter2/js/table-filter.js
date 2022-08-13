let table_Name = document.getElementById('table_Name');
let table_Email = document.getElementById('table_Email');
let table_Phone = document.getElementById('table_Phone');
let table_Company = document.getElementById('table_Company');
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

    show_hide_column();
    var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:first-child', 'table'), 0); // get the header cell
    var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:first-child', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
    lastColCells.forEach(function (cell) { // iterate and hide
        cell.style.display = 'none';
    });
});

table_Email.addEventListener('click', function () {
    var sign = table_Email.querySelector('i');
    signShowHide(sign);

    show_hide_column();
    var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(2)', 'table'), 0); // get the header cell
    var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(2)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
    lastColCells.forEach(function (cell) { // iterate and hide
        cell.style.display = 'none';
    });
});

table_Phone.addEventListener('click', function () {
    var sign = table_Phone.querySelector('i');
    signShowHide(sign);

    show_hide_column();
    var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(3)', 'table'), 0); // get the header cell
    var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(3)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
    lastColCells.forEach(function (cell) { // iterate and hide
        cell.style.display = 'none';
    });
});
table_Company.addEventListener('click', function () {
    var sign = table_Company.querySelector('i');
    signShowHide(sign);

    show_hide_column();
    var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(4)', 'table'), 0); // get the header cell
    var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(4)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
    lastColCells.forEach(function (cell) { // iterate and hide
        cell.style.display = 'none';
    });
});
table_Revenue.addEventListener('click', function () {
    var sign = table_Revenue.querySelector('i');
    signShowHide(sign);

    show_hide_column();
    var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(5)', 'table'), 0); // get the header cell
    var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(5)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
    lastColCells.forEach(function (cell) { // iterate and hide
        cell.style.display = 'none';
    });
});
table_City.addEventListener('click', function () {
    var sign = table_City.querySelector('i');
    signShowHide(sign);

    show_hide_column();
    var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(6)', 'table'), 0); // get the header cell
    var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(6)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
    lastColCells.forEach(function (cell) { // iterate and hide
        cell.style.display = 'none';
    });
});
table_URL.addEventListener('click', function () {
    var sign = table_URL.querySelector('i');
    signShowHide(sign);

    show_hide_column();
    var lastColHeader = Array.prototype.slice.call(document.querySelectorAll('th:nth-child(7)', 'table'), 0); // get the header cell
    var lastColCells = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(7)', 'table'), 0).concat(lastColHeader); // get the column cells, and add header
    lastColCells.forEach(function (cell) { // iterate and hide
        cell.style.display = 'none';
    });
});

table_refresh.addEventListener('click', ()=>{

    table_Name.setAttribute('class', "fas fa-plus");
    table_Name.setAttribute('class', "fas fa-plus");
    table_Name.setAttribute('class', "fas fa-plus");

});