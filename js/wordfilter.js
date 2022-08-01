$.ajax({
    url: './api/worddictionary.json',
    success: function findWord(word) {
        let allW = [];
        let filW = [];
        let inputT;

        $.each(word.data, function (idx, value) {
            allW.push(`${value.용어명}`);
        })
        console.log(allW);


        function find(param) {
            allW.forEach(function (v, i) {
                if (v.match(param)) {
                    setTimeout(function () {
                        if (filW.length < 3) {
                            filW.push(v);
                        }
                    }, 1000);
                }
                // else if(v.match(param) == null){
                //     $(`.relative .three li:nth-of-type(${allW.indexOf(v)})`).text(`#값이_없습니다`);
                // }
            })
            //filW에 push따로




            // $('.relative .three li:nth-of-type(2)').text(`#${filW[1]}`);
            // $('.relative .three li:nth-of-type(3)').text(`#${filW[2]}`);
        };


        $('.search p button').on('click', function () {
            filW = [];
            inputT = $('#search').val();
            find(inputT);
            console.log(filW);
            //출력따로
            filW.forEach(function (v, i) {
                $(`.relative .three`).html(`<li>#${v}</li>`);
            })
        })
    }
})
