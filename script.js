//for the copy button
document.getElementById("btn1").addEventListener("click", function(){
    var copyText = document.getElementById("convert_text");
    copyText.select();
    document.execCommand("copy");


var button = document.getElementById("btn1");
button.innerHTML = "copied!";
button.classList.add("copied");

setTimeout(function(){
    button.innerHTML = "Copy";
    button.classList.remove("copied");
}, 2000);

});


var  speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition()
 
var convert_text = $("convert_text");

var instructions = $("instructions");

var content = ""

recognition.continuous = true;

//recognition is started

recognition.onstart = function (){
    instructions.text("Speak, I'm Listening")
}

recognition.onspeechend = function(){
    instructions.text("Not speaking")
}

recognition.onerror = function(){
    instructions.text("Try Again")
}

recognition.onresult = function(event){
var current = event.resultIndex;

var transcript = event.results[current][0].transcript;

content += transcript

convert_text.val(content)
}

$("#start").click(function (event){
    if(content.length){
        content += ""
    }
    recognition.start()
});

convert_text.on('input', function (){
    content = $(this).val()
});