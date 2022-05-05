
class Review {
    constructor(posting_no, review_id, review_date, location, restaurant_name, review_score, restaurant_photo, restaurant_comment){
        this.posting_no = posting_no;
        this.review_id = review_id;
        this.review_date =review_date;
        this.location = location;
        this.restaurant_name = restaurant_name;
        this.review_score = review_score;
        this.restaurant_photo = restaurant_photo; // 사진경로 저장
        this.restaurant_comment = restaurant_comment;
    }
}



//임의 데이터 추가 + 포스팅번호 내림차순 정렬
const addTempData = () => {
    if(!localStorage.getItem("reviewPostingAll")){
        reviewPostingAll.push(new Review(postingNo++, "20220420_001", new Date("2021/12/25"), "인천광역시 미추홀구 관교동", "테리토리", 4.3, "./images/foodtrip/foodtrip_20220420_001.jpg",
    `메뉴 플레이팅을 예쁘게 해준다. 보통 플레이팅 예쁜 인스타감성 브런치집은 맛없는 경우가 종종 있는데, 여기는 맛도 괜찮고 좋다. 시즌별로 메뉴가 바뀌니 시즌메뉴가 마음에 든다면 없어지기전에 먹어봐야한다.
    주차공간은 따로 없다. 근처 골목에 적당한 주차공간 찾기가 어려울 수 있으니 걸어가는게 좋다.
    그리고 보통 식당이나 카페는 후불제인데, 이곳은 선불제로 운영한다.`));
        reviewPostingAll.push(new Review(postingNo++, "20220420_002", new Date("2022/02/26"), "인천광역시 중구", "을왕리짱구네", 4.5, "./images/foodtrip/foodtrip_20220420_002.jpg",
    `매콤한 연포탕이라고 생각하면된다. 메뉴는 '빨간거', '하얀거' 이렇게 파는데 빨간게 맛있다.
    직원분들이 알아서 조리해주고 낙지도 잘라주셔서 먹어도 된다고 할 때 까지 국자에 손 댈 필요도 없어 편하다.
    그리고 사리로 고기를 추가하면 두배로 맛있다. 지금까지 세 번 방문했는데 또 가고싶다.`));
        reviewPostingAll.push(new Review(postingNo++, "20220501_001", new Date("2022/04/30"), "인천광역시 중구", "꾸덕집", 4.7, "./images/foodtrip/foodtrip_20220501_001.jpg",
    `생선구이가 정말 맛있다. 모둠으로 시키면 가자미, 고등어, 임연수 구이와 장어튀김이 나온다. 밥은 밥솥째 나와서 처음엔 당황스러울 수 있다. 같이 나오는 된장찌개에는 일반두부 대신에 순두부가 숭덩숭덩 들어가있다.
    제주금게장도 살 많은 게장이라 진짜 밥도둑이다. 웨이팅 있을 수 있으니 기다리기 싫다면 조금 일찍가거나 늦게 가야한다. 화장실도 의외로 깔끔하다.`));
        reviewPostingAll.push(new Review(postingNo++, "20220501_002", new Date("2022/02/06"), "경기도 시흥시", "릴리프커피", 3.8, "./images/foodtrip/foodtrip_20220501_002.jpg",
    `인테리어가 우드톤이기도하고, 돌을 활용해서 따뜻하고 고즈넉한 느낌을 준다. 주차공간이 마련되어있어서 차끌고 가기에도 괜찮다. 소품류와 원두도 판매하고있어서 커피나오는동안 잠시 둘러보기 좋다.
    주말에는 사람이 많아서 생각만큼 조용한 분위기가 나지 않을 수 있다.
    흑임자케이크가 괜찮았다.`));
        reviewPostingAll.push(new Review(postingNo++, "20220501_003", new Date("2021/12/23"), "서울특별시 강남구 청담동", "옳음", 4.5, "./images/foodtrip/foodtrip_20220501_003.jpg",
    `청담동에 있는 모던 한식 파인다이닝이고, 미쉐린 가이드에도 소개되었다.
    방문일에는 룸 예약자가 없어서, 가장 먼저 예약했다고 룸으로 안내해주셨다.
    개인적으로 트러플파스타는... 트러플 좋아하는 사람들은 좋았겠지만, 나는 트러플 싫어해서 별로였다.
    그래도 코스가 전반적으로 맛있는데, 특히 금태요리가 충격적으로 부드럽고 맛있다.
    모던 한식 파인다이닝이라 한식 재료와 서양식 재료를 같이 사용한 코스가 많은데, 굉장히 신선하다.
    가격은.. 비싸긴해도 뭐 맛있으니까 특별한 날에 한번쯤 갈만하다고 생각한다.`));
        reviewPostingAll.push(new Review(postingNo++, "20220501_004", new Date("2021/10/17"), "서울특별시 영등포구 문래동", "머트리얼", 3.7, "./images/foodtrip/foodtrip_20220501_004.jpg",
    `지하에 있어서 채광은 없고, 왠지 환기가 안되지않을까 하는 걱정이 들었다. 그래도 화장실 깨끗한걸 보면 환기도 알아서 잘 하지않을까?
    오후에 갔더니 바스크치즈케이크는 품절이라 못먹었다. 다른 디저트는 특별하게 맛있는건 아니여도 괜찮았다.`));
        reviewPostingAll.push(new Review(postingNo++, "20220503_001", new Date("2021/05/21"), "서울특별시 마포구 도화동", "뫼촌", 4.0, "./images/foodtrip/foodtrip_20220501_005.jpg",
    `최자로드맛집이라는데... 최자로드는 잘 모르지만, 맛있긴하다.
    웨이팅도 있다. 저녁타임에는 술도 같이 시켜먹는 테이블이 많다보니 웨이팅이 잘 안빠진다.
    일반 닭볶음탕이랑 달리 국물이 없어서 밥 비벼서 먹진 못하니까 살짝 아쉽다.
    그리고 은은하게 불닭볶음면 정도의 맵기가 올라와서 맵찔이는 땀이 날 수 있다.
    감자전은 같이 시켜먹으면 덜 매운 것 같기도하고, 일단 감자전은 맛있으니까 시켜먹는게 좋다.`));
    
        reviewSort();
        localStorage.setItem("reviewPostingAll", JSON.stringify(reviewPostingAll));
    }
};
const reviewSort = () => {
    reviewPostingAll.sort((a, b) => {
        return b.posting_no - a.posting_no
    })
}

// 포스팅하기 버튼 클릭이벤트
const addWritingListener = () => {
    const target = document.querySelector("#creatPostingBtn");

    target.addEventListener("click", () => {
        const backgroundPlate = document.getElementById("backgroundPlate");
        const writingPlate = document.getElementById("writingPlate");
        
        backgroundPlate.classList.add("reviewSection");
        backgroundPlate.classList.remove("visibilityHidden");

        writingPlate.classList.add("writing-wrapper-back");
        writingPlate.classList.remove("visibilityHidden");
    });
};

// 제출시 검사 -> 결과에 따라 다시 렌더 or 알림창 띄우기
const postingValSubmit = () => {
    
    document.postingFrm.onsubmit = (e) => {
        let result = true;

        // 위치
        // 입력가능문자 검사 -> 행정구역 검사 
        const locationVal = addRst_location2.value;
        if(!/^[가-힣]+\s?[가-힣0-9\-]*$/g.test(locationVal)){
            printFailedMsg("writingLocationRow", "한글, 띄어쓰기 한 개만 사용하세요.");
            result = false;
        } else {
            const dividedLocation = locationVal.split(" ");
            if(!/^.+[시군구]$/.test(dividedLocation[0])){
                printFailedMsg("writingLocationRow", "시/군/구가 없습니다.");
                result = false;
            }
            if(dividedLocation[1] && !/^.+([동읍리]|[길로]([0-9]*|[0-9]+-[0-9]+))$/.test(dividedLocation[1])) {
                printFailedMsg("writingLocationRow", "적절한 동/읍/리/길/로가 아닙니다.");
                result = false;
            } else resetMsg("writingLocationRow");
        }

        // 방문일
        const dateVal = addRst_visitingDate.value;
        const inputDate = new Date(dateVal.substring(0,4), parseInt(dateVal.substring(5,7))-1, dateVal.substring(8,10));
        const date = new Date();
        if(dateVal == "") {
            printFailedMsg("writingVisitingDateRow", "방문일을 입력하세요.");
            result = false;
        }
        else if(inputDate > date){
            printFailedMsg("writingVisitingDateRow", "방문일은 과거로 입력하세요.");
            result = false;
        } else resetMsg("writingVisitingDateRow");
        
        // 평점
        if(!/^([0-5]|[0-4].[0-9]|5.0)$/.test(addRst_score.value)){
            printFailedMsg("writingScoreRow", "0~5 사이의 소수점 한자리 이내로 입력하세요.");
            result = false;
        } else resetMsg("writingScoreRow");


        if(document.querySelector("#addRst_photo").files.length == 0){
            printFailedMsg("writingFileRow", "사진을 첨부하세요.");
            result = false;
        } else resetMsg("writingFileRow");

        if(result == false) {
            alert("후기등록에 실패하였습니다.");
            return result;
        }
        return true;
    };
};

const printFailedMsg = (targetClass, msg) => {
    document.querySelector(`.${targetClass} span.testFailedMsg`).innerHTML = msg;
};
const resetMsg = (targetClass) => {
    document.querySelector(`.${targetClass} span.testFailedMsg`).innerHTML = "";
};

const reviewPostingAll = JSON.parse(localStorage.getItem("reviewPostingAll")) || [];
let postingNo = JSON.parse(localStorage.getItem("reviewPostingAll")) ? JSON.parse(localStorage.getItem("reviewPostingAll"))[0].posting_no + 1 : 1;

// 포스팅 작성 완료시 웹스토리지에 데이터 저장 및 재렌더
const savePostingData = () => {
    console.log("savePostingData");

    const postingNoVal = postingNo++;

    // 리뷰 id부여 (format : YYYYMMDD_xxx)
    const today = getYYYYMMDD(new Date());
    const {review_id: recent_id} = reviewPostingAll[0]; // 가장 최근 작성 리뷰id
    let reviewIdVal = "";
    // 같은 날 작성된 포스팅이 있는 경우
    if(recent_id.substring(0, 8) == today) {
        const todayLastNo = parseInt(recent_id.substring(9,));
        reviewIdVal = `${today}_${threeDigitNum(todayLastNo+1)}`
    } 
    // 같은 날 작성된 포스팅이 없는 경우
    else {
        reviewIdVal = `${today}_${threeDigitNum(1)}`
    }

    // 주소 병합
    const locationVal = `${addRst_location1.value} ${addRst_location2.value}`;

    // 이미지
    const file = addRst_photo.files[0];
    const reader = new FileReader();
    let filesrc = "";
    let review;
    reader.readAsDataURL(file);

    //이미지 로드 끝나면 객체 추가
    reader.onload = () => {
        filesrc = reader.result;
        console.log("image src 로드완료!");
        review = new Review(postingNoVal, reviewIdVal, new Date(addRst_visitingDate.value), locationVal, addRst_name.value, addRst_score.value, filesrc, addRst_comment.value);
        reviewPostingAll.unshift(review);

        localStorage.setItem("reviewPostingAll", JSON.stringify(reviewPostingAll));
        rerenderAfterSubmit();
    }
};
function threeDigitNum(num) {
    if(num < 10) return "00"+num
    else if(num < 100) return "0"+num;
    else return num;
};
const rerenderAfterSubmit = () => {
    document.postingFrm.reset();
    postingBoardRender(reviewPostingAll);
    addOpenReviewListener();
    addcloseReviewListener();

    closeWriting();
}

const addCloseWritingListener = () => {
    const target = document.querySelector("#closeWritingBtn");

    target.addEventListener("click", closeWriting);
};
function closeWriting() {
    // 입력내용 초기화
    const inputAll = document.querySelectorAll("#writingTb input");
    inputAll.forEach((input, index) => {
        input.value = "";
    });
    document.querySelector("#writingTb select").value = "서울특별시";
    document.querySelector("#writingTb textarea").value = "";

    const backgroundPlate = document.getElementById("backgroundPlate");
    const writingPlate = document.getElementById("writingPlate");
    
    // hidden으로 변경
    backgroundPlate.classList.add("visibilityHidden");
    backgroundPlate.classList.remove("reviewSection");

    writingPlate.classList.add("visibilityHidden");
    writingPlate.classList.remove("writing-wrapper-back");
}

const addOpenReviewListener = () => {
    const reviews = document.querySelectorAll("#postingBoardDiv li");

    // 각 리뷰 클릭시 리뷰창 열리는 이벤트리스너 추가
    reviews.forEach((review, index) => {
        review.addEventListener("click", openReview);
        review.addEventListener("click", roadReviewDetail);
    });
    console.log(`openReview 이벤트리스너가 추가되었습니다.`);
};

const addcloseReviewListener = () => {
    const closeBtn = document.getElementById("closeReviewBtn");
    
    // 닫기버튼 클릭시 리뷰창 닫히는 이벤트리스너 추가
    closeBtn.addEventListener("click", closeReview);
    console.log(`closeReview 이벤트리스너가 추가되었습니다.`);
};

function openReview() {
    console.log(`${this.id}에서 openReview가 호출되었습니다.`);
    
    // 리뷰창 태그 찾기
    const backgroundPlate = document.getElementById("backgroundPlate");
    const reviewPlate = document.getElementById("reviewPlate");
    
    backgroundPlate.classList.add("reviewSection");
    backgroundPlate.classList.remove("visibilityHidden");
    
    reviewPlate.classList.add("review-wrapper-back");
    reviewPlate.classList.remove("visibilityHidden");
};

function closeReview() {
    console.log(`${this.id}에서 closeReview가 호출되었습니다.`);

    // 리뷰창 태그 찾기
    const backgroundPlate = document.getElementById("backgroundPlate");
    const reviewPlate = document.getElementById("reviewPlate");
    
    backgroundPlate.classList.add("visibilityHidden");
    backgroundPlate.classList.remove("reviewSection");
    
    reviewPlate.classList.add("visibilityHidden");
    reviewPlate.classList.remove("review-wrapper-back");
};

function roadReviewDetail(){
    console.log(`${this.id}의 정보를 불러옵니다!`);

    // 선택한 글에 해당하는 리뷰객체 탐색
    const review = reviewPostingAll.find((review, index) => {
        return this.id == review.review_id;
    });
    reviewDetailRender(review);
}

const postingBoardRender = (reviewPostingAll = JSON.parse(localStorage.getItem("reviewPostingAll"))) => {
    const target = document.querySelector("#postingBoardDiv ul")

    target.innerHTML = reviewPostingAll.reduce((html, review, index) => {
        if(review.restaurant_photo==""){
            return html + `<li class="posting" id="${review.review_id}"><img src="./images/notFound.png" alt=""></img></li>`;    
        }
        else return html + `<li class="posting" id="${review.review_id}"><img src="${review.restaurant_photo}" alt=""></img></li>`;
    }, "");

};

const reviewDetailRender = (review) => {
    const {posting_no, location, restaurant_name, review_score, review_date, restaurant_comment, restaurant_photo} = review;
    document.getElementById("review-posting-no").innerText = posting_no;
    document.getElementById("location").innerText = location;
    
    // 상호명 + 점수 한번에 대입
    document.getElementById("restaurant-name").innerHTML = `${restaurant_name}<strong><span class="review-element" id="review-score">${review_score}</span></strong>`;
    
    const date = getYYYY_MM_DD(new Date(review_date));
    document.getElementById("review-date").innerText = date;
    
    document.getElementById("restaurant-comment").innerText = restaurant_comment;
    
    if(restaurant_photo==""){
        document.getElementById("restaurant-photo").outerHTML = `<img id="restaurant-photo" src="./images/notFound.png" alt="">`;
    }
    else document.getElementById("restaurant-photo").outerHTML = `<img id="restaurant-photo" src="${review.restaurant_photo}" alt="">`;
};
function getYYYY_MM_DD(date) {
    const yyyy = date.getFullYear();
    const mm = twoDigitNum(date.getMonth() + 1);
    const dd = twoDigitNum(date.getDate());
    return `${yyyy}-${mm}-${dd}`;
}
function getYYYYMMDD(date) {
    const yyyy = date.getFullYear();
    const mm = twoDigitNum(date.getMonth() + 1);
    const dd = twoDigitNum(date.getDate());
    return `${yyyy}${mm}${dd}`;
}
function twoDigitNum(num) {
    return num < 10 ? "0"+num : num;
}

const unmuteMusic = () => {
    const target = document.querySelector("#musicStartBtn")
    target.addEventListener("click", () => {
        const bgm = document.querySelector("#bgm");
        const bgmSrc = bgm.src;
        if(bgmSrc.indexOf("&mute=false") >= 0){
            bgm.src = bgmSrc.replace("&mute=false", "&mute=true");
            target.innerText = "start music";
        } else {
            bgm.src = bgmSrc.replace("&mute=true", "&mute=false");
            target.innerText = "stop music";
        }
    });
}


window.onload = () => {
    // 기본 리뷰데이터 추가
    addTempData();
    console.log("페이지 로드 완료");

    postingBoardRender();

    // 각 리뷰에 이벤트리스너 추가
    addOpenReviewListener();
    addcloseReviewListener();

    // 신규포스팅 작성 버튼, 닫기버튼 이벤트리스너 추가
    addWritingListener();
    addCloseWritingListener();

    // bgm 재생버튼
    unmuteMusic();

    postingValSubmit();
}