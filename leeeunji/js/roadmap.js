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
};

// 로드맵 라인에 년도 렌더
const renderYear = () => {
    const targets = document.querySelectorAll(".planYear");

    targets.forEach((target, indect) => {
        const tmp = target.className;
        console.log(typeof tmp, tmp);
    });
};
 
// 로드맵 선택한 년도의 플랜 렌더
const renderPlan = () => {
};

const init= () => {
    // 로드맵 데이터 추가
    addData();
    console.log(planList);
    renderYear();
    
    // 이벤트 리스너 추가 (클릭시 플랜창 열림/닫힘) -> 닫힘버튼 추가해야됨..

    // 로드맵 라인에 년도 렌더

};