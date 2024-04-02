function toggleRealTimeCounting() {
  const isChecked = document.getElementById('realTimeCheck').checked;
  document.getElementById('textInput').oninput = isChecked
    ? countCharacters
    : null;
  document.getElementById('countButton').disabled = isChecked;
}

function countCharacters() {
  const text = document.getElementById('textInput').value;
  const count = text.length;
  const countNoNewline = text.replace(/\n/g, '').length;
  const countNoWhitespace = text.replace(/\s/g, '').length;
  const lineCount = text ? text.split('\n').length : 0;

  document.getElementById('charCount').innerText = count;
  document.getElementById('charCountNoNewline').innerText = countNoNewline;
  document.getElementById('charCountNoWhitespace').innerText =
    countNoWhitespace;
  document.getElementById('lineCount').innerText = lineCount;
}

toggleRealTimeCounting();
