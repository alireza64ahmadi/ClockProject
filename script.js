setInterval(() => {
    const hours = document.querySelector("#hours");
    const minute = document.querySelector("#minute");
    const second = document.querySelector("#second");
    const amPm = document.querySelector("#am-pm");

    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");
    
    
    let hr_dot = document.querySelector(".hr_dot");
    let min_dot = document.querySelector(".min_dot");
    let sec_dot = document.querySelector(".sec_dot");
    
    

    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    // tabdil kardan be saat12 saate
    if(h > 12 ){
        h = h-12;
    }
    // ezafe kardan sefr ba adad haye yel raghami
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;



    hours.innerHTML = h + "<br><span>Hours</span>";
    minute.innerHTML = m+ "<br><span>Minutes</span>";
    second.innerHTML = s+ "<br><span>Seconds</span>";
    amPm.innerHTML = am;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;


    hr_dot.style.transform = `rotate(${h * 30}deg`;
    min_dot.style.transform = `rotate(${m * 6}deg`;
    sec_dot.style.transform = `rotate(${s * 6}deg`;
})
