This GitHub repository houses the "Find Film Website," a project I developed as part of a Codecademy assignment. The objective was to connect to the themoviedb.org API to create a web application that could retrieve and display information about movies from their extensive database. This README will provide you with an overview of the project, how to set it up, and some additional notes.

Project Overview
The "Find Film Website" is a web application that leverages the themoviedb.org API to provide users with movie-related information and features. The following functionalities have been implemented:

Movie Details: You can search for movies by title and get detailed information such as the cast, rating, and release date.

Genre Filtering: You can sort movies by genre, allowing you to find films within your preferred categories.

Random Movie: The application provides an option to select a random movie from a random genre page, making it fun to discover new films.

Liked Movies: You can "like" movies, and they will be added to a liked movies section for future reference.

Please note that as of now, the website is designed for computer use only and is not responsive. However, there may be plans to make it responsive in the futur

Setting Up the Project
To try out the "Find Film Website," follow these steps:

Clone the Repository: Begin by cloning this repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-username/find-film-website.git
Obtain an API Key: You will need an API key from themoviedb.org to access their database. If you don't have one, you can sign up for an API key on their website here.

Configure API Key: Once you have your API key, open the script.js file in your cloned repository. Locate the third line where it says "tmdbKey =" and add your API key inside the double quotes.

javascript
Copy code
const tmdbKey = "your-api-key-here";

Feedback and contributions are welcome! If you have any suggestions, find issues, or want to enhance the project, please feel free to create a pull request or open an issue in this repository.

Thank you for exploring the "Find Film Website" project! Enjoy discovering and learning about movies with this application