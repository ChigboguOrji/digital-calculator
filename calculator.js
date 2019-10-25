const log = console.info.bind(console);
const getNode = document.querySelector.bind(document)
const getAllNode = document.querySelectorAll.bind(document)
log('Activated')

const buttons = {
  'btn-plus': '+',
  'btn-minus': '-',
  'btn-times': '*',
  'btn-divide': '/',
  'clear-entry': 'clear-entry',
  'clear': 'clear',
  'btn-equals': 'equals',
  'btn-decimal': '.',
  'btn-zero': 0,
  'btn-one': 1,
  'btn-two': 2,
  'btn-three': 3,
  'btn-four': 4,
  'btn-five': 5,
  'btn-six': 6,
  'btn-seven': 7,
  'btn-eight': 8,
  'btn-nine': 9
}

const output = {
  'processed-data': '#processed-data',
  'unprocessed-data': '#unprocessed-data'
}

const buttonElt = [...getAllNode('button')]
let aggregator = ''

// clear all entry
const clearEntry = function () {
  aggregator = ''
  getNode(output["unprocessed-data"]).value = ''
  getNode(output["processed-data"]).value = ''
  log('aggregator is now "%s" after data is cleared', aggregator)
}

// compute result
const computeInput = function (aggregator) {
  let input = String(aggregator)
  if (!input.length) return false
  let result = eval(input)
  getNode(output["processed-data"]).value = result
  log(result)
}

// get the value of the clicked elt
const getEventTargetNodeValue = function (e) {
  let eventId = e.target.id
  if (buttons.hasOwnProperty(eventId)) {
    let value = buttons[eventId]

    if (value == 'equals') return computeInput(aggregator)
    if (value == 'clear-entry') return clearEntry()
    if (value == 'clear') return false

    aggregator += `${value}`
    getNode(output["unprocessed-data"]).value = aggregator
    log(aggregator)
  }
}


// attach event on page buttons elt
buttonElt.map(btn => btn.addEventListener('click', getEventTargetNodeValue, false))