$('.image--animate-in').waypoint(function() {
  $(this).addClass('focus');
},{ offset: 300 });


// var current_frame, total_frames, path, length, handle, myobj;

// myobj = document.getElementById('van-illo').cloneNode(true);

// var init = function() {
//   current_frame = 0;
//   total_frames = 100;
//   path = new Array();
//   length = new Array();
//   for(var i=0; i<59;i++){
//     path[i] = document.getElementById('i'+i);
//     l = path[i].getTotalLength();
//     length[i] = l;
//     path[i].style.strokeDasharray = l + ' ' + l;
//     path[i].style.strokeDashoffset = l;
//   }
//   handle = 0;
// }


// var draw = function() {
//    var progress = current_frame/total_frames;
//    if (progress > 1) {
//      console.log('done');
//      activate();
//    } else {
//      current_frame++;
//      for(var j=0; j<path.length;j++){
// 	     path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
//      }
//      handle = window.requestAnimationFrame(draw);
//    }
// };

// init();

$('#van-illo').waypoint(function() {
	// draw();
	$(this).addClass('focus');
}, {offset: 500});

// var activate = function() {
// 	$('#van-illo').addClass('done');
// }

// var rerun = function() {
//   var old = document.getElementsByTagName('div')[0];
//   old.parentNode.removeChild(old);
//   document.getElementsByTagName('body')[0].appendChild(myobj);
//   init();
//   draw();
// };


$('#bldg-illo').waypoint(function() {
  $(this).addClass('focus');
}, {offset: 500});
