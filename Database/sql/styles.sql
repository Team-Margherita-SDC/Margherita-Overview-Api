CREATE TABLE IF NOT EXISTS styles (
  id SERIAL,
  productId INT,
  name VARCHAR(50),
  sale_price VARCHAR(30),
  original_price VARCHAR(50),
  default_style BOOLEAN,
  PRIMARY KEY (id)
)

\copy styles(id, productId, name, sale_price, original_price, default_style) FROM '/Users/aj/Documents/SDC/Margherita-Products-Api/Data/styles.csv' CSV DELIMITER ',' HEADER
