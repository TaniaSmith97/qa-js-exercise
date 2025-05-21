const fetch = require('node-fetch');
const exercise6 = ()=>
    {
        console.log('Exercise 6');

        // Please Complete Exercise 6 here
        
        const usersUrl = 'https://jsonplaceholder.typicode.com/users';
        const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

        try{
            fetch(usersUrl)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    data.forEach((user)=> {
                        console.log(`User: ${user.name}, Email: ${user.email}, Company: ${user.company }`);
                    });
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        }catch (error) {
            console.error('Error fetching data:', error);
        }
        try{
            fetch(postsUrl)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    data.forEach((posts)=> {
                        console.log(`Post: ${posts.title}`);
                    });
                    const quiCount = data.filter(post => post.title.includes('qui')).length;
                    console.log(`Number of posts containing "qui" in the title: ${quiCount}`);
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
        }catch (error) {
            console.error('Error fetching data:', error);
        }
        // End of Exercise 6
        console.log("Exercise 6 completed");
    }

module.exports = exercise6;
