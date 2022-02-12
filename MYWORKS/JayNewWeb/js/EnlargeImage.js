// JavaScript Document
$(function(){  
        $(".images").click(function(){  
			
            var _this = $(this);//將當前的pimg元素作為_this傳入  
            imgShow("#outerdiv", "#innerdiv", "#bigimg", _this); 
        });  
    });

function imgShow(outerdiv, innerdiv, bigimg, _this){  
    var src = _this.attr("src");//獲取當前點擊的pimg元素中src屬性
	var name = _this.attr("alt");  
    $(bigimg).attr("src", src);//設置#bigimg元素的src屬性
	$(".imgName a").attr('href','#'+name);  
    $(".imgName a").prepend(name);
        //獲取當前點擊圖片的真實大小，並顯示彈出層及大圖
    $("<img/>").attr("src", src).load(function(){  
        var windowW = $(window).width();//獲取當前窗口寬度  1440  
        var windowH = $(window).height();//獲取當前窗口高度   800
        var realWidth = this.width;//獲取圖片真實寬度   301
        var realHeight = this.height;//獲取圖片真實高度   203
        var imgWidth, imgHeight;  
        var scale = 0.8;//缩放尺寸，當圖片真實寬度和高度大於窗口寬度和高度時進行缩放   	
        if(realHeight>windowH*scale) {//判断圖片高度  
            imgHeight = windowH*scale;//如大於窗口高度，圖片高度進行缩放  
            imgWidth = imgHeight/realHeight*realWidth;//等比例缩放寬度  
            if(imgWidth>windowW*scale) {//如寬度扔大於窗口寬度  
                imgWidth = windowW*scale;//再對寬度進行缩放  
            }  
        } else if(realWidth>windowW*scale) {//如圖片高度合適，判断圖片寬度  
            imgWidth = windowW*scale;//如大於窗口寬度，圖片寬度進行缩放  
                        imgHeight = imgWidth/realWidth*realHeight;//等比例缩放高度  
        } else {//如果圖片真實高度和寬度都符合要求，高寬不變  
            imgWidth = realWidth;  
            imgHeight = realHeight;  
        }  
                $(bigimg).css("width",imgWidth);//以最终的寬度對圖片缩放  
          
        var w = (windowW-imgWidth)/2;//計算圖片與窗口左邊距  
        var h = (windowH-imgHeight)/2;//計算圖片與窗口上邊距  
        $(innerdiv).css({"top":h, "left":w});//設置#innerdiv的top和left属性  
        $(outerdiv).fadeIn("fast");//淡入顯示#outerdiv及.pimg  
    });  
      
    $(outerdiv).click(function(){//再次點擊淡出消失彈出層  
        $(this).fadeOut("fast");  
		$(".imgName a").empty();
    });  
}  