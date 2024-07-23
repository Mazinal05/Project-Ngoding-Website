const songs = [
    {
        title: "Can't Take My Eyes Off You",
        artist: "Yann Muller",
        src: "music/Yann Muller - Can't Take My Eyes Off You.mp3",
        lyrics: [
            { time: 0, text: "In your presence, I find an irresistible allure that captures my entire being." },
            { time: 5, text: "Your gaze is a magnetic force, drawing me in with an intensity that's impossible to ignore." },
            { time: 10, text: "Each glance you cast reveals a profound connection that words cannot fully express." },
            { time: 15, text: "Every smile you share feels like a precious gift, brightening my world beyond measure." },
            { time: 20, text: "Your touch is a silent promise of a love that transcends time and space." },
            { time: 25, text: "In your eyes, I see a reflection of a love so deep that it defies explanation." },
            { time: 30, text: "The way you move is a dance of grace that mesmerizes me, holding me captive." },
            { time: 35, text: "Each moment with you feels like a timeless adventure, filled with endless possibilities." },
            { time: 40, text: "The warmth of your embrace provides a sanctuary from the chaos of the world." },
            { time: 45, text: "Your laughter is a melody that resonates with the joy and beauty of our connection." },
            { time: 50, text: "With every word you speak, I feel a deeper bond forming, a shared understanding that goes beyond words." },
            { time: 55, text: "Your presence in my life is a constant reminder of the beauty and depth of true love." },
            { time: 60, text: "The way you look at me reveals a soul that understands and cherishes every moment we share." },
            { time: 65, text: "Each breath I take with you feels like a cherished gift, a testament to our unspoken bond." },
            { time: 70, text: "Your smile has the power to light up my world, casting away any shadows of doubt." },
            { time: 75, text: "In the quiet moments, our hearts communicate in a language that transcends words." },
            { time: 80, text: "The connection we share is a deep, enduring flame that continues to burn brightly." },
            { time: 85, text: "Every touch from you is a reminder of the love that binds us together." },
            { time: 90, text: "Our time together is a precious treasure, each moment filled with profound meaning." },
            { time: 95, text: "Your eyes are a mirror of the eternal love we share, reflecting our deepest emotions." },
            { time: 100, text: "As the song continues, my admiration and love for you only grow stronger." },
            { time: 105, text: "Every moment with you is a testament to the strength and beauty of our connection." },
            { time: 110, text: "Our love is a masterpiece, painted with the colors of passion and devotion." },
            { time: 115, text: "The way you look at me is a silent declaration of our unbreakable bond." },
            { time: 120, text: "Your presence fills my life with an unmatched joy, making every day brighter." },
            { time: 125, text: "As the music plays, my heart continues to beat in perfect harmony with yours." },
            { time: 130, text: "The depth of my feelings for you is a melody that plays on repeat in my heart." },
            { time: 135, text: "Every second with you is a cherished memory, a moment of pure, unfiltered love." },
            { time: 140, text: "Your gaze is a beacon of love, guiding me through every moment of our journey together." },
            { time: 145, text: "In your eyes, I find a reflection of the timeless love we share, a love that endures." },
            { time: 150, text: "As the song reaches its crescendo, my heart remains steadfastly devoted to you." },
            { time: 155, text: "Our connection is a beautiful, unending story, written with the ink of deep affection." },
            { time: 160, text: "Each note of this song echoes the profound depth of my love for you." },
            { time: 165, text: "Your love is the melody that completes the symphony of my life." },
            { time: 170, text: "Even as the music fades, my admiration for you remains as strong as ever." },
            { time: 175, text: "Our bond is an eternal flame, burning brightly with every passing moment." },
            { time: 180, text: "With every note, I am reminded of the unparalleled connection we share." },
            { time: 185, text: "As the final chords play, know that my love for you is timeless and unwavering." },
            { time: 190, text: "Thank you for being the muse of this beautiful melody, forever cherished in my heart." }
            // Add more lyrics lines with appropriate timestamps
        ]
    },
    {
        title: "Secret Love",
        artist: "Little Mix",
        src: "music/Secret love.mp3",
        lyrics : [
            { time: 0, text: "We keep our love hidden away from the world." },
            { time: 5, text: "Every stolen glance intensifies my longing." },
            { time: 10, text: "Moments we share in secrecy become cherished memories." },
            { time: 15, text: "Our love feels incomplete when concealed." },
            { time: 20, text: "As we approach the edge of my solitude." },
            { time: 25, text: "I struggle to hide the tears of longing." },
            { time: 30, text: "We must keep our true selves hidden from the world." },
            { time: 35, text: "In a place where our hearts remain out of reach." },
            { time: 40, text: "Yet, we have a love that seeks freedom." },
            { time: 45, text: "Why must I keep my love a secret in public?" },
            { time: 50, text: "Why can't our love be celebrated openly?" },
            { time: 55, text: "I dream of a world where our love is visible." },
            { time: 60, text: "Why must our love remain hidden? Because my heart belongs to you." },
            { time: 65, text: "Why can't I openly declare my feelings?" },
            { time: 70, text: "I yearn to shout my love from the rooftops." },
            { time: 75, text: "I wish our love could be displayed for everyone to see." },
            { time: 80, text: "Why can't our love be public? My heart is yours." },
            { time: 85, text: "It's clear that you are the one meant for me." },
            { time: 90, text: "Every part of you perfectly matches my soul." },
            { time: 95, text: "Each moment, every thought, I fall deeper for you." },
            { time: 100, text: "Yet, I mask my true feelings behind a smile." },
            { time: 105, text: "Our love, despite its depth, is deemed impossible." },
            { time: 110, text: "Why must our love remain concealed in secrecy?" },
            { time: 115, text: "Why can't our love be revealed and embraced?" },
            { time: 120, text: "I long for a world where our love is free and celebrated." },
            { time: 125, text: "Why must we hide? My soul is yours, unconditionally." },
            { time: 130, text: "Why can't I openly confess my love for you?" },
            { time: 135, text: "I dream of proclaiming our love from every corner of the world." },
            { time: 140, text: "I hope for a life where our love is proudly displayed." },
            { time: 145, text: "Why can't it be? Because my heart is entirely yours." },
            { time: 150, text: "Why must our love remain in the shadows?" },
            { time: 155, text: "I wish to announce our love from the highest rooftops." },
            { time: 160, text: "I long for a world where our love is openly cherished." },
            { time: 165, text: "Why can’t our love be visible? My heart is yours eternally." },
            { time: 170, text: "Why can’t we live our love out in the open?" },
            { time: 175, text: "I desire to live freely, without hiding our bond." },
            { time: 180, text: "Every moment apart makes my heart ache more." },
            { time: 185, text: "Yet we persevere in silence, holding onto hope." },
            { time: 190, text: "Our love story remains a whispered secret." },
            { time: 195, text: "I wish we could be as open as our hearts desire." },
            { time: 200, text: "Why can't we share this love with the world?" },
            { time: 205, text: "Our love remains a hidden gem, only for us to treasure." },
            { time: 210, text: "I long for a day when love no longer needs to hide." },
            { time: 215, text: "Until then, my heart remains quietly yours." },
            { time: 220, text: "In every hidden moment, I cherish our love deeply." },
            { time: 225, text: "We may be concealed, but our hearts beat loudly." },
            { time: 230, text: "Our love endures, even when veiled in secrecy." },
            { time: 235, text: "I yearn for a world where we can be openly us." },
            { time: 240, text: "For now, I hold onto the dream of us being visible." },
            { time: 245, text: "Every moment apart only strengthens my love for you." },
            { time: 250, text: "Our love story is written in hidden chapters." },
            { time: 255, text: "I hope for the day our love can be free and unguarded." },
            { time: 260, text: "Until then, we live in the shadows of our own making." },
            { time: 265, text: "Our hearts are entwined, no matter the world's gaze." },
            { time: 270, text: "I cherish every hidden moment we share." },
            { time: 275, text: "May our love one day be as visible as our feelings." },
            { time: 280, text: "For now, my heart remains silently devoted to you." },
            { time: 285, text: "In every quiet moment, our love speaks volumes." },
            { time: 290, text: "We may be hidden, but our hearts are united." },
            { time: 295, text: "I long for the day our love can be openly celebrated." },
            { time: 300, text: "Until then, my heart belongs to you, in every secret." }
            // Add more lyrics lines with deeper meanings if necessary
        ]
    },
    {
        title: "Summer Sky",
        artist: "Henry",
        src: "music/Summer Sky.mp3",
        lyrics: [
            { time: 0, text: "This is the first line of the lyrics for Summer Sky." },
            { time: 10, text: "This is the second line of the lyrics for Summer Sky." },
            { time: 20, text: "This is the third line of the lyrics for Summer Sky." },
            // Add more lyrics lines with appropriate timestamps
        ]
    },
    {
        title: "Since I Found You",
        artist: "Christian Bautista",
        src: "music/Since i found you.mp3",
        lyrics: [
            { time: 0, text: "This is the first line of the lyrics for Song Title 4." },
            { time: 10, text: "This is the second line of the lyrics for Song Title 4." },
            { time: 20, text: "This is the third line of the lyrics for Song Title 4." },
            // Add more lyrics lines with appropriate timestamps
        ]
    },
    {
        title: "Song Title 5",
        artist: "Artist 5",
        src: "path/to/song5.mp3",
        lyrics: [
            { time: 0, text: "This is the first line of the lyrics for Song Title 5." },
            { time: 10, text: "This is the second line of the lyrics for Song Title 5." },
            { time: 20, text: "This is the third line of the lyrics for Song Title 5." },
            // Add more lyrics lines with appropriate timestamps
        ]
    }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const songListElement = document.getElementById('song-list');
const lyricsElement = document.getElementById('lyrics');

function loadSong(songIndex) {
    const song = songs[songIndex];
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    audioPlayer.src = song.src;
    updateActiveSong();
    updateLyrics(0); // Reset lyrics display
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function playSong() {
    audioPlayer.play();
    playPauseButton.textContent = "⏸️";
}

function pauseSong() {
    audioPlayer.pause();
    playPauseButton.textContent = "▶️";
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsPart = Math.floor(seconds % 60);
    return `${minutes}:${secondsPart < 10 ? '0' : ''}${secondsPart}`;
}

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    currentTimeElement.textContent = formatTime(audioPlayer.currentTime);
    durationElement.textContent = formatTime(audioPlayer.duration);
    updateProgressBarBackground();
    updateLyrics(audioPlayer.currentTime);
});

progressBar.addEventListener('input', () => {
    const time = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = time;
});

audioPlayer.addEventListener('ended', nextSong);

function updateProgressBarBackground() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.background = `linear-gradient(to right, #FFF78A ${progress}%, #FFAD84 ${progress}%)`;
}

function updateActiveSong() {
    const songItems = songListElement.querySelectorAll('li');
    songItems.forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function createSongList() {
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
        });
        songListElement.appendChild(li);
    });
}

function updateLyrics(currentTime) {
    const song = songs[currentSongIndex];
    const lyrics = song.lyrics || [];
    let currentLyrics = "";
    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time) {
            currentLyrics = lyrics[i].text;
        } else {
            break;
        }
    }
    lyricsElement.textContent = currentLyrics;
}

// Initialize
createSongList();
loadSong(currentSongIndex);

function startCountdown(endDate) {
    const timer = document.getElementById('timer');

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            clearInterval(interval);
            timer.textContent = "TIME'S UP";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Set the countdown end date to August 1st at 12 PM
window.onload = function () {
    const endDate = new Date("August 1, 2024 12:00:00").getTime();
    startCountdown(endDate);
};
