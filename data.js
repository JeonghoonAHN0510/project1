//================================localStorage에서 userList 가져오기================================
function getuserList(){
    let userList = localStorage.getItem('userList');
    if( userList == null ){
        userList =[];
    }else {
        userList = JSON.parse( userList );
    }
    return userList;
}
//================================localStorage에 userList 저장하기================================
function setuserList(userList){
    localStorage.setItem('userList', JSON.stringify(userList));
}
//================================localStorage에서 rList 가져오기================================
function getrList(){
    let rList = localStorage.getItem('rList');
    if( rList == null ){
        rList = [];
    }else {
        rList = JSON.parse( rList );
    }
    return rList;
}
//================================localStorage에 rList 저장하기================================
function setrList(rList){
    localStorage.setItem('rList', JSON.stringify(rList) );
}
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




setuserList(userList);
setrList(rList);