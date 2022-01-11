/** Task 1:
 * create 3 objects with the name movie1, movie2, movie3
 * Add 3 properties to it
 * - id -> just a unique id, you can start with 1
 * - name -> a movie name (e.g. COCO)
 * - image  -> an http link of the image on the internet
 * rating -> a rating number from 1 to 10
 *
 * After you create the movies, console log them.
 * Open the live server, and see the logs in the console of the browser
 *
 */

const movie1 = {
id: 1,
name: "Coco",
image: image="https://downloadhdwallpapers.in/wp-content/uploads/2018/02/Goosebumps-Movie.jpg" ,
rating: 8,

};


const movie2 = {

id: 2,
name: "1917 ",
image: "https://picfiles.alphacoders.com/336/thumb-1920-336319.jpg" ,
rating: 6.5,
    
};
const movie3 = {
    
id: 3,
name: "777 Looool ",
image: "https://buzz.tt/media/posters/1981/backdrops_1_1500.jpg" ,
rating: 8,
    
};

console.log(movie1);
console.log(movie2);
console.log(movie3);



// add the movies variables here ....

/** Task 2:
 * Create an array `movies`
 * Add to it the movies that you created on top.
 * Once you add one movie,
 * you will see the movie card in the html page!
 *
 * Don't add to the array the movies variables,
 * just copy paste the content to be in the following format
 * [
 *    {
 *       prop: value,
 *       prop: value,
 *       prop: value,
 *    },
 * ]
 */

const movies= [
    {
        id: 1,
        name: "Coco",
        image: image="https://downloadhdwallpapers.in/wp-content/uploads/2018/02/Goosebumps-Movie.jpg" ,
        rating: 8,
        
        },
        
        
        {
        
        id: 2,
        name: "1917 ",
        image: "https://picfiles.alphacoders.com/336/thumb-1920-336319.jpg" ,
        rating: 6.5,
            
        },
        {
            
        id: 3,
        name: "777 Looool ",
        image: "https://buzz.tt/media/posters/1981/backdrops_1_1500.jpg" ,
        rating: 8,
            
        }
]

/** TASK 3:
 * Create a new file call it `movies.json`
 * Copy paste the content of the array inside the json file
 * Make sure it's a json format.
 */
