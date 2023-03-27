const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
function startGame(){
state = {}
showTextNode(1)

let popup = document.getElementById("popup");
let popup1= document.getElementById("popup1");


}


function openPopup(){
  popup.classList.add("open-popup");
}

function closePopup(){
  popup.classList.remove("open-popup");

}


function showTextNode(textNodeIndex) {

       const textNode = textNodes.find(textNode => textNode.id === textNodeIndex) 
       textElement.innerText = textNode.text
       while (optionButtonsElement.firstChild) {
           optionButtonsElement.removeChild(optionButtonsElement.firstChild)

       }

       textNode.options.forEach(option => {
           if (showOption(option)) {
               const button = document.createElement('button')
               button.innerText = option.text
               button.classList.add('btn')
               button.addEventListener('click', () => selectOption(option))
               optionButtonsElement.appendChild(button)
            
           }

       }) 

}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
  }
  


const textNodes = [
    {
      id: 1,
      text: "You wake up feeling anxious and overwhelmed. What do you do?",
      options: [
        {
          text: "Stay in bed and avoid the world" ,
          //setState: { sleep: true },
          nextText:2
          

        },
        {
          text: "Get up and face the day",
          nextText:3
        }
      ]
    },
    {
      id: 2,
      text: "You spend the day in bed, feeling worse and more alone. You realize you need help. What do you do?",
      options: [
        {
          text: "Ignore your feelings and hope they go away",
          //requiredState: (currentState) => currentState.sleep,
          setState: { sleep: false, wake: true },
          nextText: 4
        },
        {
          text: "Seek help from a therapist",
          //requiredState: (currentState) => currentState.sleep,
          setState: { sleep: true, wake: false },
          nextText: 5
        },

        
      ]
    },

    {
        id: 3,
        text: "You face the day and try to stay positive, but you still feel overwhelmed. What do you do?",
        options: [
            {
              text: "Try a mindfulness exercise",
              nextText:6
            },
            
            {
              text: "Find a supportive friend to talk to",
              nextText:7

            }

          ]
        
        
      },
      {
        id: 4,
        text: "Ignoring your feelings only makes them worse. You start to spiral and realize you need help. What do you do?",
        options: [
            {
              text: "Keep ignoring your feelings and hope they go away",
              nextText:4
            },
            {
              text:"Seek help from a therapist",
              nextText:5
            },
           
          ]
      },


      {
        id: 5,
        text: "You take the first step towards healing by seeking help from a therapist. They provide you with resources and support to help you manage your mental health.",
        options: [
            {
                text: "Continue on your journey",
                nextText:8
            },
           
           
          ]
      },


      
      {
        id: 6,
        text: "You try a mindfulness exercise to reduce stress and find that it helps. What do you do next?",
        options: [
            {
                text: "Find more resources for managing stress",
                nextText:8
            },
            
            {
              text: "Take a break and rest",
              nextText:7

            },
           
           
          ]
      },

      {
        id: 7,
        text: "You find a supportive friend to talk to and feel less alone. What do you do next?",
        options: [
            {
                text: "Try to build more meaningful connections with others",
                nextText:8
            },
            {
              text: "Take a break and focus on self-care",
              nextText:7
            }

          
           
           
          ]
      

      },

      {
        id: 8,
        text: "Congratulations! You have completed the game and helped the character improve their mental health. Remember to prioritize your own mental health and seek help if needed.",
        options: [
            {
                text:"RESTART",
                nextText:1
            },
          ]
      },

      

]

startGame()