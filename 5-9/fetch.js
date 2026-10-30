console.log('Start');

// fetch() is asynchronous: the code after it keeps running while the data is loading
fetch('https://6a9b86970ad174e139e8b236.mockapi.io/City')
    .then(response => response.json())
    .then(data => {
        console.log('Inside fetch', data);
    });

console.log('End');
