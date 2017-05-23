----- connect to the postgres database and create the cog_api database

\c postgres
DROP DATABASE IF EXISTS cog_api_development;
CREATE DATABASE cog_api_development;

\c cog_api_development

---- create the tables

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;

CREATE TABLE posts(
 id SERIAL,
 body TEXT
);

CREATE TABLE comments(
 id SERIAL,
 post_id INTEGER,
 body TEXT
);

--- seeding the database with some data

-- INSERT INTO posts (body) values('This is my first blog post! Huzzah!');
-- INSERT INTO posts (body) values('Blue pill or Red pill?');

-- INSERT INTO comments (post_id, body) values(2, 'Blue pill');
-- INSERT INTO comments (post_id, body) values(2, 'Red pill');
