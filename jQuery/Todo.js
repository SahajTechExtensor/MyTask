// alert("hello");

$(document).ready(function(){
    $(".btn").click(function(){
        var ToList = $('input[name=Task]').val();
        $("ul").append("<li>"+ToList+"</li>")

    })
    $(document).on('dblclick','li',function(){
        $(this).toggleClass('.del').fadeOut('slow');
    })


});