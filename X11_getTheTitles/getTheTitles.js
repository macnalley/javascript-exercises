const getTheTitles = function(books) {
    // let titles = [];
    
    // for (book of books) {
    //     titles.push(book.title);
    // }

    // return titles;

    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
