<script>
  
  function calculateZodiac() {
      const month = parseInt(document.getElementById('birthMonth').value);
      const day = parseInt(document.getElementById('birthDate').value);
      const zodiacSign = getZodiacSign(month, day);
      document.getElementById('zodiacSign').textContent = `You are: ${zodiacSign}`;
   }

  function getZodiacSign(month, day) {
if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    zodiacSigns = "Aquarius";
    Method = "Pour Over";
    return zodiacSigns + " " + Method;
}
else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    let zodiacSigns = "Pisces";
    Method = "French Press";
    return zodiacSigns + " " + Method;
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
    let zodiacSigns = "Sagiattarius";
    Method = "Espresso";
    return zodiacSigns + " " + Method;
} 
else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    let zodiacSigns = "Capricorn";
    Method = "Pour Over";
    return zodiacSigns + " " + Method;
}
  }



  function zodiacSigns(Result) {
    console.log('swap zod info called ' + Result);

if (Result == Aquarius) {
    heroObj.src = 'images/cap_hero.png';
    playSomething('audio/jon_audio.mp3');
} else if (Result == 2) {
    heroObj.src = 'images/ari_hero.png';
    playSomething('audio/danny_audio.mp3');
} else if (whichOne == 3) {
    heroObj.src = 'images/sco_hero.png';
    playSomething('audio/arya_audio.mp3');
} else if (whichOne == 4) {
    heroObj.src = 'images/sag_hero.png';
    playSomething('audio/yigritte_audio.mp3');
} else if (whichOne == 5) {
    heroObj.src = 'images/aqu_hero.png';
    playSomething('audio/bran_audio.mp3');
} else if (whichOne == 6) {
    heroObj.src = 'images/pis_hero.png';
    playSomething('audio/hodor_audio.mp3');
} else if (whichOne == 7) {
    heroObj.src = 'images/tau_hero.png';
    playSomething('audio/jamie_audio.mp3');
} else if (whichOne == 8) {
    heroObj.src = 'images/gem_hero.png';
    playSomething('audio/sansa_audio.mp3');
} else if (whichOne == 9) {
    heroObj.src = 'images/can_hero.png';
    playSomething('audio/circi_audio.mp3');
} else if (whichOne == 10) {
    heroObj.src = 'images/lib_hero.png';
    playSomething('audio/bronn_audio.mp3');
} else if (whichOne == 11) {
    heroObj.src = 'images/leo_hero.png';
    playSomething('audio/tyrion_audio.mp3');
} else if (whichOne == 12) {
    heroObj.src = 'images/vir_hero.png';
    playSomething('audio/brienne_audio.mp3');

} else {
    console.log('error in swapzodinfo');
}

  }

/* 
  function getZodiacSign(month, day) {
    let zodiacSigns = [
        "Capricorn",
        "Aquarius",
        "Pisces",
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn" // Capricorn again for December 22 - December 31
    ];
    
    const cutoffDates = [
        20, // January
        19, // February
        20, // March
        20, // April
        21, // May
        21, // June
        22, // July
        23, // August
        23, // September
        23, // October
        22, // November
        21  // December
    ];

    // Adjust for JavaScript's 0-indexed months
    month--;

    if (day <= cutoffDates[month]) {
        return zodiacSigns[month];
    } else {
        return zodiacSigns[(month + 1) % 12];
    }    }*/
 
  </script>
