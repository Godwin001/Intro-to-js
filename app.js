 let quizData = [
        {
        question: "How many books are in the Bible?",
        options: [ "Seventy-three", " Thirty-two", "None of the above","Sixty-nine"],
        answer: "Seventy-three",
        },
         {
        question: "Who was a man after God's heart",
        options: [ "David", "Elijah", "Abraham", "Samuel"],
         answer: "David",
        },
         {
         question: "Abraham was a friend of who",
         options: [ "God", "Lot", "Potifer"],
         answer: "God",
        },
         {
        question: "Who Came to take the sins of the world",
        options: [ "Sampson", "Jesus", "David", "John"],
         answer: "Jesus",
        },
         {
         question: "Who wrote the book of Revelations",
         options: [ "Peter", "paul", "John"],
         answer: "John",
        },
         {
        question: "What is the Greatest Commandment",
        options: [ "Love", "10-Commandment", "Hatred"],
         answer: "Love",
        },
         {
         question: "Fruit of the holy spirit are",
         options: [ "Joy", "Peace", "Long-suffering", "Love", "All"],
         answer: "All",
        },
         {
        question: "What was feeding Elijah",
        options: [ "Scavenger", "Monkey", "Lion"],
         answer: "Scavenger",
        },
         {
         question: "Who was mary magdalene",
         options: [ "Disciple", "Market_Seller", "Villager", "Blind"],
         answer: "Disciple",
        },
        {
         question: "God the Father, Son and ",
         options: [ "Holy_spirit", "Angel", "Prophet", "Saviour"],
         answer: "Holy_spirit",
        },
        
    ];
    
    
    
    function bibleQuiz() {
    
    let correctscore = 10;
    let results = 0;   
    let wrongscore = 0;
   
   
    let dataView = document.querySelector(".quiz-data");

        let myQuiz = quizData.map(( quiz, index) => {
            return ` <div>
          
            <div class="my-4 bg-secondary container-sm" id="quiz-color" >
                
                <div class="d-flex fs-2"><p class="pe-3">${index + 1}</p>
                <p class="question"> ${quiz.question}</p></div>
                <select name="" id="select">
                <option value=" ">
                choose the correct option
                    </option>
                    ${ quiz.options.map((option)=>{
                            return `
                    <option value=${option} class="fs-3">
                         ${option}
                    </option>` })
                    }
                    </select>
                    </div >
                    <div class="d-flex bg-transparent space fs-3">
                    
                    <p class="selected" ></p>
                    <p class="correct"> </p>
                    <p class="status"> </p>
        </div>
        </div>` ;
        }); 
        
    // .join(' ') is added below to show space instead of , in the array of the objects to be displayed.
    dataView.innerHTML = myQuiz.join(' ');
          // from line 61-66 is the event listener to  listen to what the user is clicking. 
    // the selectE is trying to target the html element select so that it can be listened to 
    let selectE = document.querySelectorAll("select");

    selectE.forEach((selected, index) => {
        selected.addEventListener("change", (event) => {
            let selectedValue = event.target.value;
            document.querySelectorAll(".selected") [index].innerHTML = `Selected: ${selectedValue}`;

            document.querySelectorAll(".correct") [index].innerHTML =  `Correct: ${quizData[index].answer}`;

            if(quizData[index].answer === selectedValue) {
                document.querySelectorAll(".status")[index].innerHTML = `Status: Correct`;
            results  += correctscore;
document.querySelector(".result").innerHTML = `Total: ${results}/100`;
            }
            else{
                document.querySelectorAll(".status")[index].innerHTML = `Status: wrong`;
            results  += wrongscore;
document.querySelector(".result").innerHTML = `Total: ${results}/100`;    
            };
        });
    });
    }
    
    bibleQuiz() 
    
  




    
    
    
    



