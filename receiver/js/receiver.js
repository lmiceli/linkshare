$( document ).ready(function() {
    // kinda of a set
    // delete to remove them delete alreadyOpened.elem
    var alreadyOpened = [];

    setInterval(function () {
        // http://api.jquery.com/jquery.ajax/
        $.ajax({
          url: "https://dl.dropboxusercontent.com/u/20421616/apps/linkshare/links-to-rt.txt",
          context: document.body, // check if this can be useful to play with
          cache: false
        }).done(function(data) {
            // TODO separate in lines
            // TODO validate urls
            if (!alreadyOpened[data] && data.length > 5) {
              alreadyOpened[data] = true;  
              window.open(data);
              $('#test').append("Opened: " + data +" <br/>");
            }
            
        });
        
    }, 1000);
    
});
