const quotes = [
    {
        quote: "나는 바보다",
        author: "'최주원'",
    },
    {
        quote: "나는 백나빈을 좋아한다",
        author: "'최주원'",
    },
    {
        quote: "나는 개다",
        author: "'최주원'",
    },
    {
        quote: "나는 노예다",
        author: "'최주원'",
    },
    {
        quote: "엄마ㅠㅠㅠ",
        author: "'최주원'",
    },
    {
        quote: "나는 마마보이다",
        author: "'최주원'",
    },
    {
        quote: "내 인생은 망했다",
        author: "'최주원'",
    },
    {
        quote: "난 커서 목사할거다",
        author: "'최주원'",
    },
    {
        quote: "나는 ㅂ이다",
        author: "'최주원'",
    },
    {
        quote: "나는 부모님 등골브레이커다",
        author: "'최주원'",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;