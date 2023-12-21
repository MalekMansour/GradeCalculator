function calculateGrade() {
    const currentGrade = parseFloat(document.getElementById('currentGrade').value);
    const desiredGrade = parseFloat(document.getElementById('desiredGrade').value);
    const finalWeight = parseFloat(document.getElementById('finalWeight').value);
  
    if (isNaN(currentGrade) || isNaN(desiredGrade) || isNaN(finalWeight)) {
      alert('Please enter valid numbers.');
      return;
    }
  
    if (finalWeight < 0 || finalWeight > 100) {
      alert('Final Exam Weight should be between 0 and 100.');
      return;
    }
  
    const currentWeight = (100 - finalWeight) / 100;
    const requiredFinalGrade = ((desiredGrade - (currentWeight * currentGrade)) / (finalWeight / 100)).toFixed(2);
  
    document.getElementById('finalExamGrade').textContent = `You need ${requiredFinalGrade}% on the final exam.`;
    document.getElementById('result').style.display = 'block';
  
    displayGif(parseFloat(requiredFinalGrade));
  }
  
  
  function setPassingGrade() {
    document.getElementById('desiredGrade').value = '50';
  }
  
  function displayGif(neededGrade) {
    let gifSrc = '';
  
    if (neededGrade < 50) {
      gifSrc = 'gifs/cat3.gif'; // Replace with your GIF image URL
    } else if (neededGrade >= 50 && neededGrade < 70) {
      gifSrc = 'gifs/cat2.gif'; // Replace with your GIF image URL
    } else {
      gifSrc = 'gifs/cat1.gif'; // Replace with your GIF image URL
    }
  
    document.getElementById('passingGif').src = gifSrc;
    document.getElementById('gifDisplay').style.display = 'block';
  }
  
  function copyGradeLink() {
    const finalExamGrade = document.getElementById('finalExamGrade').textContent;
    const textArea = document.createElement('textarea');
    textArea.value = finalExamGrade;
  
    // Hide the text area from the user
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '0';
    textArea.style.height = '0';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
  
    // Select and copy the text
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
  
