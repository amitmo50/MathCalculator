window.Calculator = {};

initCalculator = function() {
	Calculator.firstNumber = null;
	Calculator.secondNumber = null;
	Calculator.action = null;
}

initCalculator();

$(function (){
	resultInput = $("#result");

	addNumberToInput = function(number) {
		var originValue = resultInput.val();
		var newValue = originValue + number;
		resultInput.val(newValue);
	}

	emptyResultInput = function() {
		resultInput.val("");		
	}

	$(".number-button").click(function(event){
		var numberButton = $(event.currentTarget);
		number = numberButton.data("value");
		addNumberToInput(number);
	});


	$(".delete-button").click(function(){
		emptyResultInput()
	});

	$("#plus-button").click(function() {
		Calculator.action = "plus";
		Calculator.firstNumber = resultInput.val();
		emptyResultInput();
	});

	$("#minus-button").click(function() {
		Calculator.action = "minus";
		Calculator.firstNumber = resultInput.val();
		emptyResultInput();
	})

	$("#multiple-button").click(function() {
		Calculator.action = "multiple";
		Calculator.firstNumber = resultInput.val();
		emptyResultInput();
	})

	$("#divide-button").click(function() {
		Calculator.action = "divide";
		Calculator.firstNumber = resultInput.val();
		emptyResultInput();
	})

	$("#result-button").click(function() {
		Calculator.secondNumber = parseInt(resultInput.val());
		Calculator.firstNumber = parseInt(Calculator.firstNumber);


    if(Calculator.action === "plus"){
    	result = Calculator.firstNumber + Calculator.secondNumber;
    }
    else if(Calculator.action === "minus"){
    	result = Calculator.firstNumber - Calculator.secondNumber;
    }
    else if(Calculator.action === "multiple"){
    	result = Calculator.firstNumber * Calculator.secondNumber;
    }
    else if(Calculator.action === "divide"){
    	result = Calculator.firstNumber / Calculator.secondNumber;
    	
    }	

		resultInput.val(result);	

		initCalculator();
    });
    $("body").keydown(function(e) {
       if(e.keyCode === 13){
       	$("#result-button").trigger("click");
       }
       else if(e.keyCode === 8){
       	$(".delete-button").trigger("click");
       }
       else if(e.keyCode === 96){
       	$("#0-button").trigger("click");
       }
        else if(e.keyCode === 97){
       	$("#1-button").trigger("click");
       }
        else if(e.keyCode === 98){
       	$("#2-button").trigger("click");
       }
        else if(e.keyCode === 99){
       	$("#3-button").trigger("click");
       }
        else if(e.keyCode === 100){
       	$("#4-button").trigger("click");
       }
        else if(e.keyCode === 101){
       	$("#5-button").trigger("click");
       }
        else if(e.keyCode === 102){
       	$("#6-button").trigger("click");
       }
        else if(e.keyCode === 103){
       	$("#7-button").trigger("click");
       }
        else if(e.keyCode === 104){
       	$("#8-button").trigger("click");
       }
        else if(e.keyCode === 105){
       	$("#9-button").trigger("click");
       }
        else if(e.keyCode === 107){
       	$("#plus-button").trigger("click");
       }
       else if(e.keyCode === 109){
       	$("#minus-button").trigger("click");
       }
       else if(e.keyCode === 111){
       	$("#divide-button").trigger("click");
       }
       else if(e.keyCode === 106){
       	$("#multiple-button").trigger("click");
       }
       else if(e.keyCode === 110){
       	$("#point-button").trigger("click");
       }
    });


});