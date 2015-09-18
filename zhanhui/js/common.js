	function showListBox(){
            if($("#listBox").css("left") =="-160px") {
                $("#listBox").show().animate({ left: 0 }, { duration: 180, queue: false });
                $("#box").animate({ right: -160 }, { duration: 180, queue: false });
            }
            else{
                $("#listBox").animate({ left: -160 }, { duration: 180, queue: false });
                $("#box").animate({ right: 0 }, { duration: 180, queue: false });
            }
		//$("#header").css("width",($(document).width()-320)+"px");
        if($("#listBox1").css("left") =="-160px") {
            $("#listBox1").show().animate({ left: 0 }, { duration: 180, queue: false });
            $("#box1").animate({ right: -160 }, { duration: 180, queue: false });
        }
        else{
            $("#listBox1").animate({ left: -160 }, { duration: 180, queue: false });
            $("#box1").animate({ right: 0 }, { duration: 180, queue: false });
        }
	}
