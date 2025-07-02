let userList = [
  { userCode: 1, userName: '유재석', userNum: '01011112222', userEmail: 'qwe123@qwe123.com', userPwd: 'qwe123' },
  { userCode: 2, userName: '김종국', userNum: '01012345678', userEmail: 'kimjk12@example.com', userPwd: 'pass1234' },
  { userCode: 3, userName: '박명수', userNum: '01087654321', userEmail: 'parkms@example.com', userPwd: 'abc12345' },
  { userCode: 4, userName: '정형돈', userNum: '01022223333', userEmail: 'donhyung@example.com', userPwd: 'donny456' },
  { userCode: 5, userName: '하하', userNum: '01033334444', userEmail: 'haha@example.com', userPwd: 'haha5678' },
  { userCode: 6, userName: '송지효', userNum: '01044445555', userEmail: 'jihyo.song@example.com', userPwd: 'songpw99' },
  { userCode: 7, userName: '이광수', userNum: '01055556666', userEmail: 'kwangsoo@example.com', userPwd: 'kwang22' },
  { userCode: 8, userName: '전소민', userNum: '01066667777', userEmail: 'somin.jeon@example.com', userPwd: 'somin456' },
  { userCode: 9, userName: '양세찬', userNum: '01077778888', userEmail: 'yangsc@example.com', userPwd: 'yangpw78' },
  { userCode: 10, userName: '이효리', userNum: '01088889999', userEmail: 'leehl@example.com', userPwd: 'hyolee01' },
  { userCode: 11, userName: '비', userNum: '01099990000', userEmail: 'rain@rain.com', userPwd: 'rain123' },
  { userCode: 12, userName: '장도연', userNum: '01011110000', userEmail: 'jangdy@example.com', userPwd: 'doyeon12' },
  { userCode: 13, userName: '김숙', userNum: '01022221111', userEmail: 'kimsook@example.com', userPwd: 'sookpass' },
  { userCode: 14, userName: '홍진경', userNum: '01033332222', userEmail: 'hongjk@example.com', userPwd: 'hongpw88' },
  { userCode: 15, userName: '조세호', userNum: '01044443333', userEmail: 'joeho@example.com', userPwd: 'seho789' },
  { userCode: 16, userName: '강호동', userNum: '01055554444', userEmail: 'kanghd@example.com', userPwd: 'hodong99' },
  { userCode: 17, userName: '이수근', userNum: '01066665555', userEmail: 'leesg@example.com', userPwd: 'soogeun1' },
  { userCode: 18, userName: '서장훈', userNum: '01077776666', userEmail: 'seojh@example.com', userPwd: 'janghoon9' },
  { userCode: 19, userName: '김연경', userNum: '01088887777', userEmail: 'yeonkk@example.com', userPwd: 'volley22' },
  { userCode: 20, userName: '기안84', userNum: '01099998888', userEmail: 'kian84@webtoon.com', userPwd: 'kian8484' },
  { userCode: 21, userName: '이영지', userNum: '01012121212', userEmail: 'youngji@example.com', userPwd: 'ygj222' },
  { userCode: 22, userName: '유아인', userNum: '01034343434', userEmail: 'yooin@example.com', userPwd: 'yooin99' },
  { userCode: 23, userName: '정은지', userNum: '01056565656', userEmail: 'eunji@example.com', userPwd: 'pink987' },
  { userCode: 24, userName: '이찬원', userNum: '01078787878', userEmail: 'chanwon@example.com', userPwd: 'chan123' },
  { userCode: 25, userName: '임영웅', userNum: '01090909090', userEmail: 'youngwoong@example.com', userPwd: 'hero8888' },
  { userCode: 26, userName: '김범수', userNum: '01001010101', userEmail: 'bsk@example.com', userPwd: 'voice99' },
  { userCode: 27, userName: '백현', userNum: '01002020202', userEmail: 'baekhyun@exo.com', userPwd: 'exo4444' },
  { userCode: 28, userName: '아이유', userNum: '01003030303', userEmail: 'iu@dlwlrma.com', userPwd: 'iu2020' },
  { userCode: 29, userName: '태연', userNum: '01004040404', userEmail: 'taeyeon@gg.com', userPwd: 'snsd123' },
  { userCode: 30, userName: '제시', userNum: '01005050505', userEmail: 'jessie@example.com', userPwd: 'strongpw' }
];

// ===== 1. localStorage 관리하는 함수 ======
function setLocalStorage(userList) {
    localStorage.setItem('userList', JSON.stringify(userList));//문자열만 저장할수있기 때문에 JSON문자열로 변환
    console.log(userList);
}

// ===== 2. 회원가입 함수 =====
function signupBotton(){ console.log('--> signupBotton exe')}
  // (1) 입력 마크업 객체가져오기 
  const signup_name = document.querySelector('#signup_name'); console.log( signup_name);
  const signup_phone = document.querySelector('#signup_phone');
  const signup_email = document.querySelector('#signup_email');
  const signup_pwd = document.querySelector('#signup_pwd');
  const confirmPassword = document.querySelector('#confirmPassword');
  
  // (2) 입력마크업 객체내 입력값 가져오기
  const userName = signup_name.value; console.log(userName);
  const userNum = signup_phone.value; console.log(userNum);
  const userEmail = signup_email.value; console.log(userEmail);
  const userPwd = signup_pwd.value; console.log(userPwd);
  const confirmPwd = confirmPassword.value; console.log(confirmPwd);

  //==== 유효성 검사 ======  
  // 입력한 값이 없으면 회원가입 실패
  if( userName =='' || userNum =='' || userEmail =='' || userPwd =='' || confirmPwd ==''){
      alert( '비어있는 항목이 있습니다.[회원가입 실패]');
      
     }
  // 비밀전호 일치 여부 체크
  if (userPwd !== confirmPwd) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        
    }
  // 이용약관 동의 여부 체크   

  // 이메일 중복 확인

  // 전화번호 중복 확인


  // (3) 객체화
  let userCode = 1 // 회원번호 초기값
    // ===== localStorage에서 userList 가져오기 =====
    // 1) localStorage에서 userList 가져오기
    let signupList = localStorage.getItem('userList');
    // 2) 존재하지 않으면 (배열) 새로 생성, 존재하면 타입변환
    if ( userList == null ){
        userList = [ ];
    }else{ 
        userList = JSON.parse( userList );
        userCode = userList[ userList.length -1 ].userCode + 1;
    }
    const obj = { userCode : userCode , userName : userName , userNum : userNum , 
      userEmail : userEmail , userPwd : userPwd , confirmPwd : confirmPassword }; console.log( obj );

    

  // (4) 배열저장
  userList.push(obj) ; console.log( userList );
  
  // 변경된 userList를 localStorage에 다시 저장
  let jsonData = JSON.stringify( userList);
  localStorage.setItem( 'userList' , jsonData );

  userNameInput.value ='';
  userNumInput.value = '';
  userEmailInput.value = '';
  userPwdInput.value = '';
  confirmPwdInput.value = '';
  alert ('회원 가입 성공') ;





