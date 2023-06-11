let frameGenerated = false;
ans = 0;
quest = 0;

//---------Reset------------------
// Get the reset button
const resetButton = document.getElementById('resetButton');

// Define the action to be performed when the reset button is clicked
function resetButtonClickHandler() {
  // Reset the project
  location.reload(); // Reload the page to reset everything
}

// Add click event listener to the reset button
resetButton.addEventListener('click', resetButtonClickHandler);


//----------------Waiting Mode-------------
// Function to toggle between sleeping mode and terminal page
function toggleMode() {
    const sleepingMode = document.getElementById('sleeping-mode');
    const terminalPage = document.getElementById('terminal-page');
    const outcomeWindow = document.getElementById('outcomeWindow');
    const frame = document.getElementById('frame');
    const characterButtons = document.getElementById('characterButtons');
    
    sleepingMode.classList.toggle('hidden');
    terminalPage.classList.toggle('hidden');
    
    characterButtons.classList.add('hidden');


    if (!frameGenerated) {
        frameGenerated = true;
        frame.classList.toggle('hidden');
        terminal.addEventListener('click', generateLine);
    }
}

//-------------Generating Welcoming Lines------------------
  const commands = [
    'Last login:.... on ttys00',
    'user@user-MBP-2 ~ %',
    'Last login:.... on ttys00',
    'user@user-MBP-2 ~ %',
    'Last login:.... on ttys00',
    'user@user-MBP-2 ~ %'
];

const outputs = [
    'Hi Stranger! I am glad you have time for me.',
    'To embark on this captivating journey, follow these instructions closely;', 
    'Use your mouse click to generate lines and initiate interactions with me.',
    'Do not hold back—express yourself freely!',
    'Lets see if you are going to be able to fulfill my longing for meaningful connections and conversations.',
    'Now, Please choose a random character of me!'
];

const terminal = document.getElementById('terminal-page');
const outputContainer = document.getElementById('outputContainer');
let currentIndex = 0;

window.onload = function() {
    // Add click event listener to toggle mode
    document.addEventListener('click', toggleMode);
    terminal.addEventListener('click', generateLine);
}


function generateLine() {
    if (currentIndex < commands.length) {
        const outputElement = document.createElement('div');
        outputElement.className = 'output';

        const promptElement = document.createElement('span');
        promptElement.className = 'prompt';
        promptElement.textContent = '$';

        const commandElement = document.createElement('span');
        commandElement.className = 'command';
        outputElement.appendChild(promptElement);
        outputElement.appendChild(document.createTextNode(' '));
        outputElement.appendChild(commandElement);
        outputContainer.appendChild(outputElement);

        typeCommand(commands[currentIndex], commandElement, () => {
            if (outputs[currentIndex] !== '') {
                const outputTextElement = document.createElement('div');
                outputTextElement.textContent = outputs[currentIndex];
                outputContainer.appendChild(outputTextElement);
            }
            currentIndex++;

            if (currentIndex === commands.length) {
                 terminal.addEventListener('click',cleanUp);
                showCharacterButtons();
            }
            
        });
    }
}

function cleanUp() {
    outputContainer.innerHTML = ''; // Remove all child elements from outputContainer
}

function showCharacterButtons() {
    const characterButtons = document.getElementById('characterButtons');
    characterButtons.classList.remove('hidden');
  }

function typeCommand(command, element, callback) {
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < command.length) {
            element.textContent += command.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            callback();
        }
    }, 100);
}

//--------Character Choosen---------------------

let currentIndexQuestions = 0;//commands.length - questions.length;
const outputContainerQuestions = document.getElementById('outputContainerQuestions');
let timerInterval; // Variable to store the timer interval

const timerDuration = 10000;
let timerId;

const intro ='You will be asked 3 questions, and you will have only 10 seconds to respond to each question. Select your options using your mouse and observe how they affect my mood meter. Your challenge is to make me happy. Lets see if you can bring joy to my world!'

const questionsChar1= ['I made this picture for mommy and daddy. Do you think they will love it as much as I do?', 
'Do you think I have what it takes to be the star of the school play? I want to impress everyone.', 
'Will you come to my birthday party? I hope to feel loved and special with your presence.',
''];

const generateChar1Definition= 'Hello I am Lily, a young and eager child whose wide eyes are filled with wonder. Incessantly seeking praise and attention, I long for validation and reassurance in my every action, hoping to find a place where I truly belong. Now, I am gonna ask questions. Get ready!';

const positiveAnswers = [ //Char1 question1 positive answers
  ['Yes, I am sure they will love it! Your picture is amazing!',
    'Absolutely! Your talent shines through in every stroke.',
    'Of course! Your artistic skills are impressive, and I am certain your parents will appreciate the effort.'],
    ['Absolutely! You have an incredible stage presence, and your talent is bound to impress everyone.',
    'Without a doubt! Your dedication and hard work will shine through.',
    'Definitely! Your performance skills are outstanding, and I am sure everyone will be amazed.'
  ], //Char1 question2 positive answers
    ['Absolutely! I will be thrilled to attend your birthday party and celebrate with you.',
    'Of course! Your birthday party will be an event filled with love, joy, and cherished moments.',
    'Definitely! I will be there to share the love and happiness with you.'
    ] //Char1 question3 positive answers
  ];
  
  const negativeAnswers = [ //Char1 question1 negative answers
    ['Your picture lacks originality and fails to stand out among other artworks.',
    'The composition of your picture is unbalanced, making it visually unappealing.',
    'Your choice of colors appears dull and uninspiring, diminishing the overall impact of the picture.'],
    [
      'Honestly, you still have a long way to go. Keep practicing and honing your craft.',
      'You need to work on your stage presence and delivery.',
      'While your enthusiasm is commendable, your current acting abilities may not be enough to leave.'
    ], //Char1 question2 negative answers
    ['While I will not be able to attend your birthday party.',
    'I will not be able to make it to your birthday party.',
    'Keep in mind that the presence of loved ones is not the sole measure of feeling loved and special. Your own worth is not dependent on external factors.'
    ] //Char1 question3 negative answers
];

const questionsChar2= ['I worked tirelessly on this presentation. I wonder if it made a lasting impression. What are your thoughts?', 
'After my recent promotion, I try to act humble, but deep down, I really crave acknowledgment for my accomplishments. Can you acknowledge them?', 
'There is an important event coming up. It would mean a lot to me if you could be there to support me. Will you come?'];

const generateChar2Definition= 'Hello, I am James, a grown man plagued by self-doubt and a relentless need for validation. Driven by an insatiable hunger for recognition, I seek constant reassurance from others, desperately searching for a sense of purpose and worth. Now, I am gonna questions. Get ready!'

const positiveAnswers2 = [ //Char2 question1 positive answers
  ['Yes, your presentation was absolutely outstanding!',
    'Without a doubt! Your hard work and dedication shone through.',
    'Absolutely! Your presentation was engaging, well-prepared.'
  ],
    [
      'Absolutely! Your promotion is well-deserved, and I acknowledge your hard work.',
      'Without a doubt! Your recent promotion is a testament to your skills and accomplishments.',
      'Of course! Your promotion is a clear recognition of your talent and effort.'
  ], //Char2 question2 positive answers
  ['Absolutely! Your event is important to you, and I would be honored to support you. Count me in!',
  'Of course! Your event holds significance, and I want to be there to support and cheer you on.',
  'I would not miss it for anything! Your event is important to you.'
  ] //Char2 question3 positive answers
  ];
  
  const negativeAnswers2 = [ //Char2 question1 negative answers
  ['While your presentation was decent, it may not have left a lasting impression on everyone.',
  'Your presentation had potential, but it lacked a strong hook.',
  'Although your effort is evident, the content of your presentation did not quite resonate with the audience.'
  ],
    ['While your recent promotion is commendable, it is important to maintain humility.',
    'Seeking constant acknowledgment for your accomplishments may hinder your personal.',
    'While it is natural to desire acknowledgment for your promotion.'
    ], //Char2 question2 negative answers
    ['While I understand the significance of the event to you, I may not be able to attend due to prior commitments.',
    'It is important to remember that your event holds personal significance, but others may have their own commitments.',
    'While I appreciate the invitation, I may not be able to attend the event.'
    ]//Char2 question3 negative answers
];

const questionsChar3= ['I put together this outfit today, hoping to feel confident and beautiful. Did you notice? What do you think?', 
'Sometimes, I can not help but worry if you will ever leave me. Can you provide reassurance and let me know I am important to you?', 
'We have been spending so much time together, and it makes me wonder if you see us as a couple. Would you ever introduce me to others as more than just a friend?'];

const generateChar3Definition= 'Hello, I am Grace, a woman of captivating charm, hides a deep yearning for love and attention beneath my charismatic facade. Struggling with an intense fear of abandonment, I rely on external validation to validate my self-worth, dancing delicately between vulnerability and charm. Now, I am gonna ask questions. Get ready!'

const positiveAnswers3 = [ //Char3 question1 positive answers
   
  ['Absolutely! I noticed your outfit right away, and you look absolutely stunning.',
    'Without a doubt! Your outfit caught my attention. You have got great style!',
    'Of course! Your outfit is fabulous, and you look incredibly confident and beautiful.'],


  ['Absolutely! You are incredibly important to me.',
    'Without a doubt! You hold a special place in my heart.',
    'You are important to me, and I am here for you.' 
  ], //Char3 question2 positive answers
  ['Absolutely! I see us as more than just friends, and I would be proud to introduce you to others as my partner.',
  'Without a doubt! Our time together has deepened our connection, and I see you as more than just a friend.',
  'Of course! The time we have spent together has shown me that we have something unique.'
  ] //Char3 question3 positive answers
  ];
  
  const negativeAnswers3 = [ //Char3 question1 negative answers
  ['While I did notice your outfit, it may not have stood out as much as you were hoping.',
  'Your outfit is nice, but it may not have had the impact you were expecting.',
  'While your outfit is decent, it may not have provided the level of confidence and beauty you were seeking.'
  ],
    ['It is understandable to have concerns, but it is important to remember that nobody can predict the future.',
    'While I understand your worries, it is important to address them through open communication rather than seeking constant reassurance.',
    'It is natural to have occasional concerns, but it is important not to let them overshadow the present.'
    ], //Char3 question2 negative answers
    ['While we have been spending a lot of time together.',
    'It is crucial to have a clear understanding of our relationship dynamics before introducing each other to others.',
    'The amount of time we spend together does not automatically define our relationship status.'
    ]//Char3 question3 negative answers
];

const finalmente1 = ['Congratulations on completing the game! Pleasing needy me was not an easy task. In real life, you might encounter similar situations. Here are some tips; Empathy: Put yourself in their shoes and show genuine understanding. Active Listening: Give them your full attention and listen carefully to their words and emotions. Validation: Let them know their feelings are valid and important. Set Boundaries: Balance supporting them with taking care of yourself. Open Communication: Encourage honest and open dialogue. Remember, you cannot always please everyone completely. Cultivate emotional intelligence, approach others with empathy, and embrace genuine connections in your interactions. Good luck!'];



const commands2 = [
    'Last login:.... on ttys00',
    'user@user-MBP-2 ~ %',
    'Last login:.... on ttys00',
    ''
];

const pumpUpTheJam = [
  'Hmm, not quite there yet.',
  'Uh-oh! The character is mood dipped again, showing they are not easily pleased.',
  'No matter what you do, the characters mood continues to decline. They are proving to be quite the challenge.',
  'It is a tough task to please this character! Your positive response only led to a minor mood decrease. Keep trying!'
]

//--------Character1---------------------
// Get buttons
const character1Button = document.querySelector('.characterButton:nth-of-type(1)');

// Define the action to be performed when character1 button is clicked
function character1ButtonClickHandler() {
  console.log('Character 1 button clicked!');
  outcomeWindow.classList.toggle('hidden');
  generateIntro();
  setTimeout(()=>{
    cleanUp2();
  },15000);
  setTimeout(()=>{
    generateDef1();
  },15900);
  setTimeout(()=>{
    cleanUp2();
    generateQuestionChar1();
  },30000);
}

function cleanUp2() {
  outputContainerQuestions.innerHTML = '';
}

function generateDef1(){
    const generateChar1Def = document.createElement('div');
    generateChar1Def.className = 'output';

    const promptElementQ = document.createElement('span');
    promptElementQ.className = 'prompt';
    promptElementQ.textContent = '$';

    generateChar1Def.appendChild(document.createTextNode(' '));
    generateChar1Def.textContent = generateChar1Definition;
    outputContainerQuestions.appendChild(generateChar1Def);
}

function generateIntro(){
  const intro1 = document.createElement('div');
    intro1.className = 'output';

    const promptElementQ = document.createElement('span');
    promptElementQ.className = 'prompt';
    promptElementQ.textContent = '$';

    intro1.appendChild(document.createTextNode(' '));
    intro1.textContent = intro;
    outputContainerQuestions.appendChild(intro1);
}

function generateQuestionChar1() {

  if (currentIndexQuestions < commands2.length) {
    const questionsElement = document.createElement('div');
    questionsElement.className = 'output';

    const promptElementQ = document.createElement('span');
    promptElementQ.className = 'prompt';
    promptElementQ.textContent = '$';

    const commandElement = document.createElement('span');
    commandElement.className = 'command';
    questionsElement.appendChild(promptElementQ);
    questionsElement.appendChild(document.createTextNode(' '));
    questionsElement.appendChild(commandElement);
    outputContainerQuestions.appendChild(questionsElement);

    typeCommand(commands2[currentIndexQuestions], commandElement, () => {
        if (questionsChar1[currentIndexQuestions] !== '') {
          const questionTextElement = document.createElement('div');
          questionTextElement.textContent = questionsChar1[currentIndexQuestions];
          outputContainerQuestions.appendChild(questionTextElement);
        }
  
        const positiveAnswersElement = document.createElement('div');
        positiveAnswersElement.className = 'answers';
  
        const negativeAnswersElement = document.createElement('div');
        negativeAnswersElement.className = 'answers';
  
        for (let i = 0; i < positiveAnswers[0].length; i++) {
          const positiveButton = document.createElement('button');
          positiveButton.textContent = positiveAnswers[ans][i];
          positiveButton.className = 'positive';
          positiveAnswersElement.appendChild(positiveButton);
        }

        for (let i = 0; i < negativeAnswers[0].length; i++) {
          const negativeButton = document.createElement('button');
          negativeButton.textContent = negativeAnswers[ans][i];
          negativeButton.className = 'negative';
          negativeAnswersElement.appendChild(negativeButton);
        }

        outputContainerQuestions.appendChild(positiveAnswersElement);
        outputContainerQuestions.appendChild(negativeAnswersElement);
  
        // Remove the event listener from character1 button
        character1Button.removeEventListener('click', character1ButtonClickHandler);
        // Add event listeners to answer buttons
        positiveAnswersElement.addEventListener('click', positiveAnswerButtonClickHandler);
        negativeAnswersElement.addEventListener('click', negativeAnswerButtonClickHandler);
  
        currentIndexQuestions++;
  
        if (currentIndexQuestions === commands2.length) {
          // All questions have been generated
          // You can add your desired logic here
        } else if(currentIndexQuestions==3){
          startTimer2();
          addEventListener('click', pumpUpTheJamGenerate);
          setTimeout(()=>{
            cleanUp2();
            generateFinalWindow();
            removeEventListener('click',pumpUpTheJamGenerate);
          },10000);
        }else {
          startTimer();
          addEventListener('click', pumpUpTheJamGenerate);
        } 
      
    });
  }

}

function generateFinalWindow(){
  const finalmente = document.createElement('div');
    finalmente.className = 'output';

    const promptElementQ = document.createElement('span');
    promptElementQ.className = 'prompt';
    promptElementQ.textContent = '$';

    for (let i = 0; i < finalmente1.length; i++) {
      finalmente.appendChild(document.createTextNode(''));
      finalmente.textContent = finalmente1[i];
      outputContainerQuestions.appendChild(finalmente);
    }
}

let currentMessageIndex = 0;

function pumpUpTheJamGenerate(){
  const hype = document.getElementById('messages');
  hype.textContent = pumpUpTheJam[currentMessageIndex];
  currentMessageIndex = (currentMessageIndex + 1) % pumpUpTheJam.length;
}

// Add click event listener to the character1 button
character1Button.addEventListener('click', character1ButtonClickHandler);

//------------------Joy Meter--------------------

// Get the joy meter elements
const joyMeterFrame = document.getElementById('joyMeterFrame');
const joyMeterBar = document.getElementById('joyMeterBar');

// Set the initial joy level (value between 0 and 100)
let joyLevel = 10;
let previousJoyLevel = 0;

// Update the joy meter display and show/hide GIFs based on joy level
function updateJoyMeter() {
  // Calculate the height of the joy bar based on the joy level
  const barHeight = joyLevel + '%';

  // Apply the height to the joy bar element
  joyMeterBar.style.height = barHeight;

  // Update joy meter bar color based on joy level
  joyMeterBar.classList.remove('yellow', 'red');
  if (joyLevel < 60) {
    joyMeterBar.classList.add('yellow');
  }
  if (joyLevel < 30) {
    joyMeterBar.classList.add('red');
  }

  // Show/hide GIFs based on joy level
  const toHappy = document.getElementById('toHappy');
  const toSad = document.getElementById('toSad');
  const toNeutral = document.getElementById('toNeutral');
  const toCry = document.getElementById('toCry');
  const gameOver = document.getElementById('gameOver');
  const container = document.getElementById('gameover');

  toHappy.classList.add('hidden');
  toSad.classList.add('hidden');
  toNeutral.classList.add('hidden');
  toCry.classList.add('hidden');
  container.classList.add('hidden');
  gameOver.classList.add('hidden');

  if (joyLevel > previousJoyLevel) {
    toNeutral.classList.add('hidden');
    toHappy.classList.remove('hidden');
  } else if (joyLevel < previousJoyLevel) {
    toNeutral.classList.add('hidden');
    toSad.classList.remove('hidden');
  } else if (joyLevel === 0 ){
    toCry.classList.remove('hidden');
    setTimeout(()=>{
      outcomeWindow.classList.add('hidden');
      outputContainerQuestions.classList.add('hidden');
      container.classList.remove('hidden');
      gameOver.classList.remove('hidden');
    },1000);
} 



  // Update the previous joy level to the current value
  previousJoyLevel = joyLevel;
}

// Call the updateJoyMeter function initially to display the joy meter and GIFs
updateJoyMeter();

// Function to handle positive answer button click
function positiveAnswerButtonClickHandler(event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Positive answer button clicked!');
    // Increase joy level
    joyLevel += 10;
    
    // Make sure joy level does not exceed 100
    if (joyLevel > 100) {
      joyLevel = 100;
      generateFinalWindow();
    }
    // Update joy meter display
    updateJoyMeter();

    // Delay the decrease by 1 second
    setTimeout(decreaseAfterIncrease, 500);
  }
}

function decreaseAfterIncrease(){
  joyLevel-=5;

  if (joyLevel < 0) {
    joyLevel = 0;
  }
  updateJoyMeter();
}

// Function to handle negative answer button click
function negativeAnswerButtonClickHandler(event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Negative answer button clicked!');
    // Decrease joy level
    joyLevel -= 10;
    // Make sure joy level does not go below 0
    if (joyLevel < 0) {
      joyLevel = 0;
    }
    // Update joy meter display
    updateJoyMeter();

  }
}




//----------------Timer---------------------
// Function to start the timer countdown
function startTimer() {
  let seconds = 10;

  function updateTimer() {
    const timerElement = document.getElementById('timer');
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    timerElement.textContent = minutes + ':' + remainingSeconds;
    seconds--;

    if (seconds < 0) {
      clearInterval(timerInterval);
      cleanUp2();
      generateQuestionChar1();
      ans = ans + 1;
      if (ans == 3) {
        ans = 0;
      }
    }
  }

  updateTimer(); // Display initial value immediately

  // Start the timer interval
  timerInterval = setInterval(updateTimer, 1000);
}


  function startTimer2() {
    let seconds = 10;
   
  
    function updateTimer() {
      const timerElement = document.getElementById('timer');
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    timerElement.textContent = minutes + ':' + remainingSeconds;
    seconds--;
  
      if (seconds < 0) {
        clearInterval(timerInterval);
        cleanUp2();
        }
    }
  
    updateTimer(); // Display initial value immediately
  
    // Start the timer interval
    timerInterval = setInterval(updateTimer, 1000);
  }

//character 2 button clicked.
// Get buttons
const character2Button = document.querySelector('.characterButton:nth-of-type(2)');

// Define the action to be performed when character1 button is clicked
function character2ButtonClickHandler() {
  console.log('Character 2 button clicked!');
  outcomeWindow.classList.toggle('hidden');
  generateIntro();
  setTimeout(()=>{
    cleanUp2();
  },15000);
  setTimeout(()=>{
    generateDef2();
  },15900);
  setTimeout(()=>{
    cleanUp2();
    generateQuestionChar2();
  },30000);
}

function generateDef2(){
    const generateChar2Def = document.createElement('div');
    generateChar2Def.className = 'output';

    const promptElementQ = document.createElement('span');
    promptElementQ.className = 'prompt';
    promptElementQ.textContent = '$';

    generateChar2Def.appendChild(document.createTextNode(' '));
    generateChar2Def.textContent = generateChar2Definition;
    outputContainerQuestions.appendChild(generateChar2Def);
}

function generateQuestionChar2() {

    if (currentIndexQuestions < commands2.length) {
      const questionsElement = document.createElement('div');
      questionsElement.className = 'output';
  
      const promptElementQ = document.createElement('span');
      promptElementQ.className = 'prompt';
      promptElementQ.textContent = '$';
  
      const commandElement = document.createElement('span');
      commandElement.className = 'command';
      questionsElement.appendChild(promptElementQ);
      questionsElement.appendChild(document.createTextNode(' '));
      questionsElement.appendChild(commandElement);
      outputContainerQuestions.appendChild(questionsElement);
  
      typeCommand(commands2[currentIndexQuestions], commandElement, () => {
          if (questionsChar2[currentIndexQuestions] !== '') {
            const questionTextElement = document.createElement('div');
            questionTextElement.textContent = questionsChar2[currentIndexQuestions];
            outputContainerQuestions.appendChild(questionTextElement);
          }
    
          const positiveAnswers2Element = document.createElement('div');
          positiveAnswers2Element.className = 'answers';
    
          const negativeAnswers2Element = document.createElement('div');
          negativeAnswers2Element.className = 'answers';
    
          for (let i = 0; i < positiveAnswers2[0].length; i++) {
            const positiveButton = document.createElement('button');
            positiveButton.textContent = positiveAnswers2[ans][i];
            positiveButton.className = 'positive';
            positiveAnswers2Element.appendChild(positiveButton);
          }
  
          for (let i = 0; i < negativeAnswers2[0].length; i++) {
            const negativeButton = document.createElement('button');
            negativeButton.textContent = negativeAnswers2[ans][i];
            negativeButton.className = 'negative';
            negativeAnswers2Element.appendChild(negativeButton);
          }
  
          outputContainerQuestions.appendChild(positiveAnswers2Element);
          outputContainerQuestions.appendChild(negativeAnswers2Element);
    
          // Remove the event listener from character1 button
          character2Button.removeEventListener('click', character2ButtonClickHandler);
          // Add event listeners to answer buttons
          positiveAnswers2Element.addEventListener('click', positiveAnswerButtonClickHandler);
          negativeAnswers2Element.addEventListener('click', negativeAnswerButtonClickHandler);
    
          currentIndexQuestions++;
    
          if (currentIndexQuestions === commands2.length) {
            // All questions have been generated
            // You can add your desired logic here
          } else if(currentIndexQuestions==3){
            startTimer2();
            addEventListener('click', pumpUpTheJamGenerate);
            setTimeout(()=>{
              cleanUp2();
              generateFinalWindow();
              removeEventListener('click',pumpUpTheJamGenerate);
            },10000);
          }else {
            startTimerChar2();
            addEventListener('click', pumpUpTheJamGenerate);
          } 
        
      });
    }
  }

  function startTimerChar2() {
    let seconds = 10;
   
  
    function updateTimer() {
      const timerElement = document.getElementById('timer');
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    timerElement.textContent = minutes + ':' + remainingSeconds;
    seconds--;
  
      if (seconds < 0) {
        clearInterval(timerInterval);
        cleanUp2();
        generateQuestionChar2();
        ans = ans+1;
        if(ans==3){
          ans=0;
        }
      }
    }
  
    updateTimer(); // Display initial value immediately
  
    // Start the timer interval
    timerInterval = setInterval(updateTimer, 1000);
  }

// Add click event listener to the character1 button
character2Button.addEventListener('click', character2ButtonClickHandler);
//--------Character3---------------------
// Get buttons
const character3Button = document.querySelector('.characterButton:nth-of-type(3)');

// Define the action to be performed when character1 button is clicked
function character3ButtonClickHandler() {
  console.log('Character 3 button clicked!');
  outcomeWindow.classList.toggle('hidden');
  generateIntro();
  setTimeout(()=>{
    cleanUp2();
  },15000);
  setTimeout(()=>{
    generateDef3();
  },15900);
  setTimeout(()=>{
    cleanUp2();
    generateQuestionChar3();
  },30000);
}

function generateDef3(){
    const generateChar3Def = document.createElement('div');
    generateChar3Def.className = 'output';

    const promptElementQ = document.createElement('span');
    promptElementQ.className = 'prompt';
    promptElementQ.textContent = '$';

    generateChar3Def.appendChild(document.createTextNode(' '));
    generateChar3Def.textContent = generateChar3Definition;
    outputContainerQuestions.appendChild(generateChar3Def);
}

function generateQuestionChar3() {

    if (currentIndexQuestions < commands2.length) {
      const questionsElement = document.createElement('div');
      questionsElement.className = 'output';
  
      const promptElementQ = document.createElement('span');
      promptElementQ.className = 'prompt';
      promptElementQ.textContent = '$';
  
      const commandElement = document.createElement('span');
      commandElement.className = 'command';
      questionsElement.appendChild(promptElementQ);
      questionsElement.appendChild(document.createTextNode(' '));
      questionsElement.appendChild(commandElement);
      outputContainerQuestions.appendChild(questionsElement);
  
      typeCommand(commands2[currentIndexQuestions], commandElement, () => {
          if (questionsChar3[currentIndexQuestions] !== '') {
            const questionTextElement = document.createElement('div');
            questionTextElement.textContent = questionsChar3[currentIndexQuestions];
            outputContainerQuestions.appendChild(questionTextElement);
          }
    
          const positiveAnswers3Element = document.createElement('div');
          positiveAnswers3Element.className = 'answers';
    
          const negativeAnswers3Element = document.createElement('div');
          negativeAnswers3Element.className = 'answers';
    
          for (let i = 0; i < positiveAnswers3[0].length; i++) {
            const positiveButton = document.createElement('button');
            positiveButton.textContent = positiveAnswers3[ans][i];
            positiveButton.className = 'positive';
            positiveAnswers3Element.appendChild(positiveButton);
          }
  
          for (let i = 0; i < negativeAnswers3[0].length; i++) {
            const negativeButton = document.createElement('button');
            negativeButton.textContent = negativeAnswers3[ans][i];
            negativeButton.className = 'negative';
            negativeAnswers3Element.appendChild(negativeButton);
          }
  
          outputContainerQuestions.appendChild(positiveAnswers3Element);
          outputContainerQuestions.appendChild(negativeAnswers3Element);
    
          // Remove the event listener from character1 button
          character3Button.removeEventListener('click', character3ButtonClickHandler);
          // Add event listeners to answer buttons
          positiveAnswers3Element.addEventListener('click', positiveAnswerButtonClickHandler);
          negativeAnswers3Element.addEventListener('click', negativeAnswerButtonClickHandler);
    
          currentIndexQuestions++;
    
          if (currentIndexQuestions === commands2.length) {
            // All questions have been generated
            // You can add your desired logic here
          } else if(currentIndexQuestions==3){
            startTimer2();
            addEventListener('click', pumpUpTheJamGenerate);
            setTimeout(()=>{
              cleanUp2();
              generateFinalWindow();
              removeEventListener('click',pumpUpTheJamGenerate);
            },10000);
          }else {
            startTimerChar3();
            addEventListener('click', pumpUpTheJamGenerate);
          } 
        
      });
    }
  }

  function startTimerChar3() {
    let seconds = 10;
   
  
    function updateTimer() {
      const timerElement = document.getElementById('timer');
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    timerElement.textContent = minutes + ':' + remainingSeconds;
    seconds--;
  
      if (seconds < 0) {
        clearInterval(timerInterval);
        cleanUp2();
        generateQuestionChar3();
        ans = ans+1;
        if(ans==3){
          ans=0;
        }
      }
    }
  
    updateTimer(); // Display initial value immediately
  
    // Start the timer interval
    timerInterval = setInterval(updateTimer, 1000);
  }

// Add click event listener to the character1 button
character3Button.addEventListener('click', character3ButtonClickHandler);