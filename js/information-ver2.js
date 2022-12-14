
$.ajax({
    url: './api/information.xml',

    success: function (infoData) {

        selectFun();


        function strFun(str, len) {

            let realStr = '';

            if (str.length > len) {
                realStr = str.substring(0, len) + '...';
            } else {
                realStr = str;
            }
            return realStr;
        }//strFun end



        let tag = '', title, smallword, info;

        //시작
        $('.object > ul > li').on('click', function () {
            exe($(this));
        });//클릭하면 내용 바뀌기로 한 함수

        $('.object > ul > li').each(function(){
            if($(this).text() == localStorage.name+'법' || $(this).text() == localStorage.name + '보장법'){
                exe($(this));
            }
        });      
        

        function exe(_this){
            // console.log(_this)
            _this.addClass('active');


            let liThis = _this.text();
            let titThis;

            $(infoData).find('items').each(function (i) {
                titThis = $(this).find('title').text()
                if (liThis == titThis) {
                    printFun($(this));
                }

            });
        }//메인에서 넘어오는 스크립트


        //끝


        $('.explain .btn').on('click', function () {
            printFun();
            $('.contains .string').text(txt);
        });

        function printFun(data) {
            title = data.find('title').html()
            smallword = data.find('smallword').html()
            info = data.find('info').html()


            tag = `<article class="word">
                <h3 class="h3">${title}</h3>
                <p class="split">${smallword}</p>
                <P class="string"> ${info}</P>
            </article>`;

            $('.explain >div').html(tag);

            let txt = $('.contains .string').text().trim();
            $('.contains .string').text(strFun(txt, 500));


        } printFun($(infoData).find('items').eq(0))
        // printFun end



    }//ajax-success.end
});

//tab select 스크립트
function selectFun() {

    const elBtns = document.querySelectorAll('.contain p');
    const elTabs = document.querySelectorAll('.object > ul');
    const elList = document.querySelectorAll('.object > ul > li');
    const elEx = document.querySelectorAll('.contains .word');

    let idx = 0, val = 0;

    elBtns.forEach(function (el, key) {
        el.addEventListener('click', function () {

            elBtns[idx].classList.remove('active');
            elBtns[key].classList.add('active');

            elTabs[idx].classList.remove('active');
            elTabs[key].classList.add('active');

            idx = key;

        });
    });

    elList.forEach(function (v, k) {

        v.addEventListener('click', function () {

            elList[val].classList.remove('active');
            elList[k].classList.add('active');

            val = k;

        });

    });



}; //selectFun end


const top = document.querySelector('main > .topbtn');
let scrollTop = document.scrollY;
top.addEventListener('click',function(){
    scrollTop = 0;
})