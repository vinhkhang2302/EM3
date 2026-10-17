// Fetch one user from a public test API and print some of their data
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        // Stop if the server did not answer with a success status
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convert the response body from JSON text to a JavaScript object
        const userData = await response.json();

        // Destructuring: pick fields, including nested ones inside "address"
        const { id, name, email, address: { street, city } } = userData;

        console.log(`ID: ${id}`);
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Street: ${street}`);
        console.log(`City: ${city}`);

    } catch (error) {
        console.log('Error fetching user Data', error);
    }
}

fetchUserData();