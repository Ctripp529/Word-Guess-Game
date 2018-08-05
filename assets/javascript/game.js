        var characterNames = ["jim", 
        "pam", 
        "michael", 
        "dwight",
         "angela", 
         "oscar", 
         "kevin", 
         "meredith", 
         "ryan", 
         "kelly", 
         "toby",
         "creed",
         "stanley",
         "darryl",
         "phyllis",
         "roy"];

        var usedLetters = [];
        var selectedWord = "";
        var secretWord = [];
        var lives = 7;
        var wins = 0;
        var losses = 0;
        var underScores = [];
        var numberBlanks = 0;
        
        function startGame() {
            selectedWord = characterNames[Math.floor(Math.random() * (characterNames.length))];
            secretWord = selectedWord.split("");
            numberBlanks = secretWord.length;
        
        
            lives = 7;
            usedLetters = [];
            underScores = [];
        
            for (var i = 0; i < numberBlanks; i++) {
                underScores.push("_");
            }
            
            document.getElementById("currentWord").innerHTML = underScores.join(" ");
            document.getElementById("totalWins").innerHTML = wins;
            document.getElementById("lives").innerHTML = lives;
            document.getElementById("usedLetters").innerHTML = usedLetters.join(" ");
            
        };
        
        
        function evaluateGuess(letter) {
            var letterCheck = false;
            for (var i = 0; i < numberBlanks; i++) {
                if (secretWord[i] === letter) {
                    letterCheck = true;
                }
            }
            if (letterCheck) {
                for (var i = 0; i < numberBlanks; i++) {
                    if (secretWord[i] === letter) {
        
                        underScores[i] = selectedWord[i];
                    }
                }
        
            } else {
                usedLetters.push(letter);
                lives--;
        
            }
        
        };
        startGame();
        
        function resetGame() {
            document.getElementById("lives").innerHTML = lives;
            document.getElementById("usedLetters").innerHTML = usedLetters.join(" ");
            document.getElementById("currentWord").innerHTML = underScores.join("  ");
            document.getElementById("status").src="assets/images/status.png";

            if (secretWord.toString() == underScores.toString()) {
                wins++
                startGame();
                document.getElementById("status").src="assets/images/youwin.jpeg";
            } else if (lives === 0) {
                losses++
                startGame();
                document.getElementById("status").src="assets/images/youlose.jpg" ;
                console.log("this is losses count: " + losses)
            }
        
        };
        
        startGame();
        document.onkeyup = function (event) {
            var letterGuessed = event.key;
            console.log(letterGuessed);
            evaluateGuess(letterGuessed);
            resetGame();
        
        };