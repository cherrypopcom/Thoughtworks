$(document).ready(function(){   //取页面元素
	toview(disks);
})
	 
	 
 function toview(disks){
     $("#container").empty();
	 var diskDivs=_.map(disks,function(disk){
		return diskdiv(disk)
		});
	
	_.each(diskDivs,function(div){
		$("#container").append(div)});

 }

  function diskdiv(disk){
   return $("<div>")
   .attr("class","disk1")
   .attr("id","diskall")
   .append(diskTitle(disk.name))
   .append(diskImg(disk.img))
   .append(diskDesc(disk.description))
   .append(deleteButton(disk.name))
   .append(addToCartButton(disk.name));
   }
   
   function diskTitle(Title){
	return $("<div>").html(Title);
   }
   function diskImg(img){
	return $("<img>").attr("src",img);
   }
   function diskDesc(desc){
	return  $("<div>").html(desc);
   }
	   
	function add(){
	var newProduct={
	name: $("#productName").val(),
	img: $("#productImg").val(),
	description: $("#productDesc").val()
	};
	disks.push(newProduct);
	toview(disks);
	}
	function search()
	{ var keyword=$("#search").val();
	   var searchResult=_.filter(disks,function(disk){
	   return disk.name.indexOf(keyword)!=-1;
	   })
	   toview(searchResult);
	}
    function deleteButton(name) {
    return $("<button>")
        .html("delete")
        .click(function () {
            remove(name);
        });
}
	function remove(name) {
    disks = _.filter(disks, function (disk) {
        return disk.name !== name;
    });

    toview(disks);
}
