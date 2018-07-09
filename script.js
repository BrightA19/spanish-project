function show(elem, id) {
    var activeElements = document.querySelectorAll('.active');
    var inactiveElements = document.querySelectorAll('table#' + id);
    
    var i = 0;
    
    for (i = 0; i < activeElements.length; i++)
        activeElements[i].classList.remove('active');
        
    for (i = 0; i < inactiveElements.length; i++)
        inactiveElements[i].classList.add('active');
        
    elem.classList.add('active');
}
