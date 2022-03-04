CREATE TABLE IF NOT EXISTS features (
  id SERIAL,
  product_id int,
  feature VARCHAR(50),
  value VARCHAR(50),
  PRIMARY KEY (id)
)

\copy features(id, product_id, feature, value) FROM '/Users/aj/Documents/SDC/Margherita-Products-Api/Data/features.csv' CSV DELIMITER ',' HEADER
