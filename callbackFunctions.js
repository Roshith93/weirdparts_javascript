function callBackFun() {
	setTimeout(() => {
		console.log('Callback function');
	}, 2000);
}

callBackFun();

function newCallback(callBackFun2) {
	callBackFun2();
}

newCallback(() => console.log('Callback function1'));
