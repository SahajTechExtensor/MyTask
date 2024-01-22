// alert("hello");

$(document).ready(function(){


    $(".btn").click(function(){
        var ToList = $('input[name=Task]').val();
        if(ToList){
            $("ul").append("<li>"+ToList+"</li>")
        }
        $('input[name=Task]').val(undefined);

    })


    
    $(document).on('click','li',function(){
        console.log(li)
        $('input[name=Task]').val();
    })


    $(document).on('dblclick','li',function(){
        // $(this).toggleClass('.del').remove();
         $(this).toggleClass('.del').fadeOut('slow');
    })



});