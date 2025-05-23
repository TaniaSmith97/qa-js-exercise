const exercise6 = () => {
  console.log("===Exercise 6===");

  // Please Complete Exercise 6 here
  //Fetched users from https://jsonplaceholder.typicode.com/users.
  //Fetched posts from https://jsonplaceholder.typicode.com/posts.
  // declared base urls in 9 and 10
  const usersUrl = "https://jsonplaceholder.typicode.com/users";
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";

  //wrapped in try catch for error handling
  try {
    fetch(usersUrl)
      .then((response) => {
        return response.json();
      })
      //Logged each user’s name, email, and company.
      .then((data) => {
        data.forEach((user) => {
          console.log(
            `User: ${user.name}, Email: ${user.email}, Company: ${user.company}`
          );
        });
      })
      //Error handling for fetch
      .catch((error) => {
        console.error("There is a problem with your fetch operation:", error);
      });
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  //Fetch posts from /posts and log titles only.
  try {
    fetch(postsUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((posts) => {
          console.log(`Post: ${posts.title}`);
        });

        //Count how many posts contain the word "qui" in the title.
        const quiCount = data.filter((post) =>
          post.title.includes("qui")
        ).length;
        console.log(
          `Number of posts containing "qui" in the title: ${quiCount}`
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } catch (error) {
    console.log(error, "error");
  }

  // End of Exercise 6
  console.log("Exercise 6 completed");
};

export default exercise6;
