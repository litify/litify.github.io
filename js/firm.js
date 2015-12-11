;(function($, window, document, undefined) {
  var $win = $(window);
  var $doc = $(document);

  $doc.ready(function() {
    // $('.form-info').on('submit', 'form', function (event) {
    //   var $this = $(this);

    //   event.preventDefault();
    //   //Ajax submit form here

    //   if ( !$this.find('.error').length ) {
    //       $('.section-thank-you').addClass('show');
    //       $('.section-info').addClass('hidden');
    //   }
    
    // });

    $('.form-info input.required').blur(function() {
        if( $(this).val().length === 0 ) {
            $(this).parent().addClass('error');
        }
    });

    $('.form-info input.required').on('focus', function() {
        $(this).parent().removeClass('error');
    });

    //tab
    (function(){
      // This class will be added to active tab link 
      // and the content container
      var activeTabClass = 'current';
      
      $('.tabs-nav a').on('click', function(event) {
        var $tabLink = $(this);
        var $targetTab = $($tabLink.attr('href'));
     
        $tabLink
          .parent() // go up to the <li> element
          .add($targetTab)
          .addClass(activeTabClass)
            .siblings()
            .removeClass(activeTabClass);
        
        event.preventDefault();
      });
    })();

    $('.btn-close-primary').on('click', function (event) {
      $('.section-popup-downoload-ios').addClass('remove');  
      $('html').removeClass('show-add-helper');  
      
      //Show/hide your navigation here
      
      event.preventDefault();
    });

    $('.btn-transparent').on('click', function (event) {
      $(this).toggleClass('hidden');
      $('.form-hidden').addClass('visible');  
      
      event.preventDefault();
    });


    //custom select
    $('#field-case-type').selecter({label: 'Select Case Type ...'});
    $('#field-pc-state').selecter({label: 'Select State ...'});
    // $('.field-pc-state').autocomplete({
    //   source: [
    //     "Alabama",
    //     "Alaska",
    //     "Arizona",
    //     "Arkansas",
    //     "California",
    //     "Colorado",
    //     "Connecticut",
    //     "Delaware",
    //     "Florida",
    //     "Georgia",
    //     "Hawaii",
    //     "Idaho",
    //     "Illinois",
    //     "Indiana",
    //     "Iowa",
    //     "Kansas",
    //     "Kentucky",
    //     "Louisiana",
    //     "Maine",
    //     "Maryland",
    //     "Massachusetts",
    //     "Michigan",
    //     "Minnesota",
    //     "Mississippi",
    //     "Missouri",
    //     "Montana",
    //     "Nebraska",
    //     "Nevada",
    //     "New Hampshire",
    //     "New Jersey",
    //     "New Mexico",
    //     "New York",
    //     "North Carolina",
    //     "North Dakota",
    //     "Ohio",
    //     "Oklahoma",
    //     "Oregon",
    //     "Pennsylvania",
    //     "Rhode Island",
    //     "South Carolina",
    //     "South Dakota",
    //     "Tennessee",
    //     "Texas",
    //     "Utah",
    //     "Vermont",
    //     "Virginia",
    //     "Washington",
    //     "West Virginia",
    //     "Wisconsin",
    //     "Wyoming"
    //   ]
    // });


    //popups
    // $('.ajax-popup-link').magnificPopup({
    //   type: 'ajax',
    //   closeMarkup: '<button title="Close (Esc)" type="button" class="btn-close mfp-close">Cancel</button>',
    //   callbacks: {
    //     open: function() {
    //       $('body').addClass('lock');
    //       $('html').addClass('lock');
    //       $('.wrapper').addClass('lock');
    //     },
    //     close: function() {
    //       $('body').removeClass('lock');
    //       $('html').removeClass('lock');
    //       $('.wrapper').removeClass('lock');
    //     }
    //   }
    // });
  });

    $win.on('load', function() {
      setTimeout(function() {
      $('body').addClass('loaded');
      }, 2000);

    });

})(jQuery, window, document);
 