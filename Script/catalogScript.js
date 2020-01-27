
let mock = [
    { id: 1, name: 'CPU', price: 2, quantity: 5 },
    { id: 2, name: 'GPU', price: 4, quantity: 3 },
    { id: 3, name: 'HDD', price: 12, quantity: 2 },
    { id: 4, name: 'SSD', price: 3, quantity: 2 },
    { id: 5, name: 'RAM', price: 1, quantity: 3 },
];


document.addEventListener('DOMContentLoaded', function () {
    fillStorageTable(mock);


});

let PriceProduct;
let CostPrice = 0;
let pricePay;

function fillStorageTable(storage) {
    let storageTable = document.getElementById('storageTable');


    storage.forEach(function (currentElement) {
        let storageRow = document.createElement('tr');
        let nameTD = document.createElement('td');
        nameTD.innerHTML = currentElement.name;
        let priceTD = document.createElement('td');
        priceTD.innerHTML = currentElement.price;
        let quantityTD = document.createElement('td');
        quantityTD.innerHTML = currentElement.quantity;
        quantityTD.setAttribute('id', `${currentElement.id}`);
        storageRow.appendChild(nameTD);
        storageRow.setAttribute('id', `tr${currentElement.id}`);
        storageRow.appendChild(priceTD);
        priceTD.setAttribute('id', `Pr${currentElement.id}`);
        storageRow.appendChild(quantityTD);

        //storageRow.addEventListener('click', onStorageRowClick);
        storageRow.addEventListener('click', CostNeed);
        storageRow.addEventListener('click', inkrBascketAmount);



        storageTable.appendChild(storageRow);

    });

}


let NumAmout = 1;
function inkrBascketAmount() {
    rowId = document.getElementById(`mock${this.id}`);
    let cartId = document.getElementById(`right${this.id}`)//id right table
    if (this.children[2].innerHTML == 0) {

    }
    else if (cartId) {
        this.children[2].innerHTML--;
        cartId.children[2].innerHTML++;
    }
    else {
        this.children[2].innerHTML--;
        let copyRow = this.cloneNode(true);
        copyRow.setAttribute('id', `right${this.id}`)
        copyRow.children[2].innerHTML = NumAmout;
        copyRow.children[1].innerHTML = this.children[1].innerHTML;
        copyRow.addEventListener('click', deleteTR);
        copyRow.addEventListener('click', AmounWareHouse);
        copyRow.addEventListener('click', dikrCostNeed);
        bascketTable.append(copyRow);
    }

}

function deleteTR(focus) {
    let storageTable = document.getElementById('storageTable');
    if (this.children[2].innerHTML == 1) {
        focus = this;
        focus.parentNode.removeChild(focus);

        let idTableWare = storageTable.children[`${this.children[2].id}`]
        idTableWare.children[2].innerHTML++;
        let idConst = idTableWare.children[2].innerHTML;
    }

    else {
        this.children[2].innerHTML--;
        let a = storageTable.children[`${this.children[2].id}`];

        console.log(a.children[2].innerHTML++)
    }
}



function CostNeed() {
    let cost = document.getElementById('cost');
    let amount = this.children[2].innerHTML;
    PriceProduct = this.children[1].innerHTML;
    if (amount == 0) {

    }
    else {
        CostPrice += +PriceProduct;
        cost.innerHTML = 'You pay' + ' ' + CostPrice;
        //console.log(this.children[1].innerHTML =+PriceProduct+1 )
        //console.log(amount)

    }
}




function dikrCostNeed() {
    let cost = document.getElementById('cost');
    PriceProduct = this.children[1].innerHTML;
    CostPrice = CostPrice - +PriceProduct;
    cost.innerHTML = 'You pay' + ' ' + CostPrice;
    //console.log(this.children[1].innerHTML )
    console.log(PriceProduct)
}




let countAmount;
function AmounWareHouse() {
    //let Item = document.getElementById('storageTable');
    //let Item = document.getElementById('bascketTable');
    //console.log();
}