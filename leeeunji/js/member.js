class Member {
  constructor(id, pw, name, gender, tel, email, addr, birthday){
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.gender = gender;
    this.tel = tel;
    this.email = email;
    this.addr = addr;
    this.birthday = birthday;
  }
}
const memberAll = [];

//***** 회원가입 페이지 *****//
const addSubmitHandler = () => {
  // 최종 반환할 유효성검사결과 상태
  let result = true;

  // 유효성검사
  document.joinFrm.onsubmit = (e) => {
            
    // 아이디
    // 4~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능
    if(!/^[a-z0-9_-]{4,20}$/.test(userId.value)) {
      printFailedMsg("userId", "4~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.");
      result = false;
    } else resetMsg("userId");

    // 비밀번호
    // 8~16자 영문 대 소문자, 숫자, 특수문자 사용.
    if(!/^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=_-]).*$/.test(userPw.value)){
      printFailedMsg("userPw","8~16자 영문 대 소문자, 숫자, 특수문자 한가지 이상(!@#$%^&*+=_-)을 혼합하여 사용하세요.");
      result = false;
    } else resetMsg("userPw");

    // 비밀번호 확인
    if(userPw.value!=userPwCheck.value){
      printFailedMsg("userPwCheck","비밀번호가 일치하지 않습니다.");
      result = false;
    } else resetMsg("userPwCheck");
    
    // 이름
    // 2자이상 영문자, 한글 사용
    if(!/^[a-zA-Z가-힣]{2,}$/.test(userName.value)){
      printFailedMsg("userName","2자 이상 영문, 한글로 입력하세요.");
      result = false;
    } else resetMsg("userName");

    // 성별
    const genders = document.querySelectorAll("[name=gender]");
    if(!genders[0].checked && !genders[1].checked){
      printFailedMsg("genders","성별을 선택하세요.");
      result = false;
    } else resetMsg("genders");

    // 전화번호
    if(!/^[0-9]{3,4}$/.test(tel2.value) || !/^[0-9]{4}$/.test(test3.value)){
      printFailedMsg("tel", "10~11자의 숫자를 입력해주세요.");
      result = false;
    } else resetMsg("tel");

    // 이메일
    const regExpEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if(!regExpEmail.test(email.value)){
      printFailedMsg("email", "올바른 형식의 이메일이 아닙니다.");
      result = false;
    } else resetMsg("email");
    
    return result;
  };
};

const printFailedMsg = (targetClass, msg) => {
  document.querySelector(`span.${targetClass}`).innerHTML = msg;
};

const resetMsg = (targetClass) => {
  document.querySelector(`span.${targetClass}`).innerHTML = "";
};

const init = () => {

  addSubmitHandler();
};