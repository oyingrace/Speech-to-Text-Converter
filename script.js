document.getElementById("btn1").addEventListener("click", function(){
    var textArea = document.getElementById("convert_text");
    textArea.select();
    document.execCommand('copy');
});



function runSpeechRecognition(){

    var convert_text = document.getElementById("convert_text");
    var action = document.getElementById("action");
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

    var recognition = new SpeechRecognition();
    console.log(recognition);

    recognition.onstart = function (){
        action.innerHTML = "<small> Listening, please speak...</small>"
    }
    recognition.onspeechend = function (){
        action.innerHTML = "<small> Stopped Listening, hope you're done...</small>"
    }
    recognition.onresult = function (event){
       var transcript = event.result[0][0].transcript;
        var confidence = event.result[0][0].confidence;

        console.log(transcript);
        console.log(confidence);

        convert_text.innerHTML = "<b>Text:</b>"
        + transcript;
    }
recognition.start();
}
