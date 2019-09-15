const readline = require('readline-sync');
const state = require('./state.js');

function robot() {
  const content = {
    maximumSentences: 7
  };
  
  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();
  content.language = askAndReturnLanguage();
  content.renderOption = askAndReturnRenderOption();
  state.save(content);
  
  function askAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia search term: ');
  }
  
  function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of'];
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ');
    const selectedPrefixText = prefixes[selectedPrefixIndex];
    
    return selectedPrefixText;
  }

  function askAndReturnLanguage() {
    return readline.question('Language[--]:');
  }

  function askAndReturnRenderOption() {
    const renderOptions = ['Kdenlive', 'After Effects'];
    const selectedRenderOptionIndex = readline.keyInSelect(renderOptions, 'Render option: ');
    const selectedRenderOption = renderOptions[selectedRenderOptionIndex];
    return selectedRenderOption;
  }

}

module.exports = robot