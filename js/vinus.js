var tempObj = "";
var CanvasObj = "";
var group = [];
var text40 = "";
var text41 = "";
var canvas = this.__canvas = new fabric.Canvas("c");
var center = {
    x: canvas.width / 2,
    y: canvas.height / 2
};
var obj = "";
(function () {
    canvas.backgroundColor = "#f3d353";
    $("#language").val("hindi");
    $(".targetDiv .one-third img").click(function (f) {
        if ($(this).attr("data-src") != null) {
            if (obj != "") {
                canvas.remove(obj)
            }
            var h = $(this).attr("data-src");
            fabric.loadSVGFromURL(h, function (j, i) {
                obj = fabric.util.groupSVGElements(j, i);
                obj.set({
                    left: center.x - (175 / 2),
                    top: 145,
                    transparentCorners: false,
                    cornerSize: 25
                }).scaleToWidth(175).setCoords();
                canvas.add(obj).setActiveObject(obj)
            })
        } else {
            if (obj != "") {
                canvas.remove(obj)
            }
            var h = $(this).attr("src");
            fabric.Image.fromURL(h, function (i) {
                obj = i.scale(0.6).set({
                    left: center.x - (175 / 2),
                    top: 145,
                    transparentCorners: false,
                    cornerSize: 25
                });
                canvas.add(obj).setActiveObject(obj)
            })
        }
    });
    var a = "Dekh Bhai";
    var g = "Meme Idhar Banane Ka";
    var c = document.getElementById("ftext");
    var b = document.getElementById("stext");
    text41 = new fabric.Text("Dekh Bhai", {
        fontSize: 30,
        left: center.x,
        top: 50,
        angle: 0,
        textAlign: "center",
        fontWeight: "bold",
        transparentCorners: false,
        cornerSize: 25
    });
    text41.left = center.x - (text41.width / 2);
    canvas.add(text41).setActiveObject(text41);
    c.value = a;
    text40 = new fabric.Text("Meme Idhar Banane Ka", {
        fontSize: 25,
        left: center.x,
        top: center.y + 100,
        angle: 0,
        textAlign: "center",
        transparentCorners: false,
        cornerSize: 25
    });
    text40.left = center.x - (text40.width / 2);
    canvas.add(text40).setActiveObject(text40);
    b.value = g;
    var e = "images/Tag.png";
    fabric.Image.fromURL(e, function (h) {
        var f = h.scale(1).scaleToWidth(300).set({
            left: center.x - (300 / 2),
            top: 145
        });
        f.top = canvas.height - 20;
        f.set("selectable", false);
        canvas.add(f)
    });
 var e = "images/Website.png";
    fabric.Image.fromURL(e, function (h) {
        var f = h.scale(1).scaleToWidth(150).set({
            left: center.x - (150 / 2),
            top: 145
        });
        f.top = 0;
        f.set("selectable", false);
        canvas.add(f)
    });


    function d(f) {
        if (f.target.get("type") == "text") {
            tempObj = f.target;
            CanvasObj = canvas;
            $("#text_editer_id").fadeIn(200);
            $("#data_size").val(tempObj.fontSize)
        } else {
            $("#text_editer_id").fadeOut(200)
        }
    }
    canvas.on("object:selected", d)
})();
$(document).ready(function (a) {

	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	
	});


    $("#data_one_temp").click();
    $(".text_bg").click(function (b) {
        if ($("#btn1").hasClass("active_btn")) {
            canvas.backgroundColor = $(this).css("background-color")
        } else {
            if ($("#btn2").hasClass("active_btn")) {
                tempObj.setColor($(this).css("background-color"))
            }
        }
        canvas.renderAll()
    });
    $(".text_color div p").click(function (b) {
        tempObj.setColor($(this).css("background-color"));
        canvas.renderAll()
    });
    $("#btn1").click(function (b) {
        $("#btn2").removeClass("active_btn");
        $("#btn1").removeClass("active_btn");
        $("#btn1").addClass("active_btn")
    });
    $("#btn2").click(function (b) {
        $("#btn1").removeClass("active_btn");
        $("#btn2").removeClass("active_btn");
        $("#btn2").addClass("active_btn")
    })
});

function FontChange(b) {
    tempObj.fontSize = b.value;
    CanvasObj.renderAll()
}
function clickdata() {
    document.getElementById("backgroundcolor").click()
}
function changeColor1(b) {
    if ($("#btn1").hasClass("active_btn")) {
        canvas.backgroundColor = document.getElementById("color_paletter1").style.backgroundColor
    } else {
        if ($("#btn2").hasClass("active_btn")) {
            tempObj.setColor(document.getElementById("color_paletter1").style.backgroundColor)
        }
    }
    canvas.renderAll()
}
function keyupChangeColor1() {
    document.getElementById("color_paletter1").style.backgroundColor = document.getElementById("numbercolor").value;
    if ($("#btn1").hasClass("active_btn")) {
        canvas.backgroundColor = document.getElementById("numbercolor").value
    } else {
        if ($("#btn2").hasClass("active_btn")) {
            tempObj.setColor(document.getElementById("numbercolor").value)
        }
    }
    canvas.renderAll()
}
function clickdata1() {
    document.getElementById("backgroundcolor1").click()
}
function changeColor2() {
    document.getElementById("bgcolortext1").value = document.getElementById("backgroundcolor1").value;
    document.getElementById("color_paletter2").style.backgroundColor = document.getElementById("backgroundcolor1").value;
    tempObj.setColor(document.getElementById("backgroundcolor1").value);
    canvas.renderAll()
}
function keyupChangeColor2() {
    document.getElementById("color_paletter2").style.backgroundColor = document.getElementById("bgcolortext1").value;
    tempObj.setColor(document.getElementById("bgcolortext1").value);
    canvas.renderAll()
}
function downloadCanvas() {
    canvas.deactivateAll();
    canvas.renderAll();
    var a = document.getElementById("c");
    window.saveImageDataToLibrary(function (b) {
        console.log(b);
        alert("Image Saved")
    }, function (b) {
        console.log(b)
    }, document.getElementById("c"))
}
function FontChnaged(b) {
    tempObj.fontFamily = b.value;
    CanvasObj.renderAll()
}
function FontStyle(b) {
    if (b.value == "normal") {
        tempObj.fontWeight = "400";
        tempObj.fontStyle = b.value
    } else {
        if (b.value == "bold") {
            tempObj.fontStyle = "normal";
            tempObj.fontWeight = b.value
        } else {
            if (b.value == "italic") {
                tempObj.fontWeight = "400";
                tempObj.fontStyle = b.value
            } else {
                if (b.value == "BoldItalic") {
                    tempObj.fontWeight = "bold";
                    tempObj.fontStyle = "italic"
                }
            }
        }
    }
    CanvasObj.renderAll()
}
function ColorChanged(b) {
    tempObj.Color = "#" + b.value;
    CanvasObj.renderAll()
}
function BoldChanged(b) {
    alert(b.value)
}
function deleteData() {
    if (canvas.getActiveGroup()) {
        canvas.getActiveGroup().forEachObject(function (a) {
            canvas.remove(a)
        });
        canvas.discardActiveGroup().renderAll()
    } else {
        if (canvas.getActiveObject().text == null) {
            canvas.remove(canvas.getActiveObject())
        }
    }
}



function BColorChanged(b) {
    canvas.backgroundColor = "#" + b.value;
    canvas.renderAll()
}
function LineOneText(b) {
    text41.text = b.value;
    text41.left = center.x - (text41.width / 2);
    canvas.renderAll()
}
function LineTwoText(b) {
    text40.text = b.value;
    text40.left = center.x - (text40.width / 2);
    canvas.renderAll()
}
function chnageLng(e) {
    var g = document.getElementById("ftext");
    var b = document.getElementById("stext");
    if (e.value == "hindi") {
        var c = "??? ???";
        var d = "?? ???? ?? ???? ??";
        text41.text = c;
        text41.left = center.x - (text41.width / 2);
        g.value = c;
        text40.text = d;
        text40.left = center.x - (text40.width / 2);
        b.value = d;
        canvas.renderAll()
    }
    if (e.value == "guj") {
        var c = "?? ???";
        var d = "???? ????? ?? ????";
        text41.fontFamily = "guj";
        text41.text = c;
        text41.left = center.x - (text41.width / 2);
        g.value = c;
        text40.fontFamily = "guj";
        text40.text = d;
        text40.left = center.x - (text40.width / 2);
        b.value = d;
        canvas.renderAll()
    }
    if (e.value == "en") {
        var c = "Look Bro";
        var d = "This is not easy for you";
        text41.text = c;
        text41.left = center.x - (text41.width / 2);
        g.value = c;
        text40.text = d;
        text40.left = center.x - (text40.width / 2);
        b.value = d;
        canvas.renderAll()
    }
}
function facebook() {
    canvas.deactivateAll();
    canvas.renderAll();
    var a = canvas.toDataURL();
    $.ajax({
        type: "POST",
        url: "saveme.php",
        data: {
            imgBase64: a
        }
    }).done(function (b) {
        window.open("//www.facebook.com/share.php?m2w&s=100&p[url]=" + encodeURIComponent("http://www.dekhbhaai.com") + "&p[images][0]=" + encodeURIComponent("http://www.deskhbhaai.com/" + b) + "&p[title]=" + encodeURIComponent("hello") + "&p[summary]=" + encodeURIComponent("Its Free"), "Facebook", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
    })
}
function twitter() {
    canvas.deactivateAll();
    canvas.renderAll();
    var a = canvas.toDataURL();
    $.ajax({
        type: "POST",
        url: "saveme.php",
        data: {
            imgBase64: a
        }
    }).done(function (b) {
        window.open("https://twitter.com/intent/tweet?original_referer=" + encodeURIComponent("http://www.deskhbhaai.com/" + b) + "&text=" + encodeURIComponent("Dekh Bhaai") + "%20" + encodeURIComponent("http://www.deskhbhaai.com/" + b), "Twitter", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
    })
}
function twitter() {
    canvas.deactivateAll();
    canvas.renderAll();
    var a = canvas.toDataURL();
    $.ajax({
        type: "POST",
        url: "saveme.php",
        data: {
            imgBase64: a
        }
    }).done(function (b) {
        window.open("https://twitter.com/intent/tweet?original_referer=" + encodeURIComponent("http://www.deskhbhaai.com/" + b) + "&text=" + encodeURIComponent("Dekh Bhaai") + "%20" + encodeURIComponent("http://www.deskhbhaai.com/" + b), "Twitter", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
    })
}
function gplus() {
    canvas.deactivateAll();
    canvas.renderAll();
    var a = canvas.toDataURL();
    $.ajax({
        type: "POST",
        url: "saveme.php",
        data: {
            imgBase64: a
        }
    }).done(function (b) {
        window.open("//plus.google.com/share?url=" + encodeURIComponent("http://www.deskhbhaai.com/" + b), "GooglePlus", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
    })
}
function pintrest() {
    canvas.deactivateAll();
    canvas.renderAll();
    var a = canvas.toDataURL();
    $.ajax({
        type: "POST",
        url: "saveme.php",
        data: {
            imgBase64: a
        }
    }).done(function (b) {
        window.open("//pinterest.com/pin/create/button/?url=" + encodeURIComponent("http://www.deskhbhaai.com/" + b) + "&media=" + encodeURIComponent("http://www.deskhbhaai.com/" + b) + "&description=" + encodeURIComponent("Free meme Genrater"), "Pinterest", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
    })
}
function share_data() {
    canvas.deactivateAll();
    canvas.renderAll();
    window.plugins.socialsharing.share("Create More memes from Dekhbhaai.com", "Dekh Bhai", canvas.toDataURL(), "http://www.dekhbhaai.com", function (a) {
        console.log("result:" + a)
    }, function (a) {
        alert("error: " + a)
    })
}
function getImage() {
    function b(d) {
        var e = d;
        fabric.Image.fromURL(e, function (g) {
            var f = g.scale(0.5).set({
                left: center.x - (175 / 2),
                top: 145,
                width: 220,
                height: 220,
                 transparentCorners: false,
                 cornerSize: 25

            });
            canvas.add(f).setActiveObject(f)
        })
    }
	 
    function c(d) {
        alert("Failed to get the picture: " + d)
    }
    var a = navigator.camera.getPicture(b, c, {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });
    window.onorientationchange = function () {
        var d = new CameraPopoverOptions(0, 0, 100, 100, 0);
        a.setPosition(d)
    }
};
 function resetimage()
  {
  
  document.location="index.html";
  }
  
  function aboutImage()
  {
  
  	var ele = document.getElementById("toggleText");
	var text = document.getElementById("displayText");
	
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "About";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "hide";
		var height = $(this).height()
   		$('#content').height(height);   		
	}
  }