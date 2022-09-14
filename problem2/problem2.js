let quotes = [
    `“अपने दिल, दिमाग और आत्मा को अपने छोटे से छोटे कामों में भी लगाओ। यही सफलता का राज है।” `,
    `“जी भर के जीयें। इस तरह से की जैसे आपको यहां हमेशा रहना है।” `,
    `“Happiness is not something readymade. It comes from your own actions.” `,
    `“अपने आप को बेहतर बनाने में इतने व्यस्त रहें कि आपके पास दूसरों की आलोचना करने का समय न हो।” `,
    `“Success is not final, failure is not fatal: it is the courage to continue that counts.” `,
    ` “एक साथ आना एक शुरुआत है, एक साथ रहना प्रगति है, एक साथ काम करना सफलता है।” `,
    `“It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.” `,
    `“You are never too old to set another goal or to dream a new dream.” `,
    `“जिस इंसान ने कभी गलती नहीं की उसने कभी कुछ नया करने की कोशिश ही नहीं की।” `,
    `“The bad news is time flies. The good news is you’re the pilot.” `,
];

let author = [
    ` - स्वामी विवेकानंद`,
    `- महात्मा गांधी`,
    `-Dalai Lama`,
    `- चेतन भगत`,
    `- Winston Churchill`,
    `-हेनरी फोर्ड`,
    `– William James`,
    `– C.S. Lewis`,
    `– अल्बर्ट आइंस्टीन`,
    `- Michael Altshuler`,
];

let color_change = [
    `#f87171`,
    `#fdba74`,
    `#fde68a`,
    `#84cc16`,
    `#99f6e4`,
    `#22d3ee`,
    `#38bdf8`,
    `#93c5fd`,
    `#f472b6`,
    `#818cf8`,
];

function newQuaote() {

    let random_num = Math.random();
    let quote_list = Math.floor(random_num * (quotes.length));
    let author_list = Math.floor(random_num * (author.length));
    let clr_change = Math.floor(random_num * (color_change.length));
    

    // let body_clr = document.getElementsByTagName("body");
    // body_clr.style.backgroundColor = "red";

    
    document.getElementById("quote_list").innerHTML = quotes[quote_list];
    document.getElementById("author_list").innerHTML = author[author_list];
    document.getElementById("quote_list").style.color = color_change[clr_change];
    document.getElementById("author_list").style.color = color_change[clr_change];
    document.getElementById("button").style.backgroundColor = color_change[clr_change];
    document.body.style.backgroundColor =  color_change[clr_change];



}

function timeofday(){

    let time = new Date();
    let hour = time.getHours();
    let time_of_day = document.getElementById("time_of_day").innerHTML;

    if(hour == 0 || hour < 12){
        time_of_day = "morning";
    } else if(hour < 17){
        time_of_day = "afternoon";
    } else if(hour < 20){
        time_of_day = "evening";
    } else if(hour == 20 || hour > 20){
        time_of_day = "night";
    }

    
    document.getElementById("time_of_day").innerHTML = time_of_day;
}

setInterval(timeofday, 1000);