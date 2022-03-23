function copyWritingAnimation() {
    // @ts-ignore
    $('.copywriting').velocity('transition.slideLeftBigIn',{
        duration: 3000,
        delay: 1000,
        stagger: 300,
        opacity:0
    });
}

// @ts-ignore
$(document).ready(function () {
    copyWritingAnimation();
});



