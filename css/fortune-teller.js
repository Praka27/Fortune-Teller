const Card = [{
    Sign: 'I see the reaper has come',
    Reading :'In the near future this says an end to something old and a new begining of life ',
    result: 1
  },
  { Sign: 'Love is in the air',
    Reading: 'Time for a new love relationship',
    result: 7
  },
  { Sign: 'Family coming together',
    Reading: 'A new member added to your family',
    Result: 14
  },
  { Sign: 'The moon is now full',
    Reading: 'Time of mystic creations come into your life',
    Result: 28
  },
  { Sign: 'The Sun shines bright',
    Reading: 'Time to put ideas and sow the seeds for the future',
    Result: 10
  },
  { Sign: 'Storm clouds are ahead',
    Reading: 'A new conflict is approaching in the near future',
    Result: 20
  },
  { Sign: 'This is the Storm Card',
    Reading: 'A new conflict is approaching in the near future',
    Result: 14
  },
  { Sign: 'The bearer of children comes near',
    Reading: 'Tragedy foretold for a family member',
    Result: 18
  },
  { Sign: 'The eagle eye has awaken',
    Reading: 'Time to focus on oneself to sow the seeds of the future',
    Result: 24
  },
  { Sign: 'The cold ice age has come',
    Reading: 'Hard and difficult times are ahead',
    Result: 30
  }];

const Random_reading = () => {
  let reading_card = (Math.floor(Math.random()*3)+1);
  return reading_card;
}
  
const Randomcard = () => {
  let card_number = Math.floor(Math.random()*5);
  return card_number;
}

const message = () => {
  let messagedata = 1;
  let data =1;
  messagedata = Randomcard();
  data = Random_reading();

  document.getElementById("result").value = "this is a test message";
}



/*while (!exited) {
 
  let userInput = prompt("Please enter [yes] for your fututre reading message or [no] to quit: ");
  
    userInput = userInput.toLowerCase();
    if (userInput === 'no') {
      console.log('See Ya! Goodbye!!!');
      exited = true;
  } else {
    messagedata = Randomcard();
    data = Random_reading();
    if (data === 1) {
      console.log(Card[messagedata].Tarot);
    } else if (data === 2) {
      console.log(Card[messagedata].Reading);
    } else if (data === 3) {
      console.log('The cycle will start in ',Card[messagedata].Result,' days');
    }
  }
};*/
