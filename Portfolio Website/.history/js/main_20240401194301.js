

$(document).ready(function(){
    let $btns = $('.project-area .button-group buttons');

    $btns.click(function(e){
        $('.project-area .button-group buttons').removeClass('active');
        e.target.classList.add('active')
    })
    
});