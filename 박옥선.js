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

// ===== localStorage 관리하는 함수 ======
function setuserList(userList) {
    localStorage.setItem('userList', JSON.stringify(userList));
    console.log(userList);
}

setuserList(userList);

