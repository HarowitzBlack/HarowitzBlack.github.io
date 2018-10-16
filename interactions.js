const circle = new mojs.Shape({
	left:0,
	top:0,
	strokeWidth: 5,
	stroke: "#f44268",
	fill:"none",
	radius: {0:30},
	duration: 200,
	loop:true,
}).then({
	strokeWidth:10,
	scale: {to:0.9,easing:"sin.in"},
	duration:50,
}).then({
	strokeWidth:0,
	scale: {to:1.2,easing:"elastic.out"},
	duration:400,
})

const rays = new mojs.Burst({
	left:0,top:0,
	count:8,
	angle: {0:30},
	radius: {30:60},
	children:{
		shape:"line",
		stroke:"#aaa",
	}
})


const circle1 = new mojs.Shape({
	left:0,
	top:0,
	strokeWidth: 0,
	stroke: "#f44268",
	fill:"#f44268",
	radius: {20:0},
	duration: 150,
	loop:true,
})

const m2Burst = new mojs.Burst({
	left:0,
	top:0,
	count: 5,
	isSwirl:true,
	radius: 30,
	degree:90,
	children:{
		fill: ["red","pink","aqua"],

	}
})

document.addEventListener("click",function(e){
	circle.tune({x:e.pageX,y:e.pageY});
	circle1.tune({x:e.pageX,y:e.pageY});
	rays.tune({x:e.pageX,y:e.pageY});
	circle.replay();
	circle1.replay();
	rays.replay();
})
