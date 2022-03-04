CREATE TABLE IF NOT EXISTS skus (
  id SERIAL,
  styleId BIGINT,
  size VARCHAR(10),
  quantity INT,
  PRIMARY KEY (id)
)

\copy skus(id, styleId, size, quantity) FROM '/Users/aj/Documents/SDC/Margherita-Products-Api/Data/skus.csv' CSV DELIMITER ',' HEADER