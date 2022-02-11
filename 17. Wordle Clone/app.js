const words = [
    'Abuse',
    'Adult',
    'Agent',
    'Anger',
    'Apple',
    'Award',
    'Basis',
    'Beach',
    'Birth',
    'Block',
    'Blood',
    'Board',
    'Brain',
    'Bread',
    'Break',
    'Brown',
    'Buyer',
    'Cause',
    'Chain',
    'Chair',
    'Chest',
    'Chief',
    'Child',
    'China',
    'Claim',
    'Class',
    'Clock',
    'Coach',
    'Coast',
    'Court',
    'Cover',
    'Cream',
    'Crime',
    'Cross',
    'Crowd',
    'Crown',
    'Cycle',
    'Dance',
    'Death',
    'Depth',
    'Doubt',
    'Draft',
    'Drama',
    'Dream',
    'Dress',
    'Drink',
    'Drive',
    'Earth',
    'Enemy',
    'Entry',
    'Error',
    'Event',
    'Faith',
    'Fault',
    'Field',
    'Fight',
    'Final',
    'Floor',
    'Focus',
    'Force',
    'Frame',
    'Frank',
    'Front',
    'Fruit',
    'Glass',
    'Grant',
    'Grass',
    'Green',
    'Group',
    'Guide',
    'Heart',
    'Henry',
    'Horse',
    'Hotel',
    'House',
    'Image',
    'Index',
    'Input',
    'Issue',
    'Japan',
    'Jones',
    'Judge',
    'Knife',
    'Laura',
    'Layer',
    'Level',
    'Lewis',
    'Light',
    'Limit',
    'Lunch',
    'Major',
    'March',
    'Match',
    'Metal',
    'Model',
    'Money',
    'Month',
    'Motor',
    'Mouth',
    'Music',
    'Night',
    'Noise',
    'North',
    'Novel',
    'Nurse',
    'Offer',
    'Order',
    'Other',
    'Owner',
    'Panel',
    'Paper',
    'Party',
    'Peace',
    'Peter',
    'Phase',
    'Phone',
    'Piece',
    'Pilot',
    'Pitch',
    'Place',
    'Plane',
    'Plant',
    'Plate',
    'Point',
    'Pound',
    'Power',
    'Press',
    'Price',
    'Pride',
    'Prize',
    'Proof',
    'Queen',
    'Radio',
    'Range',
    'Ratio',
    'Reply',
    'Right',
    'River',
    'Round',
    'Route',
    'Rugby',
    'Scale',
    'Scene',
    'Scope',
    'Score',
    'Sense',
    'Shape',
    'Share',
    'Sheep',
    'Sheet',
    'Shift',
    'Shirt',
    'Shock',
    'Sight',
    'Simon',
    'Skill',
    'Sleep',
    'Smile',
    'Smith',
    'Smoke',
    'Sound',
    'South',
    'Space',
    'Speed',
    'Spite',
    'Sport',
    'Squad',
    'Staff',
    'Stage',
    'Start',
    'State',
    'Steam',
    'Steel',
    'Stock',
    'Stone',
    'Store',
    'Study',
    'Stuff',
    'Style',
    'Sugar',
    'Table',
    'Taste',
    'Terry',
    'Theme',
    'Thing',
    'Title',
    'Total',
    'Touch',
    'Tower',
    'Track',
    'Trade',
    'Train',
    'Trend',
    'Trial',
    'Trust',
    'Truth',
    'Uncle',
    'Union',
    'Unity',
    'Value',
    'Video',
    'Visit',
    'Voice',
    'Waste',
    'Watch',
    'Water',
    'While',
    'White',
    'Whole',
    'Woman',
    'World',
    'Youth',
]
let currWordIndex = Math.floor(Math.random() * words.length - 1)
let currWord = words[currWordIndex].toLowerCase()

let form = document.querySelector('form')
let wordInput = document.querySelector('.input__field')
let inputBtn = document.querySelector('.submit__btn')
let tBody = document.querySelector('tbody')
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let Submitcount = 0

function validateInput(word, theElem) {
    let newMap = word.value.split('').map((item, index) => {
        if (currWord[index] == word.value[index]) {
            item = '<span class="correct">' + item + '</span>'
        }
        if (currWord.includes(item) && currWord[index] !== item) {
            item = '<span class="indexed">' + item + '</span>'
        }

        return item
    })

    let vals = newMap
        .map((val, index) => {
            return val
        })
        .join('')

    theElem.innerHTML = vals
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (wordInput.value.length == 5) {
        Submitcount++
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        validateInput(wordInput, td)
        tr.appendChild(td)
        tBody.appendChild(tr)
        if (Submitcount <= 5 && wordInput.value.toLowerCase() === currWord) {
            h1.textContent = 'You Win!'
            wordInput.placeholder = 'Congratulations!'
            wordInput.disabled = true
            inputBtn.style.display = 'none'
        } else if (Submitcount == 5 && wordInput.value.toLowerCase() !== currWord) {
            h2.textContent = 'You Loose! Reload to play again'
            wordInput.disabled = true
            wordInput.placeholder = 'Try Again!'
            inputBtn.style.display = 'none'
        }
        wordInput.value = ''
    } else {
        alert('Please enter a 5 letter word')
    }
    console.log(currWord)
})