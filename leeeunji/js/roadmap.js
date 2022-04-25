class AnnualPlan {
    constructor(year, plan){
        this.year = year;
        this.plan = plan;
    };
};
class Plan {
    constructor(title, status){
        this.title = title;
        this.status = status;
    };
};

const planList = [];

const addData = () => {

    planList.push(new AnnualPlan(2019, [
        new Plan('관련학과 복수전공', true),
        new Plan('정보처리기사 취득', true)
    ]));

    planList.push(new AnnualPlan(2022, [
        new Plan('국비교육 수료', false),
        new Plan('협업 프로젝트 경험 함양', false),
        new Plan('형상관리 경험 축적(Git)', false),
        new Plan('Java Spring 기반 솔루션 기업 Developer 지원', false),
        new Plan('Java Spring 스킬 강화', false),
        new Plan('Basic Computer Science 복습(네트워크, OS, HW, DB ...)', false)
    ]));
    
    planList.push(new AnnualPlan(2025, [
        new Plan('RDBMS 활용 역량 강화(MySQL)', false),
        new Plan('정보보안 지식 학습', false),
        new Plan('자료구조 및 알고리즘 학습', false),
        new Plan('Java Spring Skill 중급으로 강화', false),
        new Plan('서버운영 경험 축적', false),
        new Plan('클라우드 AWS 스킬 습득'),
        new Plan('SPA기반 개인 프로젝트 수행', false)
    ]));

    planList.push(new AnnualPlan(2027, [
        new Plan('대규모 서비스 운영 기업 이직', false),
        new Plan('DevOps 엔지니어 역량 습득', false),
    ]));

    planList.push(new AnnualPlan(2030, [
        new Plan('시리즈 A~B단계 스타트업 DevOps 엔지니어 지원', false),
        new Plan('저연차 직원 및 타 부서와의 커뮤니케이션 역량 강화', false)
    ]));

    planList.push(new AnnualPlan(2099, [
        new Plan('수익창출이 가능한 사이드프로젝트 혹은 창업', false)
    ]));

    // 년도 오름차순 정렬
    planList.sort(function(a, b) {
        return a.year - b.year;
    });
};

// 로드맵 라인에 년도 렌더
const renderYear = () => {
    const targetClassAll = [];
    document.querySelectorAll(".planYear").forEach((targetTag, index) => {
        targetClassAll.push(targetTag.className.split(" ")[1]);
    });

    const diff = planList.length - targetClassAll.length;
    for(let i = planList.length - 1 ; i >= planList.length - 6 ; i--){
        const targetP = document.querySelector(`.${targetClassAll[i - diff]}`);
        targetP.innerText = planList[i].year;
    }

    // 순서 반전시켜야하는 테이블 행 텍스트 수정
    const reverseYear1 = document.querySelector(".reverseYearTr td:first-of-type p");
    const reverseYear2 = document.querySelector(".reverseYearTr td:last-of-type p");
    [reverseYear1.innerText, reverseYear2.innerText] = [reverseYear2.innerText, reverseYear1.innerText];

};

const addOpenPlanListener = () => {
    // 각 년도 클릭시 해당 plan창 열리는 이벤트리스너 추가
    const planYears = document.querySelectorAll("tbody p");
    
    planYears.forEach((planYear, index) => {
        planYear.addEventListener("click", openYearplan);
        planYear.addEventListener("click", function(){
            const plans = planList.filter((annualPlan, index) => {
                return annualPlan.year == this.innerText;
            });
            roadYearplanDetail(plans);
        });
    });
    
    // 각 년도 아래 삼각혁 클릭시 해당 plan창 열리는 이벤트리스너 추가
    const planTriangles = document.querySelectorAll("tbody img");

    planTriangles.forEach((planTriangle, index) => {
        planTriangle.addEventListener("click", openYearplan);
        planTriangle.addEventListener("click", function(){
            const yearHere = this.previousElementSibling.innerText;
            const plans = planList.filter((annualPlan, index) => {
                return annualPlan.year == yearHere;
            });
            roadYearplanDetail(plans);
        });
    });

    console.log(`openPlan 이벤트리스너가 추가되었습니다.`);
};

function openYearplan() {
    // plan창 태그 찾기
    const backgroundPlate = document.getElementById("planWrapper");
    
    backgroundPlate.classList.add("planWrapper");
    backgroundPlate.classList.remove("planWrapperHidden");
};

const addClosePlanListener = () => {
    const closeBtn = document.getElementById("closeYearPlanBtn");
    
    // 닫기버튼 클릭시 해당 plan창 닫히는 이벤트리스너 추가
    closeBtn.addEventListener("click", closeYearplan);
    console.log(`closePlan 이벤트리스너가 추가되었습니다.`);
};

function closeYearplan() {
    // plan창 태그 찾기
    const backgroundPlate = document.getElementById("planWrapper");
    
    backgroundPlate.classList.add("planWrapperHidden");
    backgroundPlate.classList.remove("planWrapper");
};

// 로드맵 선택한 년도의 플랜 렌더
function roadYearplanDetail(plans) {
    // 타이틀 년도
    document.querySelector("#planYear th").innerText = plans[0].year;
    const target = document.querySelector("#planUl");

    // 해당 년도 계획
    target.innerHTML = plans[0].plan.reduce((html, eachplan, index) => {
        // 달성한 계획은 녹색, 진행중인 계획은 적색
        if(eachplan.status)
            return html + `<li style="color:#080">${eachplan.title}</li>`;
        else
            return html + `<li style="color:#900">${eachplan.title}</li>`;
    }, "");
};

const init= () => {
    // 로드맵 데이터 추가
    addData();
    renderYear();
    
    // 이벤트 리스너 추가 (클릭시 플랜창 열림/닫힘)
    addOpenPlanListener();
    addClosePlanListener();

};