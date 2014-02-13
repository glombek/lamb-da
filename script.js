var colours = [ "#FF0000","#0000FF","#00FF00","#FFFFFF","#000000" ];

$(function() {
    
    $("svg").each(function() {
        for (var i = 0; i<10; i++) {
            $(this).clone().insertAfter(this).find("path").attr("style", "fill:"+colours[i]);
        }
    });
});