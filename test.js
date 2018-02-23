var main = function ()
{
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
        
        currentSlide.fadeOut(600).removeClass('slide1');
        nextSlide.fadeIn(600).addClass('slide1');
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
        
        currentSlide.fadeOut(600).removeClass('slide1');
        prevSlide.fadeIn(600).addClass('slide1');
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
};

$(document).ready(main);