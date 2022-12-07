//Declare Array of Object items with 3 different fields
const Card = [{
    Sign: 'I see the reaper has come',
    Reading :'In the near future this says an end to something old and a new begining of life ',
    Result: "The cycle of change begins in 2 days"
  },
  { Sign: 'Love is in the air',
    Reading: 'Time for a new love relationship',
    Result: "The cycle of change begins in 12 days"
  },
  { Sign: 'Family coming together',
    Reading: 'A new member added to your family',
    Result: "The cycle of change begins in 7 days"
  },
  { Sign: 'The moon is now full',
    Reading: 'Time of mystic creations come into your life',
    Result: "The cycle of change begins in 14 days"
  },
  { Sign: 'The Sun shines bright',
    Reading: 'Time to put ideas and sow the seeds for the future',
    Result: "The cycle of change begins in 21 days"
  },
  { Sign: 'Storm clouds are ahead',
    Reading: 'A new conflict is approaching in the near future',
    Result: "The cycle of change begins in 24 days"
  },
  { Sign: 'This is the Storm Card',
    Reading: 'A new conflict is approaching in the near future',
    Result: "The cycle of change begins in 11 days"
  },
  { Sign: 'The bearer of children comes near',
    Reading: 'Tragedy foretold for a family member',
    Result: "The cycle of change begins in 6 days"
  },
  { Sign: 'The eagle eye has awaken',
    Reading: 'Time to focus on oneself to sow the seeds of the future',
    Result: "The cycle of change begins in 28 days"
  },
  { Sign: 'The cold ice age has come',
    Reading: 'Hard and difficult times are ahead',
    Result: "The cycle of change begins in 31 days"
  }];

//Randomize between 3 fields in array of objects

const Random_reading = () => {
  const reading_card = Math.floor(Math.random()*3);
  return reading_card;
}
  
//Randomize 10 objects from array of objects

const Randomcard = () => {
  const card_number = Math.floor(Math.random()*10);
  return card_number;
}

//Declare Random variables and assign to varibale message before passing to Html document id = result

let messagedata = 1;
let data = 1;

const message = () => {
  let messages = '';
  messagedata = Randomcard();
  data = Random_reading();
  if (data === 0) {
    messages = Card[messagedata].Sign;
  } else if (data === 1) {
    messages = Card[messagedata].Reading;
  } else if (data === 2) {
    messages = Card[messagedata].Result;
  };
  document.getElementById("result").value = messages;
};

