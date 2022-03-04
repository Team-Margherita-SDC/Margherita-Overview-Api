CREATE TABLE IF NOT EXISTS photos (
  id SERIAL,
  styleId INT,
  url TEXT,
  thumbnail_url TEXT,
  PRIMARY KEY (id)
)

\copy photos(id, styleId, url, thumbnail_url) FROM '/Users/aj/Documents/SDC/Margherita-Products-Api/Data/photos.csv' CSV DELIMITER ',' HEADER