$(document).ready(function()
{
    var fig;
    var figcaption;
    
    $("button").click(function()
    {
        fig = $(this).attr("href");
        figcaption = $(this).attr("id");
        
        $("#my_image").attr("src", fig);
        $("#my_caption").text(figcaption);
    });
});