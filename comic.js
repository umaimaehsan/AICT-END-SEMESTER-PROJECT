document.addEventListener("DOMContentLoaded", function () {
    // Initialize book data for comic books
    const books = [
        {
            id: 1,
            title: "Diary of a Wimpy Kid",
            price: 10,
            rating: 4.5,
            image: "comedy/images (1).jpg",
            author: "Jeff Kinney"
        },
        {
            id: 2,
            title: "Diary of a Wimpy Kid",
            price: 15,
            rating: 4.8,
            image: "comedy/images (2).jpg",
            author: "Jeff Kinney"
        },
        {
            id: 3,
            title: "Diary of a Wimpy Kid",
            price: 8,
            rating: 4.2,
            image: "comedy/images (3).jpg",
            author: "Jeff Kinney"
        },
        {
            id: 4,
            title: "Diary of a Wimpy Kid",
            price: 12,
            rating: 4.6,
            image: "comedy/images (4).jpg",
            author: "Jeff Kinney"
        },
        {
            id: 5,
            title: "Diary of a Wimpy Kid",
            price: 7,
            rating: 4.0,
            image: "comedy/images.jpg",
            author: "Jeff Kinney"
        },
        {
            id: 6,
            title: "Diary of a Wimpy Kid",
            price: 20,
            rating: 4.9,
            image: "comedy/img6.jpg",
            author: "Jeff Kinney"
        }
    ];

    const bookListElement = document.getElementById('book-list');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const sortSelect = document.getElementById('sort');

    // Function to display books
    function displayBooks(filteredBooks) {
        bookListElement.innerHTML = '';  // Clear existing books
        filteredBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.dataset.price = book.price;
            bookCard.dataset.rating = book.rating;
            bookCard.dataset.id = book.id;
            bookCard.dataset.title = book.title;

            bookCard.innerHTML = `
                <img src="${book.image}" alt="${book.title}" class="thumbnail">
                <div class="book-details">
                    <h3>${book.title}</h3>
                    <p>by ${book.author}</p>
                    <p>Price: $${book.price}</p>
                    <p>Rating: ${book.rating}⭐</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;
            bookListElement.appendChild(bookCard);
        });
    }

    // Function to filter books based on search input
    function searchBooks() {
        const searchQuery = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchQuery)
        );
        displayBooks(filteredBooks);
    }

    // Function to sort books based on selected option (price or rating)
    function sortBooks() {
        const sortBy = sortSelect.value;
        let sortedBooks;

        if (sortBy === 'price') {
            sortedBooks = [...books].sort((a, b) => a.price - b.price);
        } else if (sortBy === 'rating') {
            sortedBooks = [...books].sort((a, b) => b.rating - a.rating);
        }

        displayBooks(sortedBooks);
    }

    // Add event listener for the search button
    searchButton.addEventListener('click', searchBooks);

    // Add event listener for the sort dropdown
    sortSelect.addEventListener('change', sortBooks);

    // Initial display of all books
    displayBooks(books);
});