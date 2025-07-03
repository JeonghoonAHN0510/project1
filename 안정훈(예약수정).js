/*
1. updateBtn2()의 쿼리스트링 usercode 수정 필요
*/
//================================객실 종류에 option 추가 함수================================
// 실행조건 : 페이지가 실행되었을 때
productOption();
function productOption(){
    console.log('productOption 실행');
    // html 넣을 객체 가져오기
    const option = document.querySelector('.re_pInput');
    const url = new URLSearchParams(location.search);
    const getRcode = url.get('rcode');
    let rList = getrList();
    let pcode = 0;
    for(let i = 0; i< rList.length; i++){
        if ( getRcode == rList[i].rcode ){
            pcode = rList[i].pcode;
        }
    }
    let pname = '';
    for ( let i = 0; i <pList.length; i++){
        if ( pcode == pList[i].pcode ){
            pname = pList[i].pname;
        }
    }
    // 반복문을 통해 pList의 pname을 option에 넣기
    let html = `<option disabled selected>${pname}</option>`;
    for (let i = 0; i < pList.length; i++){
        let product = pList[i];
        html += `<option value = "${product.pcode}">${product.pname}</option>`;
    }
    option.innerHTML = html;
}
//================================pcode를 통한 pprice 함수================================
function getPprice(pcode){
    for ( let i = 0; i < pList.length; i++){
        if ( pcode == pList[i].pcode ){
            return pList[i].pprice
        }
    }
}
//================================수정 페이지 출력 함수================================

function updatePrint(){
    console.log('updatePrint')
    const url = new URLSearchParams(location.search);
    const getRcode = url.get('rcode');
    console.log( getRcode );
    let rList = getrList();
    for ( let i = 0; i < rList.length; i++){
        const obj = rList[i];
        if ( obj.rcode == getRcode ){
            let price = getPprice(obj.pcode);
            console.log( price )
            let html = `${price.toLocaleString()}원`;
            // 기존 게시물 정보를 마크업 안에 넣기
            document.querySelector('.re_inDate').value = obj.inDate;
            document.querySelector('.re_outDate').value = obj.outDate;
            document.querySelector('.textarea').value = obj.rRequest;
            document.querySelector('.re_price').innerHTML = html;
        }
    }
}

//================================예약 수정 버튼 함수================================
function updateBtn2(){
    console.log('updateBtn2');
    const url = new URLSearchParams(location.search);
    const getrcode = url.get('rcode');
    console.log( getrcode );
    let rList = getrList();
    for ( let i = 0; i < rList.length; i++){
        let reservation = rList[i];
        if ( reservation.rcode == getrcode ){
            reservation.inDate = document.querySelector('.re_inDate').value;
            reservation.outDate = document.querySelector('.re_outDate').value;
            reservation.pcode = document.querySelector('.re_pInput').value; 
            reservation.people = document.querySelector('.re_btnValue').innerHTML;
            reservation.rRequest = document.querySelector('.textarea').value;
            console.log( reservation );
            setrList(rList);
            location.href = `안정훈(마이페이지).html?usercode=${reservation.userCode}`
            mypagePrint();
            alert('수정 완료');
        }
    }
}
//================================예약 인원 증가 함수================================
// 실행조건 : plus버튼이 눌렸을 때
function plusBtn(){
    console.log('plusBtn 실행');
    let valueInner = document.querySelector('.re_btnValue');
    let value = document.querySelector('.re_btnValue').innerHTML;
    console.log( value );
    let product = document.querySelector('.re_pInput').value;
    console.log( product );
    value++;
    for ( let i = 0; i < pList.length; i++){
        if ( product == pList[i].pcode ){
            if ( value > pList[i].pmax ){
                alert(`선택하신 객실의 최대 인원은 ${pList[i].pmax}명입니다.`)
                return;
            }
        }
    }
    valueInner.innerHTML = value;
}
//================================예약 인원 감소 함수================================
// 실행조건 : minus버튼이 눌렸을 때
function minusBtn(){
    console.log('minusBtn 실행');
    let valueInner = document.querySelector('.re_btnValue');
    let value = document.querySelector('.re_btnValue').innerHTML;
    console.log( value );
    if ( value <= 1 ){
        alert('최소 인원은 1명입니다.')
        return;
    }
    value--;
    valueInner.innerHTML = value;
}
//================================객실 가격 표시 함수================================
pricePrint();
function pricePrint(){
    let price = document.querySelector('.re_price');
    let html = `객실을 선택하세요`;
    let selectValue = document.querySelector('.re_pInput').value;   // 선택된 객실 pcode
    // 반복문을 통해 선택된 pcode와 같은 객실 찾기
    for( let i = 0 ; i < pList.length; i++){
        let product = pList[i];
        let pprice = product.pprice
        if ( selectValue == product.pcode ){
            let final = pprice.toLocaleString();
            html = `${final}원`
        }
    }
    price.innerHTML = html;
}

//================================고객 이름 출력 함수================================
namePrint()
function namePrint(){
    let userCode = new URLSearchParams(location.search).get('usercode');
    console.log( userCode );
    let userList = getuserList();
    // 어디에 .logtopMenu에
    let logtop = document.querySelector('.userName');
    let html = ``;
    for ( let i = 0; i < userList.length; i++){
        let user = userList[i];
        if ( user.userCode == userCode ){
            html = `${user.userName}님 환영합니다!`
            logtop.innerHTML = html;
            return;
        }
    }
}
//================================마이페이지 이동 함수================================
function transMypage(){
    let userCode = new URLSearchParams(location.search).get('usercode');
    console.log( userCode );
    location.href = `안정훈(마이페이지).html?usercode=${userCode}`;
}
//================================예약신청 이동 함수================================
function transReser(){
    let userCode = new URLSearchParams(location.search).get('usercode');
    location.href = `안정훈(예약신청).html?usercode=${userCode}`;
}

//================================마이페이지 이동 함수================================
function translocation(){
    let userCode = new URLSearchParams(location.search).get('usercode');
    console.log( userCode );
    location.href = `정유진4.html?usercode=${userCode}`;
}
function transInfo(){
    let userCode = new URLSearchParams(location.search).get('usercode');
    console.log( userCode );
    location.href = `정유진5.html?usercode=${userCode}`;
}
//================================로그아웃 함수================================
function logout(){
    location.href = '정은주.html'
    alert('로그아웃 성공!')
}