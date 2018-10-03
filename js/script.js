$(document).ready(function(){

    //Hide email adress on load of page
    $('.toggleFilterEmail').toggle('hide');

    //Function to filter between email adress and mobile number
    $('#myselectFilter').click(function(){
        var value = $( "#myselectFilter option:selected" ).val();

        if (value === '2') {
            $('.toggleFilterNumber').hide() && $('.toggleFilterEmail').show();
        } else {
            $('.toggleFilterEmail').hide() && $('.toggleFilterNumber').show();
        }  
    }); 

});