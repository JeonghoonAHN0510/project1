let stockList = [
    { productId: 1, category: '욕실용품', productName: '샴푸', stockIn: 500, stockUsed: 200, minStockLevel: 50, manager: '이효리', notes: '헤어디자인 전용 제품' },
    { productId: 2, category: '욕실용품', productName: '린스', stockIn: 300, stockUsed: 120, minStockLevel: 30, manager: '이효리', notes: '민감성 두피용' },
    { productId: 3, category: '욕실용품', productName: '바디워시', stockIn: 400, stockUsed: 180, minStockLevel: 40, manager: '김민수', notes: '허브향 제품 사용' },
    { productId: 4, category: '욕실용품', productName: '치약', stockIn: 600, stockUsed: 350, minStockLevel: 80, manager: '김민수', notes: '1회용 튜브' },
    { productId: 5, category: '욕실용품', productName: '칫솔', stockIn: 700, stockUsed: 300, minStockLevel: 70, manager: '박지현', notes: '친환경 포장' },
    { productId: 6, category: '욕실용품', productName: '비누', stockIn: 450, stockUsed: 200, minStockLevel: 50, manager: '박지현', notes: '천연비누' },
    { productId: 7, category: '객실용품', productName: '슬리퍼', stockIn: 300, stockUsed: 200, minStockLevel: 30, manager: '정윤호', notes: 'M/L 사이즈 구분' },
    { productId: 8, category: '객실용품', productName: '타월', stockIn: 800, stockUsed: 500, minStockLevel: 100, manager: '정윤호', notes: '페이스/바디 구분 필요' },
    { productId: 9, category: '객실용품', productName: '헤어드라이어', stockIn: 50, stockUsed: 10, minStockLevel: 5, manager: '정윤호', notes: '예약실 전용 비치' },
    { productId: 10, category: '미니바', productName: '생수 500ml', stockIn: 1000, stockUsed: 600, minStockLevel: 150, manager: '김소연', notes: '하루 2병 제공' },
    { productId: 11, category: '미니바', productName: '콜라 캔', stockIn: 300, stockUsed: 220, minStockLevel: 50, manager: '김소연', notes: '냉장 필수' },
    { productId: 12, category: '미니바', productName: '오렌지주스', stockIn: 250, stockUsed: 200, minStockLevel: 40, manager: '김소연', notes: '유통기한 확인 필요' },
    { productId: 13, category: '욕실용품', productName: '면도기', stockIn: 200, stockUsed: 150, minStockLevel: 30, manager: '이효리', notes: '1회용 개별포장' },
    { productId: 14, category: '욕실용품', productName: '샤워캡', stockIn: 180, stockUsed: 90, minStockLevel: 20, manager: '이효리', notes: '소형 사이즈 추가 요청' },
    { productId: 15, category: '객실용품', productName: '우산', stockIn: 80, stockUsed: 20, minStockLevel: 10, manager: '정윤호', notes: '로비 대여용' },
    { productId: 16, category: '객실용품', productName: '배스로브', stockIn: 120, stockUsed: 50, minStockLevel: 10, manager: '정윤호', notes: '드라이클리닝 필수' },
    { productId: 17, category: '미니바', productName: '와인 미니병', stockIn: 100, stockUsed: 80, minStockLevel: 20, manager: '김소연', notes: '고객요청 시 제공' },
    { productId: 18, category: '미니바', productName: '초콜릿 바', stockIn: 500, stockUsed: 300, minStockLevel: 60, manager: '김소연', notes: '냉장보관' },
    { productId: 19, category: '욕실용품', productName: '면봉', stockIn: 600, stockUsed: 400, minStockLevel: 100, manager: '박지현', notes: '리필 시 멸균 필요' },
    { productId: 20, category: '욕실용품', productName: '화장솜', stockIn: 350, stockUsed: 180, minStockLevel: 40, manager: '박지현', notes: '면 100% 제품' },
];

function setStockList(stockList) {
    localStorage.setItem('stockList', JSON.stringify(stockList));
}
setStockList(stockList);
function getStockList() {
    stockList = localStorage.getItem('stockList');
    if (stockList == null) {
        stockList = [];
    } else {
        stockList = JSON.parse(stockList);
    }
    return stockList;
}

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
                    <td>${stock1}</td>
                    <td>${stock.minStockLevel}</td>
                    <td>${stock.manager}</td>
                    <td>${stock.notes}</td>
                    <td><button onclick="s_removeBtn(${stock.productId})">삭제</button></td>
                 </tr>`
    }
    body.innerHTML = html;
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