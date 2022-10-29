$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items :3,
        responsive :{
            0 : {
                items : 2,
                margin: 32,
                loop: true,
                dots: false,
            },
            
            601 : {
                items : 2,
                dots: false,
                loop: true,
                margin: 32,
            },
            1001 : {
                items : 3,
                margin: 48,
                dots: false,
                loop: true,

            },
        }
    });
});

/* Video*/
const videoBtn = document.querySelector('#video-btn'),
videoPicture = document.querySelector('.video_picture'),
videoWrapper = document.querySelector('.video'),
video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function(){

    if (video.paused){
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');
        video.play()
    } else{
        videoBtn.classList.remove('none');
        videoWrapper.classList.add('video-overlay');
        video.pause();
    }
})  


/*Mobile Nav*/

const openNavbtn = document.querySelector('#openMobileNav');
const closeNavbtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

openNavbtn.onclick = function(){
    mobileNav.classList.remove('none');
    document.body.classList.add('no-scroll');
}

closeNavbtn.onclick = function(){
    mobileNav.classList.add('none');
    document.body.classList.remove('no-scroll');
}