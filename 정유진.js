//================================localStorage에 rList 저장하기================================

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


function setuserList(userList) {
    localStorage.setItem('userList', JSON.stringify(userList));
}

setuserList(userList);

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
    localStorage.setItem('pList', JSON.stringify(pList));
}
setpList(pList);

let rList = [
    // 기존 1~29번은 그대로 유지
    { rcode: 1, userCode: 25, pcode: 2, rRequest: '', inDate: '2025-04-15', outDate: '2025-04-16', people: 2, rCondition: '취소' },
    { rcode: 2, userCode: 30, pcode: 7, rRequest: '', inDate: '2025-04-20', outDate: '2025-04-21', people: 2, rCondition: '퇴실완료' },
    { rcode: 3, userCode: 5, pcode: 11, rRequest: '', inDate: '2025-05-01', outDate: '2025-05-03', people: 3, rCondition: '퇴실완료' },
    { rcode: 4, userCode: 18, pcode: 10, rRequest: '', inDate: '2025-05-05', outDate: '2025-05-07', people: 5, rCondition: '퇴실완료' },
    { rcode: 5, userCode: 13, pcode: 6, rRequest: '조용한 방 요청', inDate: '2025-05-08', outDate: '2025-05-09', people: 2, rCondition: '취소' },
    { rcode: 6, userCode: 22, pcode: 9, rRequest: '', inDate: '2025-05-12', outDate: '2025-05-13', people: 1, rCondition: '취소' },
    { rcode: 7, userCode: 6, pcode: 14, rRequest: '연박 예정', inDate: '2025-05-15', outDate: '2025-05-17', people: 4, rCondition: '퇴실완료' },
    { rcode: 8, userCode: 10, pcode: 5, rRequest: '가족과 함께 갑니다', inDate: '2025-05-20', outDate: '2025-05-22', people: 4, rCondition: '퇴실완료' },
    { rcode: 9, userCode: 7, pcode: 3, rRequest: '늦은 퇴실 요청', inDate: '2025-05-25', outDate: '2025-05-27', people: 2, rCondition: '취소' },
    { rcode: 10, userCode: 28, pcode: 8, rRequest: '', inDate: '2025-06-01', outDate: '2025-06-02', people: 6, rCondition: '퇴실완료' },
    { rcode: 11, userCode: 3, pcode: 1, rRequest: '', inDate: '2025-06-01', outDate: '2025-06-02', people: 2, rCondition: '퇴실완료' },
    { rcode: 12, userCode: 17, pcode: 15, rRequest: '', inDate: '2025-06-01', outDate: '2025-06-03', people: 3, rCondition: '퇴실완료' },
    { rcode: 13, userCode: 18, pcode: 6, rRequest: '', inDate: '2025-06-10', outDate: '2025-06-12', people: 2, rCondition: '퇴실완료' },
    { rcode: 14, userCode: 1, pcode: 4, rRequest: '', inDate: '2025-06-15', outDate: '2025-06-17', people: 2, rCondition: '퇴실완료' },
    { rcode: 15, userCode: 25, pcode: 4, rRequest: '', inDate: '2025-06-28', outDate: '2025-06-30', people: 3, rCondition: '퇴실완료' },
    { rcode: 16, userCode: 15, pcode: 1, rRequest: '늦은 체크인 가능할까요?', inDate: '2025-07-01', outDate: '2025-07-02', people: 2, rCondition: '입실완료' },
    { rcode: 17, userCode: 30, pcode: 10, rRequest: '', inDate: '2025-07-02', outDate: '2025-07-04', people: 6, rCondition: '퇴실완료' },
    { rcode: 18, userCode: 18, pcode: 3, rRequest: '금연 방 부탁드립니다', inDate: '2025-07-03', outDate: '2025-07-05', people: 4, rCondition: '취소' },
    { rcode: 19, userCode: 17, pcode: 12, rRequest: '큰 침대 있으면 좋겠어요', inDate: '2025-07-03', outDate: '2025-07-05', people: 3, rCondition: '입실완료' },
    { rcode: 20, userCode: 5, pcode: 7, rRequest: '와이파이 잘 되는 방', inDate: '2025-07-05', outDate: '2025-07-06', people: 3, rCondition: '예약완료' },
    { rcode: 21, userCode: 22, pcode: 6, rRequest: '조용한 방 선호', inDate: '2025-07-08', outDate: '2025-07-09', people: 2, rCondition: '입실완료' },
    { rcode: 22, userCode: 3, pcode: 2, rRequest: '조용한 방 부탁드립니다', inDate: '2025-07-10', outDate: '2025-07-12', people: 2, rCondition: '예약완료' },
    { rcode: 23, userCode: 13, pcode: 11, rRequest: '깨끗한 방 부탁해요', inDate: '2025-07-10', outDate: '2025-07-11', people: 2, rCondition: '예약완료' },
    { rcode: 24, userCode: 6, pcode: 13, rRequest: '', inDate: '2025-07-12', outDate: '2025-07-13', people: 4, rCondition: '예약완료' },
    { rcode: 25, userCode: 7, pcode: 5, rRequest: '아이와 함께 갑니다', inDate: '2025-07-14', outDate: '2025-07-15', people: 4, rCondition: '예약완료' },
    { rcode: 26, userCode: 9, pcode: 14, rRequest: '주차 가능 여부?', inDate: '2025-07-15', outDate: '2025-07-16', people: 5, rCondition: '예약완료' },
    { rcode: 27, userCode: 1, pcode: 8, rRequest: '', inDate: '2025-07-18', outDate: '2025-07-19', people: 2, rCondition: '예약완료' },
    { rcode: 28, userCode: 10, pcode: 9, rRequest: '뷰 좋은 방', inDate: '2025-07-20', outDate: '2025-07-22', people: 5, rCondition: '예약완료' },
    { rcode: 29, userCode: 28, pcode: 15, rRequest: '', inDate: '2025-07-20', outDate: '2025-07-23', people: 6, rCondition: '예약완료' },

    // 추가된 예약
    { rcode: 30, userCode: 1, pcode: 6, rRequest: '재방문입니다', inDate: '2025-04-05', outDate: '2025-04-07', people: 2, rCondition: '퇴실완료' },
    { rcode: 31, userCode: 1, pcode: 7, rRequest: '', inDate: '2025-05-10', outDate: '2025-05-11', people: 1, rCondition: '취소' },
    { rcode: 32, userCode: 3, pcode: 9, rRequest: '', inDate: '2025-06-15', outDate: '2025-06-16', people: 1, rCondition: '퇴실완료' },
    { rcode: 33, userCode: 5, pcode: 3, rRequest: '', inDate: '2025-06-10', outDate: '2025-06-11', people: 3, rCondition: '입실완료' },
    { rcode: 34, userCode: 6, pcode: 2, rRequest: '이불 추가 요청', inDate: '2025-04-25', outDate: '2025-04-27', people: 2, rCondition: '취소' },
    { rcode: 35, userCode: 7, pcode: 6, rRequest: '', inDate: '2025-06-01', outDate: '2025-06-02', people: 2, rCondition: '입실완료' },
    { rcode: 36, userCode: 9, pcode: 1, rRequest: '', inDate: '2025-04-28', outDate: '2025-04-29', people: 2, rCondition: '취소' },
    { rcode: 37, userCode: 10, pcode: 2, rRequest: '', inDate: '2025-05-18', outDate: '2025-05-20', people: 3, rCondition: '예약완료' },
    { rcode: 38, userCode: 13, pcode: 4, rRequest: '', inDate: '2025-06-25', outDate: '2025-06-27', people: 2, rCondition: '입실완료' },
    { rcode: 39, userCode: 15, pcode: 11, rRequest: '', inDate: '2025-06-10', outDate: '2025-06-11', people: 2, rCondition: '퇴실완료' },
    { rcode: 40, userCode: 17, pcode: 14, rRequest: '', inDate: '2025-04-20', outDate: '2025-04-21', people: 2, rCondition: '예약완료' },
    { rcode: 41, userCode: 18, pcode: 8, rRequest: '', inDate: '2025-06-15', outDate: '2025-06-16', people: 2, rCondition: '예약완료' },
    { rcode: 42, userCode: 22, pcode: 5, rRequest: '', inDate: '2025-07-01', outDate: '2025-07-02', people: 3, rCondition: '예약완료' },
    { rcode: 43, userCode: 25, pcode: 7, rRequest: '', inDate: '2025-06-12', outDate: '2025-06-13', people: 2, rCondition: '취소' },
    { rcode: 44, userCode: 28, pcode: 13, rRequest: '', inDate: '2025-05-20', outDate: '2025-05-21', people: 4, rCondition: '입실완료' },
    { rcode: 45, userCode: 30, pcode: 14, rRequest: '', inDate: '2025-07-05', outDate: '2025-07-06', people: 5, rCondition: '예약완료' }
];

//---------------set get-----------------//

function setrList(rList) {
    localStorage.setItem('rList', JSON.stringify(rList));
}

setrList(rList);

function getrList(rList) {
    rList = localStorage.getItem("rList");
    if (rList == null) {
        return rList = [];
    } else {
        return rList = JSON.parse(rList);
    }
}
function getpList(pList) {
    pList = localStorage.getItem("pList");
    if (pList == null) {
        return pList = [];
    } else {
        return pList = JSON.parse(pList);
    }
}

function getuserList(userList) {
    userList = localStorage.getItem("userList");
    if (userList == null) {
        return userList = [];
    } else {
        return userList = JSON.parse(userList);
    }
}

//---------------------print-----------------------//
m_print();
function m_print() {
    console.log("m_ print exe");
    let m_tbody = document.querySelector(".m_tbody")
    console.log(m_tbody);

    let pList = getpList();
    let rList = getrList();
    let userList = getuserList();

    let html = "";
    for (let i = 0; i <= rList.length - 1; i++) {
        let reservation = rList[i];
        let pname = "";
        for (let j = 0; j <= pList.length - 1; j++) {
            if (pList[j].pcode == reservation.pcode) {
                pname = pList[j].pname;
            }
        }
        for (let h = 0; h <= userList.length - 1; h++) {
            if (userList[h].userCode == reservation.userCode) {
                userName = userList[h].userName
                userNum = userList[h].userNum
            }
        }
        html += `<tr>
                    <td>${reservation.rcode}</td>
                    <td>${userName}</td>
                    <td>${userNum}</td>
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
    setrList(rList);
    console.log(m_tbody);
}

//--------------삭제함수--------------//
function m_removeBtn(rcode) {
    console.log("removeBtn exe")

    let rList = getrList();

    for (let i = 0; i <= rList.length - 1; i++) {
        if (rList[i].rcode == rcode) {
            let answer = prompt("정말로 삭제하시겠습니까?(네/아니오)")
            if (answer == "네") {
                rList.splice(i, 1);
                setrList(rList);
                alert("삭제가 완료되었습니다.");
                m_print();
                return;
            } else {
                alert("삭제가 취소되었습니다.");
                return;
            }
        }
    }
}

//----------------이동-----------------//

function managerLogout(){
    location.href = '관리자.html'
    alert('로그아웃 성공!')
}
//----------------검색-----------------//
function m_searchBtn() {
    console.log("searchBox exe");

    let pList = getpList();
    let rList = getrList();
    let userList = getuserList();
    let m_tbody = document.querySelector(".m_tbody");
    let html = "";

    let sear_name = document.querySelector(".sear_name").value.trim();

    for (let i = 0; i < rList.length; i++) {
        let reservation = rList[i];

        // 유저 찾기
        //화살표 함수 표기법 array.find((element, index, array) => { ... });
        let user = userList.find(u => u.userCode === reservation.userCode);
        if (!user || user.userName !== sear_name) continue;// let user2 = []
        // for( let j = 0 ; j <= userList.length-1 ; j++ ){
        //     let u = userList[ j ]
        //     if( u.usercode == reservation.userCode ){
        //         user2.push( u )
        //     }
        // }

        // 방 찾기
        let product = pList.find(p => p.pcode === reservation.pcode);
        let pname = product ? product.pname : "N/A";



        
        // 결과 누적
        html += `<tr>
                    <td>${reservation.rcode}</td>
                    <td>${user.userName}</td>
                    <td>${user.userNum}</td>
                    <td>${pname}</td>
                    <td>${reservation.inDate}</td>
                    <td>${reservation.outDate}</td>
                    <td>${reservation.rRequest}</td>
                    <td>${reservation.rCondition}</td>
                    <td>
                        <button onclick="m_removeBtn(${reservation.rcode})">삭제</button>
                    </td>
                </tr>`;
    }

    if (html === "") {
        html = `<tr><td colspan="9">검색 결과가 없습니다.</td></tr>`;
    }

    m_tbody.innerHTML = html;
}