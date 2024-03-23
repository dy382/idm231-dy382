function display(show) {
    const original = document.getElementById('Methods');
    const exhibit = document.getElementById('testAnswers');

    if (show === 'original') {
        original.style.display = 'block';
        exhibit.style.display = 'none';
        console.log('test original');
    } else if (show === '') {
        const month = parseInt(document.getElementById('birthMonth').value);
        const day = parseInt(document.getElementById('birthDate').value);
        const zodiacSign = getZodiacSign(month, day); 
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
    const Image = document.getElementById('image')
    const Description = document.getElementById('description')

    let zodiacSigns = "";
    let Method = "";
    let descriptionText = "";

if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    zodiacSigns = "Aquarius";
    Method = "Pour Over";
    Image.style.background = "url('./idm231-images/PourOverDrip.png') no-repeat";
    Description.innerHTML =  "Intellectual and intuitive, you are probably someone who stares at a work of art, engrossed in seeing and decoding every little detail. That’s why you’ll love the Origami Dripper, a gorgeous ceramic pour-over cone, crafted in Japan, that offers endless ways to experiment with flow rate and direction. Plus, you can play with by-passing techniques. (That’s coffee-nerd stuff; Google it! I know you want to know more!)";
    playAudio('./audio/sound1.mp3');
}

else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    zodiacSigns = "Pisces";
    Method = "French Press";
    Image.style.background = "url('./idm231-images/FrenchPress.PNG') no-repeat";
    Description.innerHTML = 'Oh, you gentle, creative soul! Do you sometimes get lost in your own thoughts? What you need is a coffee brewer that is a bit more forgiving if you, say, get distracted doing something else. A French press is just the thing: The immersion-style brewing creates a cup that’s rich and comforting, and everything will be fine if you press the plunger after seven minutes instead of four. This one from Bodum is the best of the best.';
    playAudio('./audio/sound2.mp3');
}
else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    let zodiacSigns = "Aries";
    Method = "Aeropress";
    Image.style.background = "url('./idm231-images/Aeropress.PNG') no-repeat";
    Description.innerHTML = 'Speed, competition, independence — your sign points to the Aeropress. A hand-held single-cup brewer, the Aeropress is designed to make a fantastic cup of coffee in next to no time, and can be packed up and taken anywhere. (Fun fact: There’s something called the World AeroPress Championship, which is a fierce favorite among coffee professionals!)';
    playAudio('./audio/sound3.mp3');
}

else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    let zodiacSigns = "Taurus";
    Method = "Cold Brew";
    Image.style.background = "url('./idm231-images/machinedrip.png') no-repeat";
    Description.innerHTML = 'There is nothing more reliable, practical, or stable than a good-quality automatic drip brewer, which is a perfect match for our Taurus friends. Coffee machines are known for being super consistent, which means that day-after-day (no matter where the moon is!) your trusty brewer will be right there, keeping you caffeinated.';
    playAudio('./audio/sound4.mp3');
}
else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    let zodiacSigns = "Gemini";
    Method = "Espresso";
    Image.style.background = "url('./idm231-images/espresso.png') no-repeat";
    Description.innerHTML = 'Coffee professionals sometimes scoff at the idea of a combination brewer. But when you’re both indecisive and curious, having the option of espresso or coffee at a moment’s notice sounds ideal. Maybe the planets want it to be an au lait day? Or perhaps a cortado feels right? Let this twin brewer be the guide!';
    playAudio('./audio/sound5.mp3');
} 

else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    let zodiacSigns = "Cancer";
    Method = "MokaPot";
    Image.style.background = "url('./idm231-images/MokaPot.PNG') no-repeat";
    Description.innerHTML = 'Wake up with the help of a timeless stovetop espresso maker. Let the smell of rich coffee percolate through your kitchen and it will instantly transport you to a time before there were millions of buttons and knobs and whirligigs. You may get a little emotional, but the kick from the espresso-like brew should help!';
    playAudio('./audio/sound6.mp3');
} 
else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    let zodiacSigns = "Leo";
    Method = "Percolator";
    Image.style.background = "url('./idm231-images/percolator.png') no-repeat";
    Description.innerHTML = 'I know you like a little flair, Leo: That’s why this show-stopping, conversation-starting countertop percelator is what you need to espresso yourself. (Yeah, I went there.) The fully manual machine uses a lever and your own strength to extract coffee, so you can embrace the theater of presenting your loved ones with a great visual experience and ovation-worthy flavor.';
    playAudio('./audio/sound7.mp3');
} 
else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    let zodiacSigns = "Virgo";
    Method = "Siphon";
    Image.style.background = "url('./idm231-images/Siphon.PNG') no-repeat";
    Description.innerHTML = 'Do you thrive under just a little bit of stress? Do you like to follow precise instructions? Do you love the idea of mastering a seemingly complicated technique? Then siphon brewing is your siren song, Virgo. It is a beautiful device that is actually relatively easy to use once you get the hang of it. You’ll feel like a scientist, and your natural perfectionism will be rewarded.';
    playAudio('./audio/sound8.mp3');
} 

else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    let zodiacSigns = "Libra";
    Method = "Chemex";
    Image.style.background = "url('./idm231-images/Chemex.PNG') no-repeat";
    Description.innerHTML = 'Finding a brewer that suits a sociable and stylish sign like Libra is easy thanks to the beautiful curves and sleek collar of the classic Chemex brewer. This pour-over device isn’t just a practical way to make fantastic hand-brewed coffee for a crowd, but it’s very, very good looking. ';
    playAudio('./audio/sound9.mp3');
} 
else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
    let zodiacSigns = "Scorpio";
    Method = "VietnameseCoffee";
    Image.style.background = "url('./idm231-images/vietnamese.png') no-repeat";
    Description.innerHTML = 'Go big and stay home, Scorpio, with one of the most intense kitchen investments you can make for those truly passionate about coffee: Vietnamese Coffee Maker. Yes, it comes with a price tag, but it also has top-tier technology and professional-level quality.';
    playAudio('./audio/sound10.mp3');
} 
else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    let zodiacSigns = "Sagittarius";
    Method = "Turkish Coffee";
    Image.style.background = "url('./idm231-images/turkish.png') no-repeat";
    Description.innerHTML = 'I’m tempted to say that your generous nature and good humor make you a candidate for being a coffee shop regular rather than a home brewer, Sag. But on those days when you need a little something extra at home, you’ll love the speed and ease of this hand-held Turkish Coffee Device. You hate to wait, so this high-pressure little beauty will quickly be your best friend, ensuring that you have great espresso at a moment’s notice. It also comes with a protective case: Drop it in your bag and you can have a fresh shot anywhere.';
    playAudio('./audio/sound11.mp3');
} 
else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    let zodiacSigns = "Capricorn";
    Method = "Cold Brew";
    Image.style.background = "url('./idm231-images/coldbrew.png') no-repeat";
    Description.innerHTML = 'Your sense of responsibility and your natural discipline makes you a perfect candidate for a cold brew, Capricorn. The brewing method might be a long-term investment (brews take 12 to 24 hours, because you’re using room-temperature water, rather than hot), but the rewards are boundless. You can use cold brew concentrate to make regular ol’ iced coffee, but you can also turn it into a wide array of tasty mixed coffee drinks. Like, say, cold brew with basil-infused simple syrup, cardamom bitters, a splash of water, lots of ice, and oat milk. Get crafty, Cap!';
    playAudio('./audio/sound12.mp3');
}
else {
      console.log('error in swapzodinfo');
  }
  
  }
  
  let chalkboard = document.getElementById('words');
  let soundEffect = document.getElementById("sound");
  
    function zodiacSigns(Result) {
  
    playAudio(audioFile);
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