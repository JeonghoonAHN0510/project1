/*
수정할 점
1. mypagePrint함수에서 usercode 쿼리스트링 만들어내기
- 로그인 페이지와 함께
*/
//================================나의 예약 출력 함수================================
// 실행조건 : 페이지가 실행되었을 때
mypagePrint();
function mypagePrint(){
    console.log('mypagePrint 실행');
    // 어디에? .mypage_table에
    let table = document.querySelector('.mypage_table');
    // rList를 가져오고
    let rList = getrList()
    // 로그인한 userCode를 가져와서
    let userCode = new URLSearchParams(location.search).get( 'usercode' );
    console.log( userCode );
    // 반복문을 통해 rList에서 동일한 userCode인 예약 목록을 찾은 다음
    let html = ``;
    for ( let i = 0; i < rList.length; i++){
        if ( rList[i].userCode == userCode ){
            let reservation = rList[i];
            let pname = getPname(reservation.pcode);
            html += `<tr>
                        <td>${pname}</td>
                        <td>${reservation.inDate}</td>
                        <td>${reservation.outDate}</td>
                        <td>${reservation.rRequest}</td>
                        <td>${reservation.rCondition}</td>
                        <td>
                            <button onclick = "updateBtn(${reservation.rcode})">수정</button>
                            <button onclick = "deleteBtn(${reservation.rcode})">삭제</button>
                        </td>
                     </tr>`
        }
    }
    // table에 예약 목록 출력
    table.innerHTML = html;
};
//================================pcode를 통해 pname 구하는 함수================================
function getPname(pcode){
    for (let i = 0; i < pList.length; i++){
        if ( pcode == pList[i].pcode ){
            return pList[i].pname;
        }
    }
};
//================================수정 버튼 함수================================
// 실행조건 : 수정 버튼이 onclick 됐을 때
function updateBtn(rcode){
    let userCode = new URLSearchParams(location.search).get( 'usercode' );
    console.log( userCode );
    location.href = `안정훈(예약수정).html?usercode=${userCode}&rcode=${rcode}`;
}       // usercode 수정 필요
//================================삭제 버튼 함수================================
// 실행조건 : 삭제 버튼이 onclick 됐을 
function deleteBtn(rcode){
    console.log('deleteBtn 실행');
    let rList = getrList();
    for ( let i = 0; i < rList.length; i++){
        let reservation = rList[i];
        if ( reservation.rcode == rcode ){
            rList.splice(i, 1);
            setrList(rList);
            mypagePrint();
            alert('예약 삭제 성공')
            return;
        }
    }
};
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
//================================로그아웃 함수================================
function logout(){
    location.href = '정은주.html'
    alert('로그아웃 성공!')
}