let adminObj = 
 { userCode: 1, userName: '유재석', userNum: '01011112222', userEmail: 'qwe@qwe.qwe', userPwd: 'qwe123' };
//================================localStorage에 userList 저장하기================================


function setuserList(adminObj) {
    localStorage.setItem('adminObj', JSON.stringify(adminObj));
}

setuserList(adminObj);

/*function setuserList(){
    let userList = localStorage.getItem('userList');
}
*/
//1. 입력 마크 객체 가져오기
function logbutton() {

    const loguserEmail = document.querySelector('#loguserEmail');
    const loguserPwd = document.querySelector('#loguserPwd');
    //2. 입력 마크업 객체내 입력값 가져오기
    const userEmail = loguserEmail.value; console.log(userEmail);
    const userPwd = loguserPwd.value;     console.log(userPwd);

    //3. 회원목록내 입력받은 값과 일치한 정보 찾기
    let userList = localStorage.getItem('userList');
    if (userList == null) {
        userList = [];
    } else {
        userList = JSON.parse(userList);

    }

    //5. 배열내 입력한 아이디와 비밀번호가 존재하면

        if (adminObj.userEmail == userEmail && adminObj.userPwd == userPwd) {// 비밀번호 일치
            alert('로그인되었습니다');
            location.href=`정유진.html`;
            return;
        }
    alert('로그인에 실패하였습니다');
}

function pwdPrint(){
    console.log('11111');
    let pwd = document.querySelector('#loguserPwd');
    let img = document.querySelector('.imgpwd');
    if ( pwd.type == 'text' ){
        pwd.type = "password";
        img.src = "KakaoTalk_20250702_172831311.png";
    }else {
        pwd.type = "text";
        img.src = "KakaoTalk_20250702_173318028.png";
    }
}