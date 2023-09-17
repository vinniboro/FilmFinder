// API KEY FROM TMDB
const tmdbKey = 'f10182e3ab0075420edbe2f883ef56b5';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
   const genreRequestEndpoint = 'genre/movie/list';
   // Query parameter to add more specificity to our request (use your API key)
   const queryString = `?api_key=${tmdbKey}`;
   const requestParams = queryString;

   // Construct the complete URL
   const urlToFetch = tmdbBaseUrl + '/' + genreRequestEndpoint + requestParams;
   
   // Use fetch() to send a GET request to urlToFetch. Await the response and save it to a variable called response
   try {
      // USe the fetch API to make the API call
      const response = await fetch(urlToFetch);
      
      // Conditional statement that checks if the .ok property of the response object evaluates to a truthy value
      
      // Check if the response is successful (status code 200-299)
      if (response.ok) {
        // Parse the JSON response
        const jsonResponse = await response.json();

        // To make sure code is working
        console.log(jsonResponse);

        // Save the genres property in a variable
        const genres = jsonResponse.genres;
        console.log(genres);

        // Resolve the promise with the fetched data
        return genres;
      } else{
        // IF the response is not OK, throw an error
        throw new Error(`Failed to fetch data from TMDB API: ${response.status}`);
      }
      
   } catch (error) {
      // Handle errors by rejecting the promise
      throw new Error(`Error fetching data: ${error.message}`);
   }
};


const getMovies = async () => {
   const selectedGenre = getSelectedGenre(); // Assuming getSelectedGenre() captures the user's selected genre
   const discoverMovieEndpoint = '/discover/movie';

   // Create requestParams with two parameters
   const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;

   // Combine the base URL, endpoint, and query parameters to create the URL
   const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;
   
   try {
    // Use the fetch API to make the API call
    const response = await fetch(urlToFetch);

    // Check if the response is successful
    if(response.ok){
      // Parse the JSON response
      const jsonResponse = await response.json();

      // Log the jsonResponse
      console.log(jsonResponse);

      // Store the results property in a variable
      const movies = jsonResponse.results

      // Log the movies variable
      console.log(movies);

      // Return the mvoies
      return movies;
    } else {
      // If the response is not OK, throw an error
      throw new Error(`Failed to fetch data from TMDB API: ${response.status}`);
    }

   } catch(error){
    // Handle errors by rejecting the promise
    throw new Error(`Error fetching data: ${error.message}`);
   }

};


const getMovieInfo = async (movie) => {
   const movieId = movie.id;
   const movieEndpoint = `/movie/${movieId}`;
   // Create requestParams with the API key
   const requestParams = `?api_key=${tmdbKey}`;

   // Combine the base URL, endpoint, and query parameters to create the URL
   const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;

   try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
         const movieInfo = await response.json();
         return movieInfo;
      } else {
         // If the response is not OK, throw an error
         throw new Error(`Failed to fetch data from TMDB API: ${response.status}`);
      }
   } catch (error) {
      // Handle errors by rejecting the promise
      throw new Error(`Error fetching data: ${error.message}`);
   }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
   const movieInfo = document.getElementById('movieInfo');
   if (movieInfo.childNodes.length > 0) {
      clearCurrentMovie();
   };

   try {
      const movies = await getMovies();

      // Check if there are no movies
      if (movies.length === 0) {
         console.log('No movies found.');
         return;
      }

      const randomMovie = getRandomMovie(movies);
      const info = await getMovieInfo(randomMovie);
      displayMovie(info);
   } catch (error) {
      console.error('Error:', error.message);
   }
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;