/*
1. updateBtn2()의 쿼리스트링 usercode 수정 필요
*/
//================================수정 페이지 출력 함수================================
updatePrint();
function updatePrint(){
    console.log('updatePrint')
    const url = new URLSearchParams(location.search);
    const getRcode = url.get('rcode');
    console.log( getRcode );
    // let rList = getrList();
    for ( let i = 0; i < rList.length; i++){
        const obj = rList[i];
        if ( obj.rcode == getRcode ){

            // 기존 게시물 정보를 마크업 안에 넣기
            document.querySelector('.re_inDate').value = obj.inDate;
            document.querySelector('.re_outDate').value = obj.outDate;
            document.querySelector('.textarea').value = obj.rRequest;
        }
    }
}

//================================예약 수정 버튼 함수================================
function updateBtn2(){
    console.log('updateBtn2');
    const url = new URLSearchParams(location.search);
    const getrcode = url.get('rcode');
    console.log( getrcode );
    // let rList = getrList();
    for ( let i = 0; i < rList.length; i++){
        let reservation = rList[i];
        if ( reservation.rcode == getrcode ){
            reservation.inDate = document.querySelector('.re_inDate').value;
            reservation.outDate = document.querySelector('.re_outDate').value;
            reservation.pcode = document.querySelector('.re_pInput').value; 
            reservation.people = document.querySelector('.re_btnValue').innerHTML;
            reservation.rRequest = document.querySelector('.textarea').value;
            console.log( reservation );
            // setrList(rList);
            location.href = `mypage.html?usercode=${reservation.userCode}`
            mypagePrint();
            alert('수정 완료');
        }
    }
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