window.addEventListener('load', start);

function start() {
  var inputFrequency = document.querySelector('.input-freq');

  inputFrequency.addEventListener('input', handleInputFrequencyChange);
  showPodcastFromFrequency('87.5');
}

function handleInputFrequencyChange(event) {
  var currentFrequency = event.target.value;

  var inputReaders = document.querySelector('.input-reader');
  inputReaders.value = currentFrequency;

  showPodcastFromFrequency(currentFrequency);
}

function showPodcastFromFrequency(frequency) {
  var divPodcasts = document.querySelector('#divPodcasts');

  // ES5
  /*
  var hasPodcast = false;
  var podcast = null;

  for (var i = 0; i < realPodcasts.length; i++) {
    var currentPodcast = realPodcasts[i];

    if (currentPodcast.id === frequency) {
      hasPodcast = true;
      podecast = currentPodcast;
    }
  }*/

  //ES6+
  var currentPodcast = realPodcasts.find((podcast) => {
    return frequency === podcast.id;
  });

  if (!!currentPodcast) {
    renderPodcastData(currentPodcast);
  } else {
    divPodcasts.textContent = 'Nenhum Podcast encontrado!';
  }
}

function renderPodcastData(podcast) {
  var { img, title, description } = podcast;

  divPodcasts.innerHTML = `
  <h2> ${title}</h2>
  <img src='/img/img/${img}' />
  <p>${description}</p>
  `;
}
