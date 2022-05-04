//***** 회원조회 페이지 *****//
  
const renderTable = (memberAll = JSON.parse(localStorage.getItem("memberAll"))) => {
  memberAll.forEach((member, index) => {
    const {id, pw, name, gender, tel, email, addr, birthday, mailing} = member;
    
    // 비밀번호, 이름, 전화번호, 주소 일부 암호화하여 출력
    const safePw = pw.substring(0, pw.length-4) + "****";
    const safeName = name.replace(name.charAt(1), "*");
    const safeTel = tel.split("-").reduce((merge, part, index) => {
      if(index!=1){
        return merge + part
      }
      else return merge + "-" + part.replace(/[0-9]/g, "*") + "-";
    }, "")
    const safeAddrFunc = (addr) => {
      const result = addr.split(" ").reduce((merge, part, index) => {
        if(index < 3) {
          return merge + " " + part;
        } else return merge;
      }, "");
      return result + " ...";
    };
    const addrVal = addr!=undefined ? safeAddrFunc(addr) : "";
    const genderKr = gender=="female" ? "여" : "남";
    const mailingKr = mailing==true ? "O" : "X";

    const $tr = $(`<tr><td>${index+1}</td><td>${id}</td><td>${safePw}</td><td>${safeName}</td><td>${genderKr}</td><td>${safeTel}</td><td>${email}</td><td>${addrVal}</td><td>${birthday}</td><td>${mailingKr}</td></tr>`);
    $("#memberTable tbody").append($tr);
  });
};

$(document).ready(() => {
  addTempData();

  renderTable();
  }
);