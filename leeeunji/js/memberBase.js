//***** 회원가입, 로그인, 회원조회 페이지 공통사항 *****//

class Member {
  constructor(id, pw, name, gender, tel, email, addr = undefined, birthday = "", mailing = false){
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.gender = gender;
    this.tel = tel;
    this.email = email;
    this.addr = addr;
    this.birthday = birthday;
    this.mailing = mailing;
  }
}
const memberAll = JSON.parse(localStorage.getItem("memberAll")) || [];


// 아무 데이터도 없을때 임시 가입자 데이터 추가
const addTempData = () => {
  if(!localStorage.getItem("memberAll")){
    memberAll.push(new Member("honggd", "hgd123!@", "홍길동", "male", "010-1111-2222", "g__d@gmail.com", "11111 서울특별시 송파구 이런저런로12길 34", "1989-08-09", false));
    memberAll.push(new Member("sinsa", "sinsssa1504!", "신사임당", "female", "010-9876-5432", "s1nsa@gmail.com", "22222 서울특별시 종로구 가회동", "2004-05-03", true));
    localStorage.setItem("memberAll", JSON.stringify(memberAll));
  }
};
