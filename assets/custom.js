jQuery(document).ready(function ($) {
    // var selectedoption = $('h1.title.grid__item.one-whole').text().split(' ')[0].toLowerCase();
    console.log("HELLO");
    var current_url = window.location.href;
    var sort2_selected = localStorage.getItem("sort2_selected");
    $('#SortBy2 option').each((i,el)=>{
       

        if($(el).val() == sort2_selected){
            $(el).attr("selected",true);
        }

    })
    if( current_url.includes('help-center') ) {
        $('.s4com-articles > a').attr("href","#!");
    }
});