function display(show) {
    const original = document.getElementById('Methods');
    const exhibit = document.getElementById('testAnswers');

    if (show === 'original') {
        original.style.display = 'block';
        exhibit.style.display = 'none';
        console.log('test original')
    } else if (show === '') {
        const month = parseInt(document.getElementById('birthMonth').value);
        const day = parseInt(document.getElementById('birthDate').value);
        const zodiacSign = getZodiacSign(month, day); // Pass month and day to getZodiacSign()
        original.style.display = 'none';
        exhibit.style.display = 'block';
        console.log('test else')
    }
}

document.querySelector('.back').addEventListener('click', function() {
    display('original');
  });

  function calculateZodiac() {
      const month = parseInt(document.getElementById('birthMonth').value);
      const day = parseInt(document.getElementById('birthDate').value);
      const zodiacSign = getZodiacSign(month, day);
      display('');
   }

  function getZodiacSign(month, day) {
    const Answer = document.getElementById('answer')
    const Description = document.getElementById('description')
    let zodiacSigns = "";
    let Method = "";
    let descriptionText = "";

if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    zodiacSigns = "Aquarius";
    Method = "Pour Over";
   Description.innerHTML =  "Intellectual and intuitive, you are probably someone who stares at a work of art, engrossed in seeing and decoding every little detail. That’s why you’ll love the Origami Dripper, a gorgeous ceramic pour-over cone, crafted in Japan, that offers endless ways to experiment with flow rate and direction. Plus, you can play with by-passing techniques. (That’s coffee-nerd stuff; Google it! I know you want to know more!)";
}

else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    zodiacSigns = "Pisces";
    Method = "French Press";
    Description.innerHTML = 'Oh, you gentle, creative soul! Do you sometimes get lost in your own thoughts? What you need is a coffee brewer that is a bit more forgiving if you, say, get distracted doing something else. A French press is just the thing: The immersion-style brewing creates a cup that’s rich and comforting, and everything will be fine if you press the plunger after seven minutes instead of four. This one from Bodum is the best of the best.';
}
else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    let zodiacSigns = "Aries";
    Method = "Aeropress";
    Description.innerHTML = 'Speed, competition, independence — your sign points to the Aeropress. A hand-held single-cup brewer, the Aeropress is designed to make a fantastic cup of coffee in next to no time, and can be packed up and taken anywhere. (Fun fact: There’s something called the World AeroPress Championship, which is a fierce favorite among coffee professionals!)';
}

else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    let zodiacSigns = "Taurus";
    Method = "Cold Brew";
    Description.innerHTML = 'There is nothing more reliable, practical, or stable than a good-quality automatic drip brewer, which is a perfect match for our Taurus friends. Coffee machines are known for being super consistent, which means that day-after-day (no matter where the moon is!) your trusty brewer will be right there, keeping you caffeinated.';
}
else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    let zodiacSigns = "Gemini";
    Method = "Espresso";
    Description.innerHTML = 'Coffee professionals sometimes scoff at the idea of a combination brewer. But when you’re both indecisive and curious, having the option of espresso or coffee at a moment’s notice sounds ideal. Maybe the planets want it to be an au lait day? Or perhaps a cortado feels right? Let this twin brewer be the guide!';
} 
else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    let zodiacSigns = "Cancer";
    Method = "MokaPot";
    Description.innerHTML = 'Wake up with the help of a timeless stovetop espresso maker. Let the smell of rich coffee percolate through your kitchen and it will instantly transport you to a time before there were millions of buttons and knobs and whirligigs. You may get a little emotional, but the kick from the espresso-like brew should help!';

} 
else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    let zodiacSigns = "Leo";
    Method = "Percolator";
    Description.innerHTML = 'I know you like a little flair, Leo: That’s why this show-stopping, conversation-starting countertop percelator is what you need to espresso yourself. (Yeah, I went there.) The fully manual machine uses a lever and your own strength to extract coffee, so you can embrace the theater of presenting your loved ones with a great visual experience and ovation-worthy flavor.';
} 
else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    let zodiacSigns = "Virgo";
    Method = "Siphon";
    Description.innerHTML = 'Do you thrive under just a little bit of stress? Do you like to follow precise instructions? Do you love the idea of mastering a seemingly complicated technique? Then siphon brewing is your siren song, Virgo. It is a beautiful device that is actually relatively easy to use once you get the hang of it. You’ll feel like a scientist, and your natural perfectionism will be rewarded.';
} 

else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    let zodiacSigns = "Libra";
    Method = "Chemex";
    Description.innerHTML = 'Finding a brewer that suits a sociable and stylish sign like Libra is easy thanks to the beautiful curves and sleek collar of the classic Chemex brewer. This pour-over device isn’t just a practical way to make fantastic hand-brewed coffee for a crowd, but it’s very, very good looking. ';
} 
else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    let zodiacSigns = "Scorpio";
    Method = "VietnameseCoffee";
    Description.innerHTML = 'Go big and stay home, Scorpio, with one of the most intense kitchen investments you can make for those truly passionate about coffee: Vietnamese Coffee Maker. Yes, it comes with a price tag, but it also has top-tier technology and professional-level quality.';
} 
else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    let zodiacSigns = "Sagittarius";
    Method = "Turkish Coffee";
    Description.innerHTML = 'I’m tempted to say that your generous nature and good humor make you a candidate for being a coffee shop regular rather than a home brewer, Sag. But on those days when you need a little something extra at home, you’ll love the speed and ease of this hand-held Turkish Coffee Device. You hate to wait, so this high-pressure little beauty will quickly be your best friend, ensuring that you have great espresso at a moment’s notice. It also comes with a protective case: Drop it in your bag and you can have a fresh shot anywhere.';
} 
else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    let zodiacSigns = "Capricorn";
    Method = "Cold Brew";
    Description.innerHTML = 'Your sense of responsibility and your natural discipline makes you a perfect candidate for a cold brew, Capricorn. The brewing method might be a long-term investment (brews take 12 to 24 hours, because you’re using room-temperature water, rather than hot), but the rewards are boundless. You can use cold brew concentrate to make regular ol’ iced coffee, but you can also turn it into a wide array of tasty mixed coffee drinks. Like, say, cold brew with basil-infused simple syrup, cardamom bitters, a splash of water, lots of ice, and oat milk. Get crafty, Cap!';
}
  }
  

let chalkboard = document.getElementById('words');
let soundEffect = document.getElementById("sound");

  function zodiacSigns(Result) {

if (Result == Aquarius) {
    chalkwriting();
   playAudio('./audio/sound1');

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


document.addEventListener('DOMContentLoaded', function() {
    const helpButton = document.getElementById('helpButton');
    const helpMessage = document.getElementById('helpMessage');

    helpButton.addEventListener('click', function() {
        if (helpMessage.style.display === 'none' || helpMessage.style.display === '') {
            helpMessage.style.display = 'block';
        } else {
            helpMessage.style.display = 'none';
        }
    });
});