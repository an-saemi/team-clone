
$.ajax({
    url: "./api/law_QnA1.json",
    success: function (data) {
        let containA = data.item;
        let cate = [];

        $.each(data.item.middleCategory.cdata,function(i,v){
            if(v == '상속'){
                cate.push( $(this).parent().parent());
            }
            console.log(cate);
        })
        //let sangsok = cate.filter(function(e) {return e.value == '상속'});

        //console.log(sangsok);
    }

})


