$(document).ready(function(){
  trainer.changeColor();
  $("#progress-box").hide();
  $("#testing-box").hide();
  $("#code-box").hide();  
  $("#test-box").hide();
});

var utils = {
  randomColor : function() {
    return { r: Math.round(Math.random() * 255),
             g: Math.round(Math.random() * 255),
             b: Math.round(Math.random() * 255) };
  },

  toRgb : function(color) {
    return "rgb(" + color.r + "," + color.g + "," + color.b + ")";
  },

  normalize : function(color) {
    return { r: color.r / 255, g: color.g / 255, b: color.b / 255 };
  }
}

var trainer = {
  currentColor : utils.randomColor(),

  data : [],

  pickSwatch : function(color) {
    var result = { input: utils.normalize(this.currentColor),
                   output: { black : color == 'black' ? 1 : 0}};
    this.data.push(result);

    this.changeColor();

    if (this.data.length == 5) {
      $("#test-box").show();
    }
  },

  changeColor : function() {
    this.currentColor = utils.randomColor();
    var rgb = utils.toRgb(this.currentColor);
    $(".swatch").css("backgroundColor", rgb);
  },

  trainNetwork : function() {
    $("#training-box").hide();
    $("#progress-box").show();

    if(window.Worker) {
      var worker = new Worker("training-worker.js");
      worker.onmessage = this.onMessage;
      worker.onerror = this.onError;
      worker.postMessage(JSON.stringify(this.data));
    }
    else {
      var net = new brain.NeuralNetwork();
      net.train(this.data, {
        iterations: 9000
      });
      tester.show(net);
    }
  },

  onMessage : function(event) {
    var data = JSON.parse(event.data);
    if(data.type == 'progress') {
      trainer.showProgress(data);
    }
    else if(data.type == 'result') {
      var net = new brain.NeuralNetwork().fromJSON(data.net);
      tester.show(net);
    }
  },

  onError : function(event) {
    $("#training-message").text("error training network: " + event.message);
  },

  showProgress : function(progress) {
    var completed = progress.iterations / trainer.iterations * 100;
    $("#progress-completed").css("width", completed + "%");
  }
}

var tester = {
  show : function(net) {
    $("#progress-box").hide();
    runNetwork = net.toFunction();
    runNetwork.name = "runNetwork"; // for view code later
    this.testRandom();
    $("#testing-box").show();
  },

  testRandom : function() {
    this.testColor(utils.randomColor());
  },

  testColor : function(color) {
    var rgb = utils.toRgb(color);
    $(".swatch").css("backgroundColor", rgb);

    var color = utils.normalize(color);
    $("#nn-swatch").css("color", nnColor(color));
  },

  viewCode : function(type) {
    if(type == 'nn' && !$("#nn-swatch-box").hasClass("selected")) {
      $("#code-header").text("neural network code:");
      var code = "var textColor = " + nnColor.toString()
                  + "\n\nvar runNetwork = " + runNetwork.toString();
      $("#code").text(code);
      $(".swatch-box").removeClass("selected");
      $("#nn-swatch-box").addClass("selected");
      $("#code-box").show();
    }
    
    else {
      $("#code-box").hide();
      $(".swatch-box").removeClass("selected");
    }
  }
}

var nnColor = function(bgColor) {
  var output = runNetwork(bgColor);
  if (output.black > .5) {
    return 'black';
  }
  return 'white';
}
