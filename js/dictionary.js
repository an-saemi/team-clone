
$.ajax({
    url: './api/worddictionary.json',
    success: function (word) {
        console.log('loading_fin');
        //그냥 스크립트
        let list = [];
        let open = '';
        let result = '';
        let count = 0;
        //검색
        let allW = [];
        let filW = [];
        let inputT;

        $.each(word.data, function (key, value) {

            //allW.push(`${value.용어명}`);

            if (key % 5 == 0 && key) {
                list.push(result);
                result = '';
            }
            result += `<li>
                        <div class="word">
                            <p>${value.용어명}</p>
                            <div class="du"> 
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="ex">
                            <p>${value.설명}</p>
                        </div>
                    </li>`;
        })
        $('.wl > ul').html(list[0]);

        $('li > .word').on('click', function () {
            $('li > .ex').removeClass('plus');
            $(this).next().addClass('plus');
            $('.word').find('span:eq(1)').removeClass('on');
            $(this).find('span:eq(1)').addClass('on');
        })

        $('.wl > .more').on('click', function () {
            count++;
            $('.wl > ul').append(list[count]);

            $('li > .word').on('click', function () {
                $('li > .ex').removeClass('plus');
                $(this).next().addClass('plus');
                $('.word').find('span:eq(1)').removeClass('on');
                $(this).find('span:eq(1)').addClass('on');
            })
        })

        // console.log(allW);

        // $('.search img').on('click', function () {
        //     $('.wl ul').html('');
        //     inputT = $('#search').val();

        //     allW.forEach(function(v){
        //         if(v.match(inputT)){
        //             setTimeout(function(){
        //                 filW.push(`<li>${v}</li>`);
        //                 $('.wl ul').html(filW);
        //             },1000)
        //         }
        //     })
        // })
    }
})



