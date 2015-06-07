$("document").ready( function () {
	var toSetHeight = $(9).toPx();
	var originalHeight = $(4).toPx();
  var offsetheight = $(5).toPx();
  var isfixed = false;
  var scrolltop = $(this).scrollTop();
  var offset = $("#wrapper").offset().top;
  var location = window.location.href;
  var fixed;

  if (location.indexOf("android") != -1){
    fixed = "andfixed"; 
  }

  if (location.indexOf("index") != -1){
    fixed = "fixed"; 
  }

  if (location.indexOf("ios") != -1){
    fixed = "iosfixed"; 
  }

  if (location.indexOf("wp") != -1){
    fixed = "wpfixed"; 
  }

  if (location.indexOf("summary") != -1){
    fixed = "summaryfixed"; 
  }

  if (location.indexOf("about") != -1){
    fixed = "infofixed"; 
  }

	$(window).scroll(function(){
    scrolltop = $(this).scrollTop();
    offset = $("#wrapper").offset().top;

    if (scrolltop > offset && !isfixed){
      console.log("scrolled past div");
      $("#container").toggleClass(fixed);
      isfixed = true;
    }

    if (scrolltop < offset && isfixed){
      console.log("scrolled before div");
      $("#container").toggleClass(fixed);
      isfixed = false;
    }
  });

  $(".box1").hover(
    function(){
      $( ".box1 img" ).fadeOut( "fast", function(){
        $(this).attr("src", 'Assets/AndroidColored.png');
        $(".box1 img").fadeIn("fast");
      });},
    function(){
      $(".box1 img").stop(true, true).attr("src", 'Assets/Android.png');
    }
  );

  $(".box2").hover(
    function(){
      $( ".box2 img" ).fadeOut( "fast", function(){
        $(this).attr("src", 'Assets/AppleColored.png');
        $(".box2 img").fadeIn("fast");
      });},
    function(){
      $(".box2 img").stop(true,true).attr("src", 'Assets/Apple.png');
    }
  );

  $(".box3").hover(
    function(){
      $( ".box3 img" ).fadeOut( "fast", function(){
        $(this).attr("src", 'Assets/WPColored.png');
        $(".box3 img").fadeIn("fast");
      });},
    function(){
      $(".box3 img").stop(true,true).attr("src", 'Assets/WP.png');
    }
  );

  $(".box4").hover(
    function(){
      $( ".box4 img" ).fadeOut( "fast", function(){
        $(this).attr("src", 'Assets/SummaryColored.png');
        $(".box4 img").fadeIn("fast");
      });},
    function(){
      $(".box4 img").stop(true,true).attr("src", 'Assets/Summary.png');
    }
  );

  $(".box5").hover(
    function(){
      $( ".box5 img" ).fadeOut( "fast", function(){
        $(this).attr("src", 'Assets/InfoColored.png');
        $(".box5 img").fadeIn("fast");
      });},
    function(){
      $(".box5 img").stop(true,true).attr("src", 'Assets/Info.png');
    }
  );

	$("#firstrec").hover(
		function(){
			mouseOver(1);
		},
		 function(){
			mouseLeave(1);
  	 }
  );

	$("#secondrec").hover(
  	function(){
  		mouseOver(2);
  	},
  	 function(){
  		mouseLeave(2);
  	 }
  );

  $("#thirdrec").hover(
		function(){
			mouseOver(3);
		},
  	 function(){
  		mouseLeave(3);
  	 }
  );

	function mouseOver(num){
		var wrappingRec;
		var expandedRec;
		switch (num){
			case 1: 
			wrappingRec = "#firstWR";
			expandedRec = "#firstrec"
			break;

			case 2:
			wrappingRec = "#secondWR";
			expandedRec = "#secondrec";
			break;

			case 3:
			wrappingRec = "#thirdWR";
			expandedRec = "#thirdrec";
			break;
		}

    if ($(".fixed").css("position") != "relative"){
      $(wrappingRec).stop().animate({height:toSetHeight}, 500);
    }
	}

	function mouseLeave(num){
		var wrappingRec;
		switch (num){
			case 1: 
			wrappingRec = "#firstWR";
			break;

			case 2:
			wrappingRec = "#secondWR";
			break;

			case 3:
			wrappingRec = "#thirdWR";
			break;
		}

    if ($(".fixed").css("position") != "relative"){
		  $(wrappingRec).stop().animate({height:originalHeight}, 500);
    }
  }
});

