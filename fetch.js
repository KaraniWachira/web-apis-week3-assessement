

//remember how to use fetch method----------------------
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(json => console.log(json))


//fetch('https://jsonplaceholder.typicode.com/posts')
async function getJSONPlaceHolder(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();
}

getJSONPlaceHolder()
.then(data => console.log(data))


//using POST method to add new data---------------------

const btnElement = document.getElementById('.btn');
const newText = {
    name: 'The Jitu',
    job: 'Software Development Company'
};

const clickHandler = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'POST',
            body: JSON.stringify(newText),
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newText)
        });
        
        const data = await response.json();

        if (!response.ok) {
            console.log(data.description);
            return;
        }

        console.log(data);
    } catch (error) {
        console.log(error);
    }

};


//using delete method to delete data----------------------------

const btnElement = document.getElementById('.btn');

const clickHandler = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        });
        
        const data = await response.json();

        if (!response.ok) {
            console.log(data.description);
            return;
        }

        console.log(data);
    } catch (error) {
        console.log(error);
    }

};


//using GET method view data from the API------------------------------

const btnElement = document.getElementById('btn');

const clickHandler = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();

        if (!response.ok) {
            console.log(data.description);
            return;
        }
        console.log(data.title);
    } catch (error) {
        console.log(error);
    }
};












