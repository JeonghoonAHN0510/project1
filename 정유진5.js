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

//================================숙소위치 이동 함수================================
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