$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });

    return false;
});


//Appear on Scroll

/*var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
*/

$(window).scroll(function() {
  $('.animation-element').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      $(this).addClass("slide-down-header");
    }
  });
});

//ajax form

function _(id) {return document.getElementById(id); } //Creating a "Query"

function submitForm() {
  _("mybtn").disabled = true;
  $("#status").addClass('submitting');
  _("status").innerText = "please wait...";
  var formdata = new FormData();
  formdata.append( "n", _("n").value );
  formdata.append( "l", _("l").value );
  formdata.append( "e", _("e").value );
  formdata.append( "m", _("m").value );
  var ajax = new XMLHttpRequest();
  ajax.open( "POST", "parser.php" );
  ajax.onreadystatechange = function () {
      if( ajax.readyState == 4 && ajax.status == 200 )
    {
      if (ajax.responseText = "success")
      {
        _("status").innerText = "Thank you " + _('n').value + ' ' + _('l').value + ", your message has been sent";
        $("#status").addClass('success');
        $("#status").removeClass('submitting');
      } else
        {
          _("status").innerText = "Sorry Please try again";
          _("mybtn").disabled = false;
        }
      }

    }
    ajax.send( formdata );
  }