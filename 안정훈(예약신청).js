/*
수정할 점
1. usercode 쿼리스트링 만들어내기
- 로그인 페이지와 함께
2. rCondition 정하기
*/
//================================객실 종류에 option 추가 함수================================
// 실행조건 : 페이지가 실행되었을 때
productOption();
function productOption(){
    console.log('productOption 실행');
    // html 넣을 객체 가져오기
    const option = document.querySelector('.re_pInput');
    // 반복문을 통해 pList의 pname을 option에 넣기
    let html = `<option disabled selected>객실 선택</option>`;
    for (let i = 0; i < pList.length; i++){
        let product = pList[i];
        html += `<option value = "${product.pcode}">${product.pname}</option>`;
    }
    option.innerHTML = html;
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
//================================예약 신청 버튼 함수================================
// 실행조건 : 예약신청 버튼이 눌렸을 때
function reservationBtn(){
    console.log('reservationBtn 실행');
    // 입력값 가져오기
    let inDate = document.querySelector('.re_inDate').value;        console.log( inDate );
    let outDate = document.querySelector('.re_outDate').value;      console.log( outDate );
    let pcode = document.querySelector('.re_pInput').value;         console.log( pcode );
    let people = document.querySelector('.re_btnValue').innerHTML;  console.log( people );
    let rRequest = document.querySelector('.textarea').value;       console.log( rRequest );
    const url = new URLSearchParams(location.search);
    const getUsercode = url.get('usercode');
    // 가져온 입력값을 객체화 해서
    // let rList = getrList();
    let rcode = rList.length == 0 ? 1 : rList[rList.length - 1].rcode + 1;
    let obj = {
        rcode,
        userCode : getUsercode,               // userCode 수정 필요!!!!!!
        pcode,
        rRequest,
        inDate,
        outDate,
        people,
        rCondition : '예약 신청'    // rCondition 수정 필요!!!!!
    }
    // rList에 obj를 push 하기
    rList.push( obj );
    // localStorage의 rList에 저장하기
    setrList(rList);
}
//================================고객 이름 출력 함수================================
namePrint()
function namePrint(){
    let userCode = new URLSearchParams(location.search).get('usercode');
    console.log( userCode );
    let userList = getuserList();
    // 어디에 .logtopMenu에
    let logtop = document.querySelector('.logtopMenu');
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