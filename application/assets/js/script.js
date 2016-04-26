window.onload = function() {
    var searchInp = document.getElementById('search-inp');
    var	searchSub = document.getElementById('search-sub');
    
    searchInp.onfocus = function() {
        searchSub.style.backgroundColor = '#F9F9F9';
        searchSub.style.borderColor = '#F2F2F2';
    }
    searchInp.onblur = function() {
        searchSub.style = null;
    }




}