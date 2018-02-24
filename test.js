var main = function ()
{
 		var on = false;
		$(document).on('click', '.icon-menu', function(){      
    	if (!on) 
			{ 
				$('.menu').animate({ 
					left: "0px"}, 200);
				on = true;
			}
			
			else 
			{ 
				$('.menu').animate({ 
					left: "-285px"}, 200);
				on = false;
			}
		});
		
		$('.home').click(function(){
			$('.container').hide();
		});
		
		$('.cv').click(function(){
			$('.container').show();
			$('#cv').show();
			$('#foto').hide();
		});
		
		$('.foto').click(function(){
			$('.container').show();
			$('#foto').show();
			$('#cv').hide();
		});
    
    $(function stay() {
    	$('.menu li a').click(function stay() {            
        $('.menu li a').removeClass('selected');
        $(this).addClass('selected');                        
    	});
		});
		
    $('.arrow-next').click(function()
    {
		 		var currentSlide = $('.slide1');
        var nextSlide = currentSlide.next();
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
        if (nextSlide.length === 0)
        {
				 	  nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        
        currentSlide.fadeOut(600, function(){
				nextSlide.fadeIn(600).addClass('slide1');
				}).removeClass('slide1');
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
    
    $('.arrow-prev').click(function()
    {
        var currentSlide = $('.slide1');
        var prevSlide = currentSlide.prev();
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        
        if (prevSlide.length === 0)
        {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }
        
        currentSlide.fadeOut(600, function(){
				prevSlide.fadeIn(600).addClass('slide1');
				}).removeClass('slide1');
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
		
};

$(document).ready(main);