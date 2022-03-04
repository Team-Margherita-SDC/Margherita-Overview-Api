CREATE TABLE IF NOT EXISTS products (
  id SERIAL,
  name VARCHAR(50),
  slogan TEXT,
  description TEXT,
  category VARCHAR(50),
  default_price VARCHAR(20),
  PRIMARY KEY (id)
)

\copy products (id, name, slogan, description, category, default_price) FROM '/Users/aj/Documents/SDC/Margherita-Products-Api/Data/product.csv' CSV DELIMITER ',' HEADER
