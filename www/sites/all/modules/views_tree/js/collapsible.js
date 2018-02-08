(function ($) {
    console.log('TEST  EVENT function JQUERY READY');
  Drupal.behaviors.views_tree = {
    attach: function (context, settings) {

      var views_tree_settings = Drupal.settings.views_tree_setting;
      var path = window.location.pathname;
        console.log('path');
      console.log(path);
      for(var views_tree_name in views_tree_settings) {

        $.each( $(".view-id-"+views_tree_name+" .view-content li"), function () {
          console.log('TEST  EVENT');
          var is_selected = $(this).find("> .views-field a[href='" + path + "']").length > 0;
          if (is_selected) {
            $(this).addClass('views_tree_selected_link');
            // Probleme ici lié au path
          }

          var count = $(this).find("li").size();

          if (count > 0) {
            $(this).addClass('views_tree_parent');

            is_expanded = !is_selected && $(this).find('li a[href=\'' + path + '\']').length > 0;
            if (is_expanded) {
              $(this).addClass('views_tree_parent_selected_link');
              //Encore une fois, sans doute un probleme avec le path.
              console.log(this);
            }

            if (views_tree_settings[views_tree_name] != "collapsed" || is_expanded) {
              if ($(this).find('> .views_tree_link').length == 0) {
                $(this).addClass('views_tree_expanded');
                $(this).prepend('<div class="views_tree_link views_tree_link_expanded"><a href="#">&nbsp;</a></div>');
              }
            }
            else {
              if ($(this).find('> .views_tree_link').length == 0) {
                $(this).addClass('views_tree_collapsed');
                $(this).prepend('<div class="views_tree_link views_tree_link_collapsed"><a href="#">&nbsp;</a></div>');
                  $(this).children("ul").hide();
                //$(this).children(".item-list").hide();  // Pierre : Pas de .item-list dans mes views.
              }
            }

          }
          else {
            if(!$(this).hasClass('views_tree_leaf')) {
              $(this).addClass('views_tree_leaf');
            }
          }
        });

      }
      $('.views_tree_link a', context).once('views_tree', function () {
        $(this).click(function (e) {
          e.preventDefault();

          if ($(this).parent().hasClass('views_tree_link_expanded')) {
              $(this).parent().parent().children("ul").slideUp();
              $(this).parent().removeClass('views_tree_link_expanded');
              $(this).parent().addClass('views_tree_link_collapsed');
            /*
             $(this).parent().parent().children(".item-list").css({"color": "red", "border": "2px solid red"});
             $(this).parent().parent().children("ul").css({"color": "red", "border": "2px solid red"});
             console.log('views_tree_link_collapsed')
             console.log($(this).parent().parent().children("ul"));
             */

          }
          else {
            $(this).parent().parent().children("ul").slideDown();
            $(this).parent().removeClass('views_tree_link_collapsed');
            $(this).parent().addClass('views_tree_link_expanded');
            /*
             console.log('views_tree_link_expanded')
             console.log($(this).parent().parent().children("ul"));
             $(this).parent().parent().children(".item-list").css({"blue": "red", "border": "2px solid blue"});
             $(this).parent().parent().children("ul").css({"color": "blue", "border": "2px solid blue"});
             */
          }
        });
      });
    }
  };

})(jQuery);
