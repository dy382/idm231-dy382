function display(show) {
    const original = document.getElementsByClassName('Methods');
    const exhibit = document.getElementsById('testAnswers');

    if (show === 'original') {
        original.style.display = 'block';
        exhibit.style.display = 'none';
    } else if (show === '') {
        original.style.display = 'none';
        exhibit.style.display = 'block';
        getZodiacSign();
    }
}

document.getElementById('back').addEventListener('click', function() {
    display('original');
  });

  function calculateZodiac() {
      const month = parseInt(document.getElementById('birthMonth').value);
      const day = parseInt(document.getElementById('birthDate').value);
      const zodiacSign = getZodiacSign(month, day);
   }

  function getZodiacSign(month, day) {
    const Answer = document.getElementbyId('answer')
    const Description = document.getElementById('description')

if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    zodiacSigns = "Aquarius";
    Method = "Pour Over";
    Answer.textContent = `You are: ${zodiacSigns}`;
    Description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    let zodiacSigns = "Pisces";
    Method = "French Press";
    Answer.textContent = `You are: ${zodiacSigns}`;
    Description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    let zodiacSigns = "Aries";
    Method = "Aeropress";
    return zodiacSigns + " " + Method;
}
else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    let zodiacSigns = "Taurus";
    Method = "Es";
    return zodiacSigns + " " + Method;
}
else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    let zodiacSigns = "Gemini";
    Method = "Espresso";
    return zodiacSigns + " " + Method;
} 
else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    let zodiacSigns = "Cancer";
    Method = "Espresso";
    return zodiacSigns + " " + Method;
} 
else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    let zodiacSigns = "Leo";
    Method = "Espresso";
    return zodiacSigns + " " + Method;
} 
else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    let zodiacSigns = "Virgo";
    Method = "Espresso";
    return zodiacSigns + " " + Method;
} 
else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    let zodiacSigns = "Libra";
    Method = "Espresso";
    return zodiacSigns + " " + Method;
} 
else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    let zodiacSigns = "Scorpio";
    Method = "Espresso";
    return zodiacSigns + " " + Method;
} 
else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    let zodiacSigns = "Sagittarius";
    Method = "Espresso";
    return zodiacSigns + " " + Method;
} 
else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    let zodiacSigns = "Capricorn";
    Method = "Pour Over";
    return zodiacSigns + " " + Method;
}
  }

let chalkboard = document.getElementById('words');
let soundEffect = document.getElementById("sound");

  function zodiacSigns(Result) {

if (Result == Aquarius) {
    chalkwriting();
   playAudio('audio/');

} else if (Result == Pisces) {
    chalkwriting();
   playAudio('audio/');

} else if (Result == Aries) {
    chalkwriting();
   playAudio('audio/');

} else if (Result == Taurus) {
    chalkwriting();
   playAudio('audio/');

} else if (Result == Gemini) {
    chalkwriting();
   playAudio('audio/');

} else if (Result == Cancer) {
    chalkwriting();
   playAudio('audio/');

} else if (Result == Leo) {
    chalkwriting();
   playAudio('audio/');

} else if (Result == Virgo) {
    chalkwriting();
   playAudio('audio/');

} else if (Result == Libra) {
    chalkwriting();
   playAudio('audio/');

} else if (Result == Scorpio) {
    chalkwriting();
   playAudio('audio/');

} else if (Result == Sagiattarius) {
    chalkwriting();
   playAudio('audio/');

} else if (Result == Capricorn) {
    chalkwriting();
   playAudio('audio/');

} else {
    console.log('error in swapzodinfo');
}


  }


function playAudio(audioFile) {
    soundEffect.src = audioFile;
    soundEffect.play();

    console.log('play' + audioFile);
}
