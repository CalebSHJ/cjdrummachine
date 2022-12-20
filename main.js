
// play audio clip
function play(id){ 
  let sound = document.getElementById(id);
  $(sound).trigger('play');
  let displayText =  $(sound).text();
  $('.drum-info').text(displayText);
}
//keyboard function
$(document).keydown(function(e){
  if(e.key === "q" || e.key === "Q") {
    play('Q');
    $('.drum-info').text($('#Q').text());
  }
  if(e.key === "w" || e.key === "W") {
    play('W');
    $('.drum-info').text($('#W').text());
  }
  if(e.key === "e" || e.key === "E") {
    play('E');
    $('.drum-info').text($('#E').text());
  }
  if(e.key === "a" || e.key === "A") {
    play('A');
    $('.drum-info').text($('#A').text());
  }
  if(e.key === "s" || e.key === "S") {
    play('S');
    $('.drum-info').text($('#S').text());
  }
  if(e.key === "d" || e.key === "D") {
    play('D');
    $('.drum-info').text($('#D').text());
  }
  if(e.key === "z" || e.key === "Z") {
    play('Z');
    $('.drum-info').text($('#Z').text());
  }
  if(e.key === "x" || e.key === "X") {
    play('X');
    $('.drum-info').text($('#X').text());
  }
  if(e.key === "c" || e.key === "C") {
    play('C');
    $('.drum-info').text($('#C').text());
  }
});

// drum kit change
function kitChange(id){ 
  let displayText =  $(id).text();
  $('.kit-info').text(displayText);
  $('.drum-info').text("");
}

//on-off functions
  $('.off').click(function(){
    $('.kit-info').text("");
    $('.drum-info').text("");
    // $('audio').attr("src", "");
    $('button').attr("onclick", "");
    $('.off').css("opacity", "100%");
    $('.on').css("opacity", "50%");
    $('.power-light').css("opacity", "25%");
  });
  
  $('.on').click(function(){
    $('.kit-info').text("Enjoy LLDM!!");
    $('.drum-info').text("choose a drum kit");
    $('#kick').attr("onclick", "play('Q')");
    $('#hihat').attr("onclick", "play('W')");
    $('#open-hihat').attr("onclick", "play('E')");
    $('#snare').attr("onclick", "play('A')");
    $('#crash').attr("onclick", "play('S')");
    $('#ride').attr("onclick", "play('D')");
    $('#high-tom').attr("onclick", "play('Z')");
    $('#mid-tom').attr("onclick", "play('X')");
    $('#floor-tom').attr("onclick", "play('C')");
    $('#kit1').attr("onclick", "kitChange('#kit1')")
    $('#kit2').attr("onclick", "kitChange('#kit2')")
    $('#kit3').attr("onclick", "kitChange('#kit3')")
    $('.on').css("opacity", "100%");
    $('.off').css("opacity", "50%");
    $('.power-light').css("opacity", "100%");
  });
//volume Control
$('audio').attr('volume', '0.2');
$('.volume').change(function(){
  let volumelevel = parseFloat(this.value / 10);
  console.log(volumelevel);
  $('.clip').attr('volume', volumelevel);
})

