jQuery(document).ready(function(){
    jQuery(window).scroll(function(){
        if(this.scrollY > 20){
            jQuery('.navbar').addClass("sticky");
        }else{
            jQuery('.navbar').removeClass("sticky");
        }
    });
    jQuery('.menu-btn').click(function(){
        jQuery('.navbar .menu').toggleClass("active");
        jQuery('.menu-btn i').toggleClass("active");
    });
});

jQuery(document).ready(function(){
    console.log('Pronto')
})