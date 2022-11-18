---
---
// Scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

// Slick FX
$(document).ready(function(){
    $("#showmailbox").click(function(){
        $("#mailbox").slideToggle();
    });
    $("#showheaderhidden1").click(function(){
        $("#headerhidden1").slideToggle();
    });
    $("#showsearch").click(function(){
        $("#search").slideToggle();
    });
  {% for title in site.data.cv.employment %}
    $("#showEmployment{{ forloop.index }}").click(function(){
        $("#employment{{ forloop.index }}").slideToggle();
    });
  {% endfor %}
  {% for title in site.data.cv.projects %}
    $("#showProject{{ forloop.index }}").click(function(){
        $("#project{{ forloop.index }}").slideToggle();
    });
    $("#showMinorProject{{ forloop.index }}").click(function(){
        $("#minorProject{{ forloop.index }}").slideToggle();
    });
  {% endfor %}
  {% for title in site.data.cv.creative %}
    $("#showCreative{{ forloop.index }}").click(function(){
        $("#creative{{ forloop.index }}").slideToggle();
    });
  {% endfor %}
  {% for title in site.data.cv.courses %}
    $("#showCourse{{ forloop.index }}").click(function(){
        $("#course{{ forloop.index }}").slideToggle();
    });
  {% endfor %}
  {% for title in site.data.cv.awards %}
    $("#showAward{{ forloop.index }}").click(function(){
        $("#award{{ forloop.index }}").slideToggle();
    });
  {% endfor %}
  {% for title in site.data.research.publications %}
    $("#showPublications{{ forloop.index }}").click(function(){
        $("#publications{{ forloop.index }}").slideToggle();
    });
  {% endfor %}
  {% for title in site.data.research.public %}
    $("#showPublic{{ forloop.index }}").click(function(){
        $("#public{{ forloop.index }}").slideToggle();
    });
  {% endfor %}
  {% for title in site.data.research.projects %}
    $("#showProjects{{ forloop.index }}").click(function(){
        $("#projects{{ forloop.index }}").slideToggle();
    });
  {% endfor %}
});
