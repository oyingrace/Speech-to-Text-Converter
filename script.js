document.getElementById("btn1").addEventListener("click", function(){
    var textArea = document.getElementById("convert_text");
    textArea.select();
    document.execCommand('copy');
});



 var startButton = document.getElementById('start');
 var stopButton = document.getElementById('stop');
 var resultElement = document.getElementById('convert_text');

 var recognition = new webkitSpeechRecognition();

 recognition.lang = window.navigator.language;
 recognition.interimResults = true;

 startButton.addEventListener('click',()=>{
    recognition.start();
 });

 stopButton.addEventListener('click',()=>{
    recognition.stop();
 });

 recognition.addEventListener('convert_text', (event) =>{
    const convert_text = event.results[event.results.length - 1][0].transcript;
    resultElement.textContent = convert_text;
 });