const cardData = [
    {
        imageSrc: './assets/Lofistudy.jpg',
        title: 'Card Title 1',
        audio: './assets/afro-inst.mp3',
    },
    {
        imageSrc: './assets/desktop.jpg',
        title: 'Card Title 2',
        audio: './assets/afro2-inst.mp3',
    },
    {
        imageSrc: './assets/Lofistudy.jpg',
        title: 'Card Title 3',
        audio: './assets/afro3-inst.mp3',
    },
    {
        imageSrc: './assets/desktop.jpg',
        title: 'Card Title 4',
        audio: './assets/dancehall-inst.mp3',
    },
    {
        imageSrc: './assets/Lofistudy.jpg',
        title: 'Card Title 5',
        audio: './assets/afro-inst.mp3',
    },
]

let currentAudio = null;

function generateCards() {
    const cardContainer = document.querySelector('#cardContainer')

    cardData.forEach((card) => {
        const cardCol = document.createElement('div');
        cardCol.classList.add('col-4');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('cardDiv');
        cardDiv.style.backgroundColor = '#ECEFF6';
        cardDiv.style.borderRadius = '4px';
        cardDiv.style.cursor = 'pointer';

        const cardImg = document.createElement('img');
        cardImg.src = card.imageSrc;
        cardImg.className = 'card-img-top';
        cardImg.style.height = '110px';
        cardImg.style.objectFit = 'cover';
        cardImg.alt = '...';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body p-2';

        const cardTitle = document.createElement('h6');
        cardTitle.className = 'card-title';
        cardTitle.textContent = card.title;

        const audio = document.createElement('audio');
        audio.src = card.audio;
        audio.controls = false;

        cardDiv.addEventListener('click', () => {
            if (currentAudio && currentAudio !== audio) {
                currentAudio.pause();
            }

            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }

            currentAudio = audio;
        });

        cardBody.appendChild(cardTitle);
        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardBody);
        cardDiv.appendChild(audio);
        cardCol.appendChild(cardDiv);
        cardContainer.appendChild(cardCol);
    })
}

function togglePlayPause() {
    const playPauseButton = document.querySelector('#playPauseButton');
    if (currentAudio) {
      if (currentAudio.paused) {
        currentAudio.play();
        playPauseButton.classList.remove('bi-play-fill');
        playPauseButton.classList.add('bi-pause-fill');
      } else {
        currentAudio.pause();
        playPauseButton.classList.remove('bi-pause-fill');
        playPauseButton.classList.add('bi-play-fill');
      }
    }
  }
  
  



window.addEventListener('load', () => {
    generateCards();

    document.getElementById('playPauseButton').addEventListener('click', togglePlayPause);

})



