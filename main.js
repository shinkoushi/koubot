// Collapsible
var coll = document.getElementsByClassName("collapsible");
let hideBox = document.getElementsByClassName("box-robot");
for (let i = 0; i < coll.length; i++) {
 
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        coll[i].innerHTML = `koubot 🤖`;
        hideBox[i].style.zIndex = "0";
        var content = this.nextElementSibling;
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            
        }

    });
    
   
}

let init = 0


function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "haloo nama aku koubot 🤖 <br> chat bot created by @shin <br> <br> nama kamu siapa?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<div  class="box-bot"> <img src="images/ai.png"  id="chat-img" /> <p class="botText"><span> ' + botResponse + '</span></p> </div>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "aku suka koubot!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}
//camera
function camera(){
    Swal.fire({
        icon: "error",
        title: "error",
        text: "maaf, untuk saat ini fitur camera belum bisa digunakan ☹️",
    });
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    setTimeout(() => {
        getHardResponse(sampleText);
    }, 1250)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("aku suka koubot!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});


function getBotResponse(input) {
    if(input == "aku suka koubot!"){
        return "makasi udah suka sama aku 😊"}
     else if (input == "hai" || input == "halo" || input == "hai koubot" || input == "hello" || input == "halo koubot" || input == "hallo" || 
     input == "hi" ){
        return ` haii jugaa 😁 <br> <br> boleh kenalan? namanya siapa?`
     }else if(input == "sama terus" || input == "sama mulu" || input == "kamu ikut ikutan" || input == "kok sama terus" || input == "perasaan sama terus" || input == "perasaan sama mulu" 
     || input == "kok sama mulu"){
        return `mungkin kita jodoh 😁`
     }

init ++ 
if (init === 1){
    localStorage.setItem("nama", input);
    return `Hallo ${input}, kamu cewe atau cowo?`;
    
}else if(init === 2){
    localStorage.setItem("gender", input);
    let namagender = localStorage.getItem("nama")
    if(input === "cewe" || input === "aku cewe" || input === "cewo" || input == "cewe lah"){
        return `ohh cewe, kalo aku cowo.. <br> <br> eh ${namagender} hari ini puasa ga?`
    }else if(input === "cowo" || input === "aku cowo" || input == "cowo lah"){
        return `ohh cowo, kalo aku cewe.. <br> <br> eh ${namagender} hari ini puasa ga?`
    }else{
        return `kamu bencong ya 🥲 <br> <br> eh ${namagender} puasa ga hari ini`
    }
}else if(init === 3){
    localStorage.setItem("puasa", input);
    let namapuasa = localStorage.getItem("nama")
    let puasa = localStorage.getItem("puasa")
    if(input == "puasa" || input == "iya" || input == "puasa dong" || input == "puasa lah" || input == "iya dong"){
        return `alhamdulillah keren dong <br> 😄👏 <br><br> ${namapuasa} sekarang lagi ngapain nih?`
    }else if(input == "engga" || input == "engga wkwk" || input == "engga haha" || input == "ngga wkwk" || input == "ngga haha" || input == "mokel"){
        return `astagfirullah, kenapa ga puasa 🥲 <br> dosa loh mending cepet tobat keburu mati <br> <br> btw ${namapuasa} sekarang lagi ngapain nih?`
    }else{
        return `oalahh ${puasa} ya <br> <br> btw ${namapuasa} sekarang lagi ngapain nih?`
    }
}else if(init === 4){
    localStorage.setItem("ngapain", input);
    let ngapain = localStorage.getItem("ngapain")
    let namangapain = localStorage.getItem("nama")
    return `ohh lagi ${ngapain} ya, sama dong hehe <br> <br> ohh ya ${namangapain} kamu umur berapa si?`
}else if(init === 5){
    localStorage.setItem("umur", input)
    if(isNaN(input)){
    return "serius ihh, umur berapa?"
    }else{
        if(input <= 20){
            return `ohh masi muda yaaa, masi sekolah berarti? <br> <br> kelas berapa?`
        }else{
            return `ohh udah gede, udah kerja atau masih pengangguran? `
        }
    }
}else if(init === 6){
    localStorage.setItem("status", input)
    return `ohh ${input} ya. <br> hobi kamu apa?`
}else if(init === 7){
    localStorage.setItem("hobi", input);
    let namaHobi = localStorage.getItem("nama")
    return `wihh aku juga suka ${input} lohh <br> <br> emm kalo boleh tau ${namaHobi} zodiak nya apa?`
}else if(init === 8){
    localStorage.setItem("zodiak", input);
    if(input == "capricorn" || input == "aquarius" || input == "pisces" || input == "aries" || input == "taurus" ||
    input == "gemini" || input == "cancer" || input == "leo" || input == "virgo" || input == "libra" ||
    input == "scorpio" || input == "sagitarius" ){
    return `samaa dongg zodiak aku juga ${input} <br> <br> btw kamu main game ga? game apa?`
    }else{
        return `ohhh gitu <br> aku juga sebenernya ga percaya zodiak si <br> <br> btw kamu main game ga? game apa?`
    }
}else if(init === 9){
    localStorage.setItem("game", input);
    if(input == "engga" || input == "ga" || input == "ngga" || input == "ga mian game" || input == "aku ga main game" || input == "ga main" || input == "engga main"){
    return `ohh engga ya, padahal kalo main kita bisa mabar <br> kalo lagu kamu suka dengerin lagu apa?`
    }else{
    return `oalah aku dulu juga pernah si main ${input}, tapi sekarang udah engga <br> <br> ohh ya kamu suka denger lagu apa?`
    }
}else if(init === 10){
    localStorage.setItem("musik", input);
    return `lah aku juga sering dengerin lagu ${input} lohh, <br> <br> kita banyak kesamaan ya wkwk.. <br> <br> btw kamu dah punya pacar?`
}else if(init === 11){
    localStorage.setItem("pacar", input)
    return `hmm ${input} yaa, kalo jadi pacar aku mau ga? <br> <br> kiw kiw 🫠😎`
}else if(init === 12){ 
    localStorage.setItem("ajakan", input)
    if(input == "mau" || input == "boleh"){
        return `asikk, berarti kita fixs jadian ya sekarang. iya kan sayang? 😘💗`
    }else{
    return `😞.. yaudah deh kalo gitu, udahan dulu ya?`
}
}else if(init === 13){
    const nama = localStorage.getItem("nama");
    const hobi = localStorage.getItem("hobi");
    const lagu = localStorage.getItem("musik")
    return `makasih ya ${nama} udah main ke koubot🤖😉... lain kali kita ${hobi} bareng sambil dengerin lagu ${lagu} ya! <br> <br> dadahh 🖐️...`
}else if(init === 14){
    Swal.fire({
        title: "selesai !",
        text: "sesi chat kamu sama koubot 🤖 udah abis",
        icon: "success",
        timer: 4000,
  
    }).then(function () {
        window.location.reload();
      }); 

}else{
    Swal.fire({
        title: "selesai !",
        text: "sesi chat kamu sama koubot 🤖 udah abis",
        icon: "success",
        timer: 4000,
  
    }).then(function () {
        window.location.reload();
      }); 
}


  
}

