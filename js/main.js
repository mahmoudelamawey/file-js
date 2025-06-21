var quotesArray = [
    {
        line:"“Be yourself; everyone else is already taken.”",
        author: "―Oscar Wilde"
    },
    {
        line: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {
        line: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },
    {
        line: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
    },
    {
        line: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi"
    }
];


var generateQuote = function () {
       
    var randomIndex = Math.floor(Math.random() * quotesArray.length);
    console.log(randomIndex);
    document.getElementById("line").innerHTML = quotesArray[randomIndex].line;
    document.getElementById("author").innerHTML = quotesArray[randomIndex].author;
}