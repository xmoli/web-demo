//搜索框效果
const search_bar = document.getElementsByClassName("search")[0];
const search = search_bar.firstElementChild;
const search_btn = search_bar.lastElementChild;
search.onfocus = function(){
    search_btn.className = "search-btn-focus";
}
search.onblur = function(){
    search_btn.className = "search-btn";
}
//轮播图
const adBtn = document.getElementsByClassName("ad-btn")[0];
const banner = document.getElementsByClassName("banner")[0];
const adBtnList = adBtn.children;
const previousAd = document.getElementsByClassName("previous-btn")[0];
const nextAd = document.getElementsByClassName("next-btn")[0];

function jumpLink(link = "#"){
    //跳转
    window.open("./"+link);
}
var adMax = 3;//共有几张
var ad = 1;//当前图
for (let i = 0;i < adMax;i++){
    adBtnList[i].onmouseover = function(){
        banner.className = "banner ad"+(i+1);
        adBtnList[ad-1].className = "";
        ad = i+1;
        adBtnList[i].className = "active";
    }
}
//上一个图
previousAd.onclick = function(){
    adBtnList[ad-1].className ="";
    if (ad <= 1){
        ad = adMax+1;
    }
    ad --;
    banner.className = "banner ad"+ad;
    adBtnList[ad-1].className = "active";
}
//下一个图
nextAd.onclick  = function(){
    adBtnList[ad-1].className = "";
    if (ad >= adMax){
        ad = 0;
    }
    ad ++;
    banner.className = "banner ad"+ad;
    adBtnList[ad-1].className = "active";
}
