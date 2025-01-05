document.addEventListener("DOMContentLoaded", function () {
    // Initialize book data for romantic books
    const books = [
        {
            id: 1,
            title: "Collide",
            price: 10,
            rating: 4.5,
            image: "romantic novels/img1.jpg",
            author: "BAL KHABRA"
        },
        {
            id: 2,
            title: "Pride Prejudice",
            price: 15,
            rating: 4.8,
            image: "romantic novels/img2.jpg",
            author: "Jane Austen"
        },
        {
            id: 3,
            title: "Things We Never Got Over",
            price: 8,
            rating: 4.2,
            image: "romantic novels/img3.jpg",
            author: "Oscar Wilde"
        },
        {
            id: 4,
            title: "Field Notes on LOVE",
            price: 12,
            rating: 4.6,
            image: "romantic novels/img4.jpg",
            author: "Jennifer"
        },
        {
            id: 5,
            title: "The Prince Bride",
            price: 7,
            rating: 4.0,
            image: "romantic novels/img5.jpg",
            author: "William Goldman"
        },
        {
            id: 6,
            title: "VERITY",
            price: 20,
            rating: 4.9,
            image: "romantic novels/img6.jpg",
            author: "Colleen Hoover"
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