-- Insert sample books
INSERT INTO books (title, author, genre) VALUES
    ('1984', 'George Orwell', 'Dystopian'),
    ('To Kill a Mockingbird', 'Harper Lee', 'Classic'),
    ('The Great Gatsby', 'F. Scott Fitzgerald', 'Novel'),
    ('One Hundred Years of Solitude', 'Gabriel García Márquez', 'Magical Realism'),
    ('Invisible Man', 'Ralph Ellison', 'Fiction'),
    ('Catch-22', 'Joseph Heller', 'Satire'),
    ('The Catcher in the Rye', 'J.D. Salinger', 'Fiction'),
    ('Beloved', 'Toni Morrison', 'Historical Fiction'),
    ('Mrs. Dalloway', 'Virginia Woolf', 'Modernist'),
    ('Jane Eyre', 'Charlotte Brontë', 'Gothic Novel');

-- Insert sample reviews
INSERT INTO reviews (book_id, review_text, rating) VALUES
    (1, 'A thought-provoking dystopian novel.', 5),
    (2, 'Timeless themes and unforgettable characters.', 4),
    (3, 'A masterpiece of American literature.', 5),
    (4, 'Beautifully written and captivating storyline.', 5),
    (5, 'An insightful exploration of race and identity.', 4),
    (6, 'Hilarious and thought-provoking satire.', 4),
    (7, 'A classic coming-of-age tale.', 4),
    (8, 'Compelling and haunting.', 5),
    (9, 'An innovative narrative and exploration of mental health.', 4),
    (10, 'A timeless classic with a captivating story.', 5);

-- don't forget to run command: psql -U postgres -d mybookreviews -a -f seed.sql
-- or docker exec -it my-postgres psql -U postgres
-- and \c mybookreviews
