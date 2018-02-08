
// Load YouTube IFrame API.
/*
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
*/

$ = jQuery;
$(document).ready(function(e) {
    e.getScript("https://www.youtube.com/iframe_api");

    if (('.node-type-videos').length)
    {
        $('.field-name-field-lien-video').find('a').click(function(){
            $("html, body").animate({
                scrollTop: $('.field-name-field-youtube').find('iframe').offset().top
            }, 700);
        });

        $('.field-name-field-description-sequence').find('p').click(function(){
            $("html, body").animate({
                scrollTop: $('.field-name-field-youtube').find('iframe').offset().top
            }, 700);
        });
    }

});
// Add an event listener to the existing iframe#youtube_video
var player;
function onYouTubeIframeAPIReady() {
    //console.log('YouTubeIframeAPIReady');
    
    if ($('.node-type-videos').length)
    {

    var playerID = document.getElementById("youtube-field-player");
    //console.log(playerID);
    player = new YT.Player(playerID, {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    }

}
var ready = false;
function onPlayerReady(event) {
    ready = true;
    if ($('.node-type-videos').length)
    {

        $('.lien-sequence').each(function(){

            var lienSequence = $(this).attr('href');

            $(this).closest('.paragraphs-item-sequence').find('.group-left .field-item p').wrapInner(function() {
                return '<a class="generated-link" href=' + lienSequence + '></a>';
            });

        });
        
    }
    //console.log('youtube-field-player Ready');
    var links = document.querySelectorAll(".lien-sequence, .generated-link");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', jumpTo, false);
    }

    function jumpTo(e) {
        e.preventDefault();
       //console.log(e.target.href);
        var link_split = e.target.href.split("=");
        link_split = link_split[1];
        //console.log(link_split);
        var time = 0;

        if(link_split.includes('h')) {
            link_split = link_split.split('h');
            var hours = (parseInt(link_split.shift())*3600);
            link_split = link_split[0];
            time += hours;
        }
        if(link_split.includes('m')) {
            link_split = link_split.split('m');
            var mins = (parseInt(link_split.shift())*60);
            link_split = link_split[0];
            time += mins;
        }
        if(link_split.includes('s')) {
            link_split = link_split.split('s');
            var seconds = (parseInt(link_split.shift()));
            //link_split = link_split[0];
            time += seconds;
        }
        player.seekTo(time, true);

    }



}
// Process player events.
function onPlayerStateChange(event) {
    switch (event.data) {
        case YT.PlayerState.PLAYING:
            // Do something here.
            //console.log('Hello');
            break;
        case YT.PlayerState.ENDED:
            // Do something here.
            break;
    }



}

