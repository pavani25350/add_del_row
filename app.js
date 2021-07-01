var i = 1, count = 0;
function add1() {
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var input = document.createElement('input');
    var plus = document.createElement('button');
    var minus = document.createElement('button');
    var table = document.getElementById("table1");
    row.classList.add("rowadd");
    table.appendChild(row);
    row.appendChild(td1);
    td1.innerHTML = table1.rows.length - 1 - count;
    row.appendChild(td2);
    td2.appendChild(input);
    row.appendChild(td3);
    plus.classList.add('add', 'des');
    minus.classList.add('del');
    td3.appendChild(plus).innerHTML = "+";
    td3.appendChild(minus).innerHTML = "-";
    plus.addEventListener('click', add1);
    minus.addEventListener('click', del);
    minus.id = "b" + String(table1.rows.length - 1);
    row.id = "r" + String(table1.rows.length - 1);
}
function del() {
    if (this.id === undefined)
        this.id = "b1";
    var rid = "r";
    for (p = 1; p < this.id.length; p++) {
        rid += this.id[p];
    }
    if (table1.rows.length - count === 2) {
        document.getElementById(rid).style.display = "";
    }
    else {
        document.getElementById(rid).style.display = "none";
        count += 1;
    }
    for (var q = 1, r = 1; q < table1.rows.length; q++) {
        if (table1.rows[q].style.display !== 'none')
            table1.rows.item(q).cells[0].innerHTML = r++;
    }
}