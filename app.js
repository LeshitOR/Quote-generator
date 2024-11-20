// variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `Mahatma Gandhi`
},{
    quote :`"If you want to live a happy life, tie it to a goal, not to people or things.`,
    person : `Albert Enstein`
},{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `Mahatma Gandhi`
}
,{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `Mahatma Gandhi`
},{
    quote :`"If you want to live a happy life, tie it to a goal, not to people or things.`,
    person : `Albert Toussaint`
},{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `badadi Patata`
}
,{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `Louis Fuigo`
},{
    quote :`"If you want to live a happy life, tie it to a goal, not to people or things.`,
    person : `William Enstein`
},{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `Kioka Guillaume`
}
,{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `Leonardo Dicaprio`
},{
    quote :`"If you want to live a happy life, tie it to a goal, not to people or things.`,
    person : `Enma Salamandre`
},{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `Philemon Yogolelo`
}
,{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `Sundiata Keita`
},{
    quote :`"If you want to live a happy life, tie it to a goal, not to people or things.`,
    person : `Jacob Zuma`
},{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `Philipp Diop`
}
,{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `Mark Zukerberg`
},{
    quote :`"If you want to live a happy life, tie it to a goal, not to people or things.`,
    person : `Luffy DePaille`
},{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `Kakashi Hatake`
}
,{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `Eren Jaegar`
},];

btn.addEventListener('click' , function(){

    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})