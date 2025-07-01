

//================================localStorage에 rList 저장하기================================

let pList = [
    { pcode: 1, pname: 'A룸', pmax: 2, pprice: 150000 },
    { pcode: 2, pname: 'B룸', pmax: 2, pprice: 200000 },
    { pcode: 3, pname: 'C룸', pmax: 4, pprice: 250000 },
    { pcode: 4, pname: 'D룸', pmax: 4, pprice: 300000 },
    { pcode: 5, pname: 'E룸', pmax: 6, pprice: 400000 },
    { pcode: 6, pname: 'F룸', pmax: 2, pprice: 160000 },
    { pcode: 7, pname: 'G룸', pmax: 3, pprice: 220000 },
    { pcode: 8, pname: 'H룸', pmax: 4, pprice: 270000 },
    { pcode: 9, pname: 'I룸', pmax: 5, pprice: 330000 },
    { pcode: 10, pname: 'J룸', pmax: 6, pprice: 380000 },
    { pcode: 11, pname: 'K룸', pmax: 2, pprice: 140000 },
    { pcode: 12, pname: 'L룸', pmax: 3, pprice: 210000 },
    { pcode: 13, pname: 'M룸', pmax: 4, pprice: 290000 },
    { pcode: 14, pname: 'N룸', pmax: 5, pprice: 350000 },
    { pcode: 15, pname: 'O룸', pmax: 6, pprice: 420000 },
    { pcode: 16, pname: 'P룸', pmax: 2, pprice: 155000 },
    { pcode: 17, pname: 'Q룸', pmax: 3, pprice: 215000 },
    { pcode: 18, pname: 'R룸', pmax: 4, pprice: 265000 },
    { pcode: 19, pname: 'S룸', pmax: 5, pprice: 310000 },
    { pcode: 20, pname: 'T룸', pmax: 6, pprice: 450000 }
];

function setpList(pList) {
    localStorage.setItem('pList', JSON.stringify(pList) );
}
setpList(pList);

let rList = [
    { rcode: 1, userCode: 3, pcode: 2, rRequest: '조용한 방 부탁드립니다', inDate: '2025-07-10', outDate: '2025-07-12', people: 2, rCondition: '예약완료' },
    { rcode: 2, userCode: 7, pcode: 5, rRequest: '아이와 함께 갑니다', inDate: '2025-07-14', outDate: '2025-07-15', people: 4, rCondition: '예약완료' },
    { rcode: 3, userCode: 15, pcode: 1, rRequest: '늦은 체크인 가능할까요?', inDate: '2025-07-01', outDate: '2025-07-02', people: 2, rCondition: '입실완료' },
    { rcode: 4, userCode: 10, pcode: 9, rRequest: '뷰 좋은 방', inDate: '2025-07-20', outDate: '2025-07-22', people: 5, rCondition: '예약완료' },
    { rcode: 5, userCode: 25, pcode: 4, rRequest: '', inDate: '2025-06-28', outDate: '2025-06-30', people: 3, rCondition: '퇴실완료' },
    { rcode: 6, userCode: 18, pcode: 3, rRequest: '금연 방 부탁드립니다', inDate: '2025-07-03', outDate: '2025-07-05', people: 4, rCondition: '취소' },
    { rcode: 7, userCode: 1, pcode: 8, rRequest: '', inDate: '2025-07-18', outDate: '2025-07-19', people: 2, rCondition: '예약완료' },
    { rcode: 8, userCode: 22, pcode: 6, rRequest: '조용한 방 선호', inDate: '2025-07-08', outDate: '2025-07-09', people: 2, rCondition: '입실완료' },
    { rcode: 9, userCode: 5, pcode: 7, rRequest: '와이파이 잘 되는 방', inDate: '2025-07-05', outDate: '2025-07-06', people: 3, rCondition: '예약완료' },
    { rcode: 10, userCode: 30, pcode: 10, rRequest: '', inDate: '2025-07-02', outDate: '2025-07-04', people: 6, rCondition: '퇴실완료' },
    { rcode: 11, userCode: 13, pcode: 11, rRequest: '깨끗한 방 부탁해요', inDate: '2025-07-10', outDate: '2025-07-11', people: 2, rCondition: '예약완료' },
    { rcode: 12, userCode: 17, pcode: 12, rRequest: '큰 침대 있으면 좋겠어요', inDate: '2025-07-03', outDate: '2025-07-05', people: 3, rCondition: '입실완료' },
    { rcode: 13, userCode: 6, pcode: 13, rRequest: '', inDate: '2025-07-12', outDate: '2025-07-13', people: 4, rCondition: '예약완료' },
    { rcode: 14, userCode: 9, pcode: 14, rRequest: '주차 가능 여부?', inDate: '2025-07-15', outDate: '2025-07-16', people: 5, rCondition: '예약완료' },
    { rcode: 15, userCode: 28, pcode: 15, rRequest: '', inDate: '2025-07-20', outDate: '2025-07-23', people: 6, rCondition: '예약완료' }
];
function setrList(rList) {
    localStorage.setItem('rList', JSON.stringify( rList ));
}
setrList(rList);

function getrList(rList) {
    rList = localStorage.getItem( "rList" );
    if( rList == null ){
        return rList = [];
    }else{
        return rList = JSON.parse( rList );
    }
}
function getpList(pList) {
    pList = localStorage.getItem( "pList" );
    if( pList == null ){
        return pList = [];
    }else{
        return pList = JSON.parse( pList );
    }
}
m_print();
function m_print() {
    console.log("m_ print exe");
    let m_tbody = document.querySelector(".m_tbody")
    console.log(m_tbody);

    let pList = getpList();
    let rList = getrList();

    let html = "";
    for (let i = 0; i <= rList.length - 1; i++) {
        let reservation = rList[i];
        let pname = "";
        for (let j = 0; j <= pList.length - 1; j++) {
            if (pList[j].pcode === reservation.pcode) {
                pname = pList[j].pname;
            }
        }
        html += `<tr>
                    <td>${pname}</td>
                    <td>${reservation.inDate}</td>
                    <td>${reservation.outDate}</td>
                    <td>${reservation.rRequest}</td>
                    <td>${reservation.rCondition}</td>
                    <td>
                        <button onclick="m_removeBtn(${reservation.rcode})">삭제</button>
                    </td>
                </tr>`
    }
    m_tbody.innerHTML = html;
    setrList( rList );
    console.log( m_tbody );
}

//--------------삭제함수--------------//
function m_removeBtn(rcode) {
    console.log( "removeBtn exe" )

    let rList = getrList();

    for (let i = 0; i <= rList.length - 1; i++ ){
        if (rList[i].rcode == rcode) {
            rList.splice(i, 1);
            setrList(rList);
            alert("삭제가 완료되었습니다.")
            m_print();
            return;
        }
    }
}