$(document).ready(function(){
	if($('.catalog .item.slice-item').length)
	{
		$('.item.slice-item .title').sliceHeight({'fixWidth':1});
		if($('.item.slice-item .text.childs'))
			$('.item.slice-item .text.childs').sliceHeight({'fixWidth':1});
		$('.catalog .item.slice-item').sliceHeight({'fixWidth':1});
	}
})