//***** 회원조회 페이지 *****//

const addTempData = () => {
  memberAll.push(new Member("honggd", "hgd123!@", "홍길동", "male", "01011112222", "g__d@gmail.com", "서울특별시 송파구 이런저런로12길 34", "1989-08-09"));
  memberAll.push(new Member("sinsa", "sinsssa1504!", "신사임당", "female", "01098765432", "s1nsa@gmail.com", "서울특별시 종로구 가회동", "2004-05-03"));
};

const renderTable = () => {
  
  memberAll.forEach((member, index) => {
    let genderKr;
    if(member.gender=="female"){
      genderKr = "여";
    } else genderKr = "남";

    const $tr = $(`<tr><td>${index+1}</td><td>${member.id}</td><td>${member.pw}</td><td>${member.name}</td><td>${genderKr}</td><td>${member.tel}</td><td>${member.email}</td><td>${member.addr}</td><td>${member.birthday}</td></tr>`);
    $("#memberTable tbody").append($tr);
    
  });
}

$(document).ready(() => {
  addTempData();
  renderTable();
  }
);