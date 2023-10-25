// Higher Order Functions

/* A higher order function is a function that does at least one of the following:
    - Takes one or more functions as an arg (parameter)
    - Returns a function as the result
*/

import { posts } from "./HOF_posts.js";

console.clear();



//forEach()
posts.forEach(post => {
    console.log(post);
});

console.clear();


//filter()
// save posts from userId === 1
const filteredPosts = posts.filter((post) => {
    return post.userId === 10;
});

console.log(filteredPosts);


//map()
const mappedPosts = filteredPosts.map((post) =>{
    return post.id * 10;
});

console.log(mappedPosts);



//reduce()
// returns sums of id from mappedPosts
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});

console.log(reducedPostsValue);










