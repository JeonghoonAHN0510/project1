stockPrint();
function stockPrint() {
    let stockList = getStockList();
    let body = document.querySelector('.m_tbody');
    let html = ``
    for (let i = 0; i < stockList.length; i++) {
        let stock = stockList[i];
        let stock1 = stock.stockIn - stock.stockUsed;
        html += `<tr>
                    <td>${stock.productId}</td>
                    <td>${stock.category}</td>
                    <td>${stock.productName}</td>
                    <td>${stock.stockIn}</td>
                    <td>${stock.stockUsed}</td>
                    <td>${stock1}</td>
                    <td>${stock.minStockLevel}</td>
                    <td>${stock.notes}</td>
                    <td>
                        <button onclick="s_retouchBtn(${stock.productId})">수정</button>
                        <button onclick="s_removeBtn(${stock.productId})">삭제</button>
                    </td>
                 </tr>`
    }
    body.innerHTML = html;
}
function s_retouchBtn(productId){
    let stockList = getStockList();
    let body = document.querySelector('.m_tbody');
    let html = ``
    for (let i = 0; i < stockList.length; i++) {
        let stock = stockList[i];
        let stock1 = stock.stockIn - stock.stockUsed;
        if ( stock.productId == productId ){
            html += `<tr>
                    <td>${stock.productId}</td>
                    <td><input class="cateInput1" type="text" value="${stock.category}"></td>
                    <td><input class="nameInput1" type="text" value="${stock.productName}"></td>
                    <td><input class="inInput1" type="text" value="${stock.stockIn}"></td>
                    <td><input class="inInput2" type="text" value="${stock.stockUsed}"></td>
                    <td><input class="preInput1" type="text" value="${stock1}"></td>
                    <td><input class="minInput1" type="text" value="${stock.minStockLevel}"></td>
                    <td><input class="noteInput1" type="text" value="${stock.notes}"></td>
                    <td>
                        <button onclick="srBtn(${stock.productId})">수정완료</button>
                    </td>
                 </tr>`;
            continue;
        }
        html += `<tr>
                    <td>${stock.productId}</td>
                    <td>${stock.category}</td>
                    <td>${stock.productName}</td>
                    <td>${stock.stockIn}</td>
                    <td>${stock.stockUsed}</td>
                    <td>${stock1}</td>
                    <td>${stock.minStockLevel}</td>
                    <td>${stock.notes}</td>
                    <td>
                        <button onclick="s_retouchBtn(${stock.productId})">수정</button>
                        <button onclick="s_removeBtn(${stock.productId})">삭제</button>
                    </td>
                 </tr>`
    }
    body.innerHTML = html;
}
function srBtn(productId){
    let stockList = getStockList();
    for(let i = 0; i <= stockList.length- 1; i++){
        let stock = stockList[i];
        if ( stock.productId == productId ){
            stock.category = document.querySelector('.cateInput1').value;
            stock.productName = document.querySelector('.nameInput1').value;
            stock.stockIn = document.querySelector('.inInput1').value;
            stock.stockUsed = document.querySelector('.inInput2').value;
            stock.minStockLevel = document.querySelector('.minInput1').value;
            stock.notes = document.querySelector('.noteInput1').value;
            setStockList(stockList);
            stockPrint();
        }
    }
}



// function s_retouchBtn(stockcode){
//     console.log('s_retouchBtn');
//     let category = prompt("카테고리를 입력하세요.");
//     let productName = prompt("상품명을 입력하세요.");
//     let stockIn = prompt("입고수량을 입력하세요.");
//     let stockUsed = prompt("입고된 뒤 사용량을 입력하세요.");
//     let minStockLevel = prompt("최소재고기준을 입력하세요.");
//     let notes = prompt("메모사항을 입력하세요.");
//     let stockList = getStockList();
//     for ( let i = 0; i <= stockList.length - 1; i++){
//         let stock = stockList[i];
//         if ( stock.productId == stockcode ){
//             console.log(stock);
//             stock.category = category;
//             stock.productName = productName;
//             stock.stockIn = stockIn;
//             stock.stockUsed = stockUsed;
//             stock.minStockLevel = minStockLevel;
//             stock.notes = notes;
//             setStockList(stockList);
//             stockPrint();
//         }
//     }
// }

// function s_plus(){
//     console.log('s_plus');
//     let category = prompt("카테고리를 입력하세요.");
//     let productName = prompt("상품명을 입력하세요.");
//     let stockIn = prompt("입고수량을 입력하세요.");
//     let stockUsed = prompt("입고된 뒤 사용량을 입력하세요.");
//     let minStockLevel = prompt("최소재고기준을 입력하세요.");
//     let notes = prompt("메모사항을 입력하세요.");
//     let productId = stockList.length == 0 ? 1 : stockList[stockList.length-1].productId + 1;
//     let obj = {
//         productId,
//         category,
//         productName,
//         stockIn,
//         stockUsed,
//         minStockLevel,
//         notes
//     }
//     stockList.push( obj );
//     setStockList(stockList);
//     stockPrint();
// }
function s_plus(){
    console.log('1111');
    let stockList = getStockList();
    let body = document.querySelector('.m_tbody');
    let html = ``
    let num = stockList[stockList.length-1].productId + 1;
    html += `<tr>
                <td>${num}</td>
                <td><input class="cate_input" type="text" placeholder="카테고리"></td>
                <td><input class="name_input" type="text" placeholder="상품명"></td>
                <td><input class="inst_input" type="text" placeholder="입고수량"></td>
                <td><input class="usst_input" type="text" placeholder="사용량"></td>
                <td></td>
                <td><input class="mins_input" type="text" placeholder="최소재고기준"></td>
                <td><input class="note_input" type="text" placeholder="유의사항"></td>
                <td>
                    <button onclick="spBtn()">추가완료</button>
                </td>
                </tr>`
    body.innerHTML += html;
};
function spBtn(){
    let category      = document.querySelector('.cate_input').value;
    let productName   = document.querySelector('.name_input').value;
    let stockIn       = document.querySelector('.inst_input').value;
    let stockUsed     = document.querySelector('.usst_input').value;
    let minStockLevel = document.querySelector('.mins_input').value;
    let notes         = document.querySelector('.note_input').value;
    let productId = stockList.length == 0 ? 1 : stockList[stockList.length-1].productId + 1;
    let obj = {
        productId,
        category,
        productName,
        stockIn,
        stockUsed,
        minStockLevel,
        notes
    }
    stockList.push( obj );
    setStockList(stockList);
    stockPrint();
}


function s_removeBtn(stockcode) {
    console.log("removeBtn exe")

    let stockList = getStockList();

    for (let i = 0; i <= stockList.length - 1; i++) {
        if (stockList[i].productId == stockcode) {
            stockList.splice(i, 1);
            setStockList(stockList);
            alert("삭제가 완료되었습니다.")
            stockPrint();
            return;
        }
    }
}

function managerLogout() {
    location.href = '관리자.html'
    alert('로그아웃 성공!')
}

function m_searchBtn() {
    console.log("searchBox exe");

    let stockList = getStockList();

    let m_tbody = document.querySelector(".m_tbody");
    let html = "";

    let sear_name = document.querySelector(".sear_name").value;

    for (let i = 0; i < stockList.length; i++) {
        let stock = stockList[i];

        if (sear_name == stock.productName) {
            let stock1 = stock.stockIn - stock.stockUsed;
            html += `<tr>
                    <td>${stock.productId}</td>
                    <td>${stock.category}</td>
                    <td>${stock.productName}</td>
                    <td>${stock.stockIn}</td>
                    <td>${stock1}</td>
                    <td>${stock.minStockLevel}</td>
                    <td>${stock.manager}</td>
                    <td>${stock.notes}</td>
                    <td><button onclick="s_removeBtn(${stock.productId})">삭제</button></td>
                 </tr>`
        }
    m_tbody.innerHTML = html;
}
}