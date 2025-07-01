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



setuserList(userList);
setrList(rList);