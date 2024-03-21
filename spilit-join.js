// =====================================> Spilit Javascript Code <==================================
const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. Tumar boshonte ami pagol mono re';
const parts  = lyrics.split(' ');
console.log(parts);
const sentence = lyrics.split('.');
console.log(sentence);
const charster = lyrics.split('');
console.log(charster)

// =====================================> Slice Javascript Code <==================================
const partial = lyrics.slice(5,10);
console.log(partial);

// =====================================> ubstring Javascript Code <==================================
const partial2 = lyrics.substring(7,9);
console.log(partial2);


const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    ' Tumar boshonte ami pagol mono re'
  ];
const newSong = lines.join('');
console.log(newSong);