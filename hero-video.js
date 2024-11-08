// Load YouTube IFrame API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: 'joiyb6c_Ry4', // Replace with your YouTube video ID
        playerVars: {
            autoplay: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            autohide: 1,
            modestbranding: 1,
            mute: 1,
            playlist: 'joiyb6c_Ry4', // Required for looping
            playsinline: 1,
            rel: 0
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    // If video ends, restart it
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}

// Handle video resize on window resize
window.addEventListener('resize', function() {
    const player = document.getElementById('player');
    if (player) {
        const width = Math.max(window.innerWidth * 1.2, window.innerHeight * 1.2 * (16/9));
        const height = width * 9/16;
        player.style.width = width + 'px';
        player.style.height = height + 'px';
    }
});

// Trigger initial resize
window.dispatchEvent(new Event('resize'));

// Smooth scroll for navigation links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});