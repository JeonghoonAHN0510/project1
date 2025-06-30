let adminObj = 
 { userCode: 1, userName: '유재석', userNum: '01011112222', userEmail: 'qwe@qwe.qwe', userPwd: 'qwe123' };
//================================localStorage에 userList 저장하기================================


/*function setuserList(userList) {
    localStorage.setItem('userList', JSON.stringify(userList));
}
*/

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
    /*let userList = localStorage.getItem('userList');
    if (userList == null) {
        userList = [];
    } else {
        userList = JSON.parse(userList);

    }
*/
    //5. 배열내 입력한 아이디와 비밀번호가 존재하면

        if (adminObj.userEmail == userEmail && adminObj.userPwd == userPwd) {// 비밀번호 일치
            alert('로그인되었습니다');
            return;
        }
    alert('로그인에 실패하였습니다');
}

