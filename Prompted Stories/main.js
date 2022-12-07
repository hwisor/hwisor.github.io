 
 /// Dialog Box ///

(function dialog() {    
        var dialog = document.getElementById('example');    
            document.getElementById('open').onclick = function() {    
            dialog.show();    
        };    
            document.getElementById('close').onclick = function() {    
            dialog.close();    
        };    
        })();

/// Prompt Generator ///

var genre = ['fantasy',
             'adventure',
             'horror',
             'mystery',
             'thriller',
             'dystopian',
             'science fiction',
             ];

var perspective = ['first-person',
                'second-person',
                'third-person',
                ];

var tone = ['scary',
             'sinister',
             'somber',
             'exciting',
             'humorous',
             'dark',
             'gloomy',
             'tense',
             'whimsical',
             'lighthearted',
             'casual',
             'formal',
             'satirical',
             'romantic',
             ];

var setting = ['airport',
             'museum',
             'beach',
             'castle',
             'casino',
             'hotel',
             'park',
             'graveyard',
             'garden',
             'prison',
             'classroom',
             'small town',
             'big city',
             'theater',
             'kitchen',
             'submarine',
             'cliff',
             'attic',
             'field',
             'cafe',
             'desert',
             'farm',
             'house party',
             'library',
             'restaurant',
             'lake',
             'river',
             'mall',
             'bedroom',
             ];

var generator = document.getElementById('generator');
var idea = document.getElementById('idea');

function randomized(thing) {
  var index = Math.floor(Math.random() * thing.length);
  console.log(index);
  return thing[index];
}

generator.addEventListener('click', function() {
  idea.textContent = randomized(genre) + ', ' + randomized(perspective) + ', ' + randomized(tone) + ', ' + randomized(setting);
});
