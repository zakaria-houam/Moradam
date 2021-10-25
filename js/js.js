var scrollright = document.querySelector(".bxs-chevron-right-circle")
var scrollleft = document.querySelector(".bxs-chevron-left-circle")
var urunlist1 = document.querySelector(".urun-nav .item1")
var urunlist2 = document.querySelector(".urun-nav .item2")
var urunlist3 = document.querySelector(".urun-nav .item3")
var urunlist4 = document.querySelector(".urun-nav .item4")
function hover1(){
    urunlist1.classList.add('hover')
    urunlist2.classList.remove('hover')
    urunlist3.classList.remove('hover')
    urunlist4.classList.remove('hover')
}
function hover2(){
    urunlist2.classList.add('hover')
    urunlist1.classList.remove('hover')
    urunlist3.classList.remove('hover')
    urunlist4.classList.remove('hover')
}
function hover3(){
    urunlist3.classList.add('hover')
    urunlist1.classList.remove('hover')
    urunlist2.classList.remove('hover')
    urunlist4.classList.remove('hover')
}
function hover4(){
    urunlist4.classList.add('hover')
    urunlist1.classList.remove('hover')
    urunlist3.classList.remove('hover')
    urunlist2.classList.remove('hover')
}
urunlist2.addEventListener('click',hover2)
urunlist1.addEventListener('click',hover1)
urunlist3.addEventListener('click',hover3)
urunlist4.addEventListener('click',hover4)
var listes = [
     urunlist1 = document.querySelector(".urun-nav .item1"),
 urunlist2 = document.querySelector(".urun-nav .item2"),
 urunlist3 = document.querySelector(".urun-nav .item3"),
 urunlist4 = document.querySelector(".urun-nav .item4")
]
var i = 0;
function hover(){
    if(i< listes.length){
    listes[i].classList.add('hover')
    if(i > 0){
        listes[i-1].classList.remove('hover')
    }
    i++;
    
}
else {
    i=0
    listes[3].classList.remove('hover')
}
}
i=3;
function hoverinverse(){
    if(i >= 0){
        listes[i].classList.add('hover')
        if(i<3) {
            listes[i+1].classList.remove('hover')
        }
        i--;
        
    }
    else {
        i=3
        listes[0].classList.remove('hover')
    }
}
scrollright.addEventListener('click',function(){
    hover();
})

scrollleft.addEventListener('click',function(){
    hoverinverse()
})



