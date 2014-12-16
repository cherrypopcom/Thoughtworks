function addToCartButton(name){
return $("<button>")
        .html("add to cart")
		.click(function() {
		   addToCart(name);
		   })
}
function addToCart(product){
   document.getElementById("ProductName").innerHTML="小清新光盘";
}

function goToHome(){
window.location.href="ywj.html";}

function goToCart(){
window.location.href="cart.html";
}

$(function(){
  var t=$("#t_num");
  $("#add").click(function() {
       t.val(parseInt(t.val())+1)
	   setTotal();
	   })
  $("#min").click(function() {
       t.val(parseInt(t.val())-1)
	   setTotal();
	   })
  function setTotal(){
  $("#TotalPrice").html((parseInt(t.val())*4.5).toFixed(2)); 
  }
  })
  
 