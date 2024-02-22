function startQuestions() {
   document.getElementById("questions").style.display = "block";
 }
 
 function answerYes() {
   document.getElementById("questions").style.display = "none";
     document.getElementById("que").style.display = "none";
     document.getElementById("init").innerText = "yayyy yayyyy! 🎉🎉🎉";
   document.getElementById("message").style.display = "block";
   document.getElementById("messageText").innerText = "eppud podhamo cheppu";
   showConfetti()
}
 
 function answerNo() {
   document.getElementById("questions").style.display = "none";
   document.getElementById("que").style.display = "none";
   document.getElementById("init").innerText = "YaY! YaY! 🎉🎉🎉";
   document.getElementById("message").style.display = "block";
   document.getElementById("messageText").innerText = "definitely yes nokkav....hehe....eppud podhamo cheppu";
   showConfetti()

}
 
// Function to show confetti
function showConfetti() {
   const confettiSettings = {
     target: 'confetti-canvas',
     respawn: true,
     colors: ['#ff0000', '#00ff00', '#0000ff'], 
   };
 
   const confetti = new ConfettiGenerator(confettiSettings);
   confetti.render();
   setTimeout(() => {
     confetti.clear();
   }, 5000);
 }
 