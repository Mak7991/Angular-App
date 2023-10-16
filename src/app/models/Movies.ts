export interface Movies 
    {
        id: number;
        name: string;
        rating: number;
        image: string;
        imdb_url: string;
        description: string;
        price: number
    }

    export const movies = [
        {
            "id": 1,
            "name": "The Shawshank Redemption",
            "rating": 9.2,
            "image": "images/shawshank.jpg",
            "imdb_url": "https://www.imdb.com/title/tt0111161/",
            "description": "This is a description for movie 1.",
            "price": 7.5
        },
        {
            "id": 2,
            "name": "The Godfather",
            "rating": 9.2,
            "image": "images/godfather.jpg",
            "imdb_url": "https://www.imdb.com/title/tt0068646/",
            "description": "This is a description for movie 2.",
            "price": 8.5
        },
        {
            "id": 3,
            "name": "The Dark Knight",
            "rating": 9,
            "image": "images/dark_knight.jpg",
            "imdb_url": "https://www.imdb.com/title/tt0468569/",
            "description": "This is a description for movie 3.",
            "price": 10
        },
        {
            "id": 4,
            "name": "Pulp Fiction",
            "rating": 7,
            "image": "images/pulp_fiction.jpg",
            "imdb_url": "https://www.imdb.com/title/tt0110912/",
            "description": "This is a description for movie 4.",
            "price": 7
        },
        {
            "id": 5,
            "name": "The Lord of the Rings: The Return of the King",
            "rating": 9,
            "image": "images/lotr_return_king.jpg",
            "imdb_url": "https://www.imdb.com/title/tt0167260/",
            "description": "This is a description for movie 5.",
            "price": 8.5
        },
        {
            "id": 6,
            "name": "The Good, the Bad and the Ugly",
            "rating": 7,
            "image": "images/good_bad_ugly.jpg",
            "imdb_url": "https://www.imdb.com/title/tt0060196/",
            "description": "This is a description for movie 6.",
            "price": 7.5
        },
        {
            "id": 7,
            "name": "Fight Club",
            "rating": 5,
            "image": "images/fight_club.jpg",
            "imdb_url": "https://www.imdb.com/title/tt0137523/",
            "description": "This is a description for movie 7.",
            "price": 7.5
        },
        {
            "id": 8,
            "name": "The Lord of the Rings: The Fellowship of the Ring",
            "rating": 8,
            "image": "images/lotr_fellowship.jpg",
            "imdb_url": "https://www.imdb.com/title/tt0120737/",
            "description": "This is a description for movie 8.",
            "price": 10
        },
        {
            "id": 9,
            "name": "Forrest Gump",
            "rating": 7.5,
            "image": "images/forrest_gump.jpg",
            "imdb_url": "https://www.imdb.com/title/tt0109830/",
            "description": "This is a description for movie 9.",
            "price": 10
        },
        {
            "id": 10,
            "name": "Inception",
            "rating": 8.8,
            "image": "images/inception.jpg",
            "imdb_url": "https://www.imdb.com/title/tt1375666/",
            "description": "This is a description for movie 10.",
            "price": 10
        }
    ]
    
