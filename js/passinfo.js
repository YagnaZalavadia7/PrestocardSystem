//MADE BY Hena Shah

$(document).ready(function () {

});

function setNewTab(event, tab) {

    let tabData = document.getElementById(tab);
    // get all childs tabs using classname, you will get this in array format
    let allTabsData = document.getElementsByClassName('service');
    let allTabs = document.getElementsByClassName('service-tabs');
    var i;
    // map that array using for loop to get the current tab 
    for (i = 0; i < allTabsData.length; i++) {
        // set style display to none, this will hide all the tabs
        allTabsData[i].style.display = "none";
    }
    for (i = 0; i < allTabs.length; i++) {
        allTabs[i].className = allTabs[i].className.replace(" active-tab", "");
    }
    // now set style of the current tab on which you clicked to block
    tabData.style.display = "block"
    // now set className of current tab to 'active-tab' which is class for active tab
    event.currentTarget.className += " active-tab"
}