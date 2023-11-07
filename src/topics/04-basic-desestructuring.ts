interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "lo atara la araché",
    details: {
        author: "richie ray",
        year: 1965
    }
}

console.log('SongName:', audioPlayer.song);
console.log('Duration:', audioPlayer.songDuration);
console.log('Author:', audioPlayer.details.author);

const { song:songName, songDuration:duration, details } = audioPlayer;
const { author } = details;

console.log({songName, duration, author});

export {};