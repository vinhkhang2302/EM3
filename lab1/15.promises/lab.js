const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Data rejected");
        }, 2000);
    });
};

fetchData().catch(console.error);