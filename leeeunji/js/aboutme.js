
function introToday(date) {
    const yyyy = date.getFullYear();
    const MM = date.getMonth() + 1;
    const dd = date.getDate();
    const str = `${yyyy}년 ${MM}월 ${dd}일`;
    aboutMeToday.innerText = str;
};

const addBtnEventListener = () => {
    const target = document.querySelector("#toCnCBtn");

    target.addEventListener("click", function(){
        const location = document.querySelector("section.channel h1").offsetTop;
        window.scrollTo({top: location, behavior: "smooth"});
    });
};

const addOpenTabListener = () => {
    const targets = document.querySelectorAll("section.channel a");
    
    targets.forEach((target, index) => {
        console.log(target.id);
        target.addEventListener("click", function(){
            if(target.id == "gitHubA")
                open("https://github.com/venandi48");
            else if(target.id == "notionA")
                open("https://www.notion.so/HOME-d6761e94491d413399eef26a15ef8e08");
        });
    });
};

window.onload = () => {
    introToday(new Date());
    
    addBtnEventListener();
    addOpenTabListener();
}