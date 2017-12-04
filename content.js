chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            var metabars = document.querySelectorAll('.metabar');
            var footer = document.querySelector('.js-stickyFooter');
            if (metabars) {
                metabars.forEach(function(metabar){
                    metabar.style.display = "none";
                });
            }
            if (footer) {
                footer.style.display = "none";
            }
        }
    }
);