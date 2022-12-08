//Declare Array of Object items with 3 different fields
const Card = [{
    Sign: 'I see the reaper has come',
    Reading :'In the near future this says an end to something old and a new begining of life ',
    Result: 2
  },
  { Sign: 'Love is in the air',
    Reading: 'Time for a new love relationship',
    Result: 12
  },
  { Sign: 'Family coming together',
    Reading: 'A new member added to your family',
    Result: 7
  },
  { Sign: 'The moon is now full',
    Reading: 'Time of mystic creations come into your life',
    Result: 14
  },
  { Sign: 'The Sun shines bright',
    Reading: 'Time to put ideas and sow the seeds for the future',
    Result: 21
  },
  { Sign: 'Storm clouds are ahead',
    Reading: 'A new conflict is approaching in the near future',
    Result: 24
  },
  { Sign: 'This is the Storm Card',
    Reading: 'A new conflict is approaching in the near future',
    Result: 11
  },
  { Sign: 'The bearer of children comes near',
    Reading: 'Tragedy foretold for a family member',
    Result: 6
  },
  { Sign: 'The eagle eye has awaken',
    Reading: 'Time to focus on oneself to sow the seeds of the future',
    Result: 28
  },
  { Sign: 'The cold ice age has come',
    Reading: 'Hard and difficult times are ahead',
    Result: 31
  }];

//Randomize between 3 fields in array of objects

const Random_reading = () => {
  const reading_card = Math.floor((Math.random()*3)+1);
  return reading_card;
}
  
//Randomize 10 objects from array of objects

const Randomcard = () => {
  const card_number = Math.floor(Math.random()*10);
  return card_number;
}

//Declare Random variables and assign to varibale message before passing to Html document id = result

const message = () => {
  let messages = '';
  messagedata = Randomcard();
  data = Random_reading();
  if (data === 1) {
    messages = Card[messagedata].Sign;
  } else if (data === 2) {
    messages = Card[messagedata].Reading;
  } else if (data === 3) {
    messages = "The cycle of change begins in " + String(Card[messagedata].Result) + " days.";
  }
  document.getElementById("result").value = messages;
};

