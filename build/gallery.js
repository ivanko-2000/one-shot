// Get the image and insert it inside the modal - use its "alt" text as a caption
var captionText = document.getElementById("caption");
$(".galleryItem").on("click", function (event) {
    $("#modal").css({display:"block"});
    $("#bigImage").attr('src',event.target.parentNode.children[0].src);
    $("#caption").innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    $("#modal").css({display:"none"});
}