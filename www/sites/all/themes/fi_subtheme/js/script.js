
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


        $('.field-name-field-lien-video').find('a').each(function(){

            var link_timecode = $(this).attr('href');

            $(this).after('<a href="' + link_timecode + '" class="link-share-twitter"><img src="/sites/all/themes/fi_subtheme/img/twitter-24.png" alt="icone twitter" /></a><a href="' + link_timecode + '" class="link-share-facebook"><img src="/sites/all/themes/fi_subtheme/img/facebook-24.png" alt="icone facebook" /></a>');

        });

        $('.field-name-field-lien-video').find('a.link-share-twitter').click(function(e){

            e.preventDefault();

            //Récupère le lien + le titre de la séquence
            var url_for_twitter = $(this).attr('href');
            var text = $(this).closest('.paragraphs-item-sequence').find('.group-left .field-item p a').text();


            //Récupère les thèmes pour les ajouter en #hastag séparés
            $(this).closest('.paragraphs-item-sequence').find('.group-middle .field-item a').each(function(){

                //Crée la liste des hashtag en retirant les tirets et les espaces
                //var array_text = $(this).text().split(/[' -]+/);
                var array_text = $(this).text().split(/^\d+|[ \-'%]+/);
                var hashtag = '';

                //Met en majuscule la première lettre de chaque mot du hashtag
                array_text.forEach(function(item) {

                    hashtag += item.substr(0,1).toUpperCase()+item.substr(1);

                });


                //Ajoute le hasthag
                text += ' #' + hashtag;

            });

            //Ajoute le twitter du compte vidéo FI en source
            text += ' via @videos_fi';

            //Ouvre la fenêtre de partage Twitter
            window.open('http://twitter.com/share?url='+encodeURIComponent(url_for_twitter)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            
        });

        $('.field-name-field-lien-video').find('a.link-share-facebook').click(function(e){

            e.preventDefault();

            //Récupère le lien + le titre de la séquence
            var url_for_facebook = $(this).attr('href');
            //var text = $(this).closest('.paragraphs-item-sequence').find('.group-left .field-item p a').text();

            //Ouvre la fenêtre de partage Facebook
            /*window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(url_for_facebook) + '&t=' + encodeURIComponent(text), 'sharer', 'toolbar=0,status=0,width=550,height=450');*/
            window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(url_for_facebook), 'sharer', 'toolbar=0,status=0,width=550,height=450');

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

