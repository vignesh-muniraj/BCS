// const movies = [
//   {
//     id: 1,
//     title: "Baahubali",
//     director: "S. S. Rajamouli",
//     year: 2015,
//     ratings: [8, 9, 10],
//     genre: "Action",
//   },
//   {
//     id: 2,
//     title: "Arjun Reddy",
//     director: "Sandeep Reddy Vanga",
//     year: 2017,
//     ratings: [9, 8, 9],
//     genre: "Drama",
//   },
//   {
//     id: 3,
//     title: "Mahanati",
//     director: "Nag Ashwin",
//     year: 2018,
//     ratings: [10, 9, 8],
//     genre: "Biography",
//   },
//   {
//     id: 4,
//     title: "Eega",
//     director: "S. S. Rajamouli",
//     year: 2012,
//     ratings: [7, 8, 9],
//     genre: "Fantasy",
//   },
//   {
//     id: 5,
//     title: "Jersey",
//     director: "Gowtam Tinnanuri",
//     year: 2019,
//     ratings: [9, 9, 8],
//     genre: "Sports",
//   },
// ];

// // ===== YOUR CODE BELOW =====
// // Write a function that checks if all movies of a genre have high ratings
// const allRatingsAboveForGenre = (movies, rating, genre) => {
//   const movieName = movies.filter((movie) => movie.genre == genre);
//   console.log(movieName);
// const ratingValue = movieName.every(movie => movie.ratings.every(rt => rt > rating))
// if(ratingValue){
//      return `Yes, all ${genre} movies are above ${rating} ratings`;
// }
// else{
//     return `No, not all ${genre} movies are above ${rating} ratings`;

// }
// };

// console.log(allRatingsAboveForGenre(movies, 7, "Action"));
// console.log(allRatingsAboveForGenre(movies, 8, "Biography"));

const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// ===== YOUR CODE BELOW =====
// Write a function that finds a movie by ID and returns formatted details
const getMovieDetails = (movies, id) => {
  const movieDetails = movies.filter((movie) => movie.id == id);
  const vowels = ["a", "e", "i", "o","u"];
  if (movieDetails.length != 0) {
    const fname = movieDetails[0].genre.slice(0, 1).toLowerCase();
    if (vowels.includes(fname)) {
      return `${movieDetails[0].title} is an ${movieDetails[0].genre} movie`;
    } else {
      return `${movieDetails[0].title} is a ${movieDetails[0].genre} movie`;
    }
  }
  return `Movie Not Fount`;
};

console.log(getMovieDetails(movies, 1));
console.log(getMovieDetails(movies, 5));
console.log(getMovieDetails(movies, 6));
