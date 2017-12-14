//= require jquery
//= require bootstrap
//= require_tree .


$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors:['home', 'map', 'crew','info','lewagonmtl','contact'],
    sectionsColor: 'white',
    navigation: true,
    navigationPosition: 'right',
    // navigationTooltips: ['First', 'Second', 'Third']
    // //Navigation
    // menu: '#menu',
    // lockAnchors: false,
    // anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage'],
    // navigation: false,
    // navigationPosition: 'right',
    // navigationTooltips: ['firstSlide', 'secondSlide'],
    // showActiveTooltip: false,
    // slidesNavigation: false,
    // slidesNavPosition: 'bottom',

    // //Scrolling
    // css3: true,
    // scrollingSpeed: 700,
    // autoScrolling: true,
    // fitToSection: true,
    // fitToSectionDelay: 1000,
    // scrollBar: false,
    // easing: 'easeInOutCubic',
    // easingcss3: 'ease',
    // loopBottom: false,
    // loopTop: false,
    // loopHorizontal: true,
    // continuousVertical: false,
    // continuousHorizontal: false,
    // scrollHorizontally: false,
    // interlockedSlides: false,
    // dragAndMove: false,
    // offsetSections: false,
    // resetSliders: false,
    // fadingEffect: false,
    // normalScrollElements: '#element1, .element2',
    // scrollOverflow: false,
    // scrollOverflowReset: false,
    // scrollOverflowOptions: null,
    // touchSensitivity: 15,
    // normalScrollElementTouchThreshold: 5,
    // bigSectionsDestination: null,

    // //Accessibility
    // keyboardScrolling: true,
    // animateAnchor: true,
    // recordHistory: true,

    // //Design
    // controlArrows: true,
    // verticalCentered: true,
    // sectionsColor : ['white', 'white', 'white'],
    // //paddingTop: '3em',
    // //paddingBottom: '10px',
    // fixedElements: '#header, .footer',
    responsiveWidth: 1100,
    // responsiveHeight: 0,
    // responsiveSlides: false,
    // parallax: false,
    // parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    // //Custom selectors
    // sectionSelector: '.section',
    // slideSelector: '.slide',

    // lazyLoading: true,

    // //events
    // onLeave: function(index, nextIndex, direction){},
    // afterLoad: function(anchorLink, index){},
    // afterRender: function(){},
    // afterResize: function(){},
    // afterResponsive: function(isResponsive){},
    // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    // onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);

      //after leaving section 2
      if(index == 1 && direction =='down'){
        $('#fun-level').animateNumber({number: 42},2000);
        $('#batchs').animateNumber({number: 3},2000);
        $('#hours').animateNumber({number: 1000},2000);
        $('#apps').animateNumber({number: 13},2000);
      }

      else if(index == 3 && direction == 'up'){
        $('#fun-level').animateNumber({number: 42},2000);
        $('#batchs').animateNumber({number: 3},2000);
        $('#hours').animateNumber({number: 1000},2000);
        $('#apps').animateNumber({number: 13},2000);
      }
    }
  });

});
