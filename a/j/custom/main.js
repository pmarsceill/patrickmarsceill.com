// $('.image--animate-in').waypoint(function() {
//   $(this).addClass('focus');
// },{ offset: 300 });


// $('.site-header').waypoint(function() {
//   $(this).addClass('active');
//   console.log('active');
// },{ offset: -50 });

enquire.register("screen and (min-width: 800px)", {
    match : function() {
        // Load sidebar content in via AJAX.
        // Show sidebar
        skrollr.init();
    },  
    unmatch : function() {
        // Hide the sidebar
        skrollr.init().destroy();
    }
});
