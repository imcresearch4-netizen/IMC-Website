$(function () {
    var tabs = $("#tabs").tabs();
    
    var urlParams = new URLSearchParams(window.location.search);
    var tabParam = urlParams.get('tab');
    if (tabParam) {
        var tabIndex = parseInt(tabParam);
        if (isNaN(tabIndex)) {
            var key = tabParam.toLowerCase();
            if (key === 'phd') tabIndex = 0;
            else if (key === 'ms' || key === 'ug' || key === 'undergrad') tabIndex = 1;
            else if (key === 'ra' || key === 'associate' || key === 'ra-tab') tabIndex = 2;
            else if (key === 'alumni') tabIndex = 3;
            else if (key === 'journal') tabIndex = 0;
            else if (key === 'conference') tabIndex = 1;
            else if (key === 'patent') tabIndex = 2;
        }
        tabs.tabs("option", "active", tabIndex);
    }
});