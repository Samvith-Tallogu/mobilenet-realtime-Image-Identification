function preload() { }
function setup() {
  canvas = createCanvas(450, 340);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded() {
  console.log('Model is Loaded');
}
function draw() {
  image(video, 0, 0, 450, 340);
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  else {
    console.log(results);
    document.getElementById('result_object_name').innerHTML = results[0].label;
    document.getElementById('result_object_accuracy').innerHTML = results[0].confidence.toFixed(2);
  }
}