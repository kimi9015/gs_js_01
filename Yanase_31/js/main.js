// ハンバーガーメニュー//

(function($) {
    var $body   = $('body');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $body.hasClass( open ) ) {
        $body.addClass( open );
      } else {
        $body.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $body.removeClass( open );
    });
  } )(jQuery);


// ＜筋トレメニュー作成＞/

// 鍛えたい部位を選択

$('input[type=checkbox]').change(function(){
    counter = 0;
    clicked = $(this).data('index');
    $('input[type=checkbox]').each(function(){
      if($(this)[0].checked){
        counter++;
      }
    });
    if(counter==3){    
      toDisable = clicked;
      while(toDisable==clicked){
        toDisable=Math.round(Math.random()*2);
      }
      $("input:eq("+toDisable+")")[0].checked = false;
    }
  });


// const btn = document.querySelector("#btn");
// btn.onclick = function(e){
//     alert("⚠️死ぬ気でやれ!!!");
// }


// $(function(){
//     $('btn').click(function(){
//         if($('#mune').prop("checked") == true){
//             $('#menuhyouji').text("胸を鍛える！<br/>");
//         }else if($('#kata').prop("checked") == true){
//             $('#menuhyouji').html("肩を鍛える！<br/>");
//         }else if($('#ude').prop("checked") == true){
//             $('#menuhyouji').html("腕を鍛える！<br/>");
//         }else if($('#fukkinn').prop("checked") == true){
//             $('#menuhyouji').html("腹筋を鍛える！<br/>");
//         }else if($('#hiit').prop("checked") == true){
//             $('#menuhyouji').html("HIIT！<br/>");
//         }else{
//             $('#menuhyouji').html("選択されていません");
//         }
//     })
// })


// 鍛えたい部位をセレクトボックスで選択し、選択した部位に関するYouTube動画を表示する

$('#mune_2').hide();
$('#kata_2').hide();
$('#ude_2').hide();
$('#fukkinn_2').hide();
$('#hiit_2').hide();


$(function(){
    $('#mune').change(function(){
        var mune = $('#mune').prop('checked');
        if(mune){
            $('#mune_2').show()
        }else{
            $('mune_2').hide()
            $('#mune_3').text("胸は鍛えない？")
        }
    });
});

$(function(){
    $('#kata').change(function(){
        var mune = $('#kata').prop('checked');
        if(kata){
            $('#kata_2').show()
        }else{
            $('#kata_2').hide()
            $('#kata_3').text("肩は鍛えない？")
        }
    });
});

$(function(){
    $('#ude').change(function(){
        var ude = $('#ude').prop('checked');
        if(ude){
            $('#ude_2').show()
        }else{
            $('#ude_2').hide()
            $('#ude_3').text("腕は鍛えない？")
        }
    });
});

$(function(){
    $('#fukkinn').change(function(){
        var fukkinn = $('#fukkinn').prop('checked');
        if(fukkinn){
            $('#fukkinn_2').show()
        }else{
            $('#fukkinn_2').hide()
            $('#fukkinn_3').text("腹筋は鍛えない？")
        }
    });
});

$(function(){
    $('#hiit').change(function(){
        var hiit = $('#hiit').prop('checked');
        if(hiit){
            $('#hiit_2').show()
        }else{
            $('#hiit_2').hide()
            $('#hiit_3').text("HIITやらないの？")
        }
    });
});



// ＜インターバルワークアウト＞

// インターバルタイマー設定

var msg;
var number;
var count = 0;
var timer_id;

function startShowing() {
   count = 0;
   number = document.getElementById("number").value;
   document.getElementById("startcount").disabled = true;
   countup();
}

function stopShowing() {
   count = 0;
   clearTimeout(timer_id);
   document.getElementById("startcount").disabled = false;
}

function countup() {
   count ++;
   document.getElementById("PassageArea").innerHTML = count;
   console.log(count % number);
   if(count % number == 0){
      sound1();
   }else{
      sound2();
   }
   timer_id = setTimeout(countup,1000);
}

function sound1(){
	var id = 'sound-file1';
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' ){
		document.getElementById( id ).currentTime = 0;
	}
	document.getElementById( id ).play() ;
}

function sound2(){
	var id = 'sound-file2';
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' ){
		document.getElementById( id ).currentTime = 0;
	}
	document.getElementById( id ).play() ;
}


// ＜どうしてもやる気が出ないときはこちら＞

// やる気の出る名言画像を表示

let = imageArry = ["img/meigen_1.png","img/meigen_2.jpeg","img/meigen_3.jpeg","img/meigen_4.jpeg","img/meigen_5.jpeg","img/meigen_6.jpeg","img/meigen_7.jpeg"];
const image = document.querySelector("#image")
const imageBtn = document.querySelector("#imageBtn")
image.src = imageArry[0];

imageBtn.addEventListener("click", function(){
    if(imageBtn.textContent=="やる気の出る名言を見る"){
        imageBtn.textContent = "ストップ"
        timerId = setInterval(() => {
            let imageIndex = Math.floor(Math.random()* imageArry.length);
            image.src = imageArry[imageIndex];
        }, 200);
    }else{
        imageBtn.textContent = "やる気の出る名言を見る";
        clearInterval(timerId);
    }
})

