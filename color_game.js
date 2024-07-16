//1. sabse pehle ye patar karo ki cursor rectangle ke andar hai ki nahi

//2. ab ye calculate karo ki hum center se left par hai ya right par hai

//3. ab ye calculate karo ke hum center se kitna left par hai, jitna left par hai utni intensity se red 
// color lagao

var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
    var rectanglelocation = rect.getBoundingClientRect();
    var insiderectval = (details.clientX - rectanglelocation.left);

    if (insiderectval < rectanglelocation.width / 2) {
        var redcolor = gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 0, insiderectval);
        gsap.to(rect, {
            backgroundColor : `rgb(${redcolor}, 0, 0)`,
            ease : Power4
        });


    } else {
        var greencolor = gsap.utils.mapRange(rectanglelocation.width/2, rectanglelocation.width, 0, 255, insiderectval);
        gsap.to(rect, {
            backgroundColor : `rgb(0, ${greencolor}, 0)`,
            ease : Power4
        });
    }



});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor: "white"
    });
})

