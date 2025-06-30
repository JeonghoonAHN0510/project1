/*//================================localStorage에서 userList 가져오기================================
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
function setpList(rList){
    localStorage.setItem('rList', rList );
}
    */
let pList = [
    {pcode : 1, pname : 'A룸', pmax : 2, pprice : 150000},
    {pcode : 2, pname : 'B룸', pmax : 2, pprice : 200000},
    {pcode : 3, pname : 'C룸', pmax : 4, pprice : 250000},
    {pcode : 4, pname : 'D룸', pmax : 4, pprice : 300000},
    {pcode : 5, pname : 'E룸', pmax : 6, pprice : 400000}
]