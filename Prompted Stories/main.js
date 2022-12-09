function showToggle() {
    var visibility = document.getElementById('about').style.visibility;
    if (visibility == "hidden")
        document.getElementById('about').style.visibility='visible';
    else
        document.getElementById('about').style.visibility='hidden';
}
document.getElementById('title').onclick = function(e){
    showToggle();// call the function
};