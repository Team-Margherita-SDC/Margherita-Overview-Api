const db = require('../index.js');

const getProducts = (count, page, cb) => {
  let start = (page - 1) * count;
  let stop = page * count;
  let query = `Select * from products where id > $1 AND id <= $2`

  db.query(query, [start, stop], (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results.rows);
    }
  })
}

const getProductInfo = (id, cb) => {

  let query = `
  SELECT row_to_json(main)
  FROM
  (SELECT p.*,
    (SELECT array_to_json(array_agg(row_to_json(sub)))
     FROM
     (SELECT f.feature, f.value
        FROM features f
        WHERE p.id = product_id
      ) sub
    ) as features
  FROM products p
  WHERE p.id = $1
  ) main`;

  db.query(query, [id], (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results.rows[0].row_to_json);
    }
  })
}

const getStyles = (id, cb) => {

  let query = `
  SELECT json_build_object('product_id', $1, 'results', array_agg(row_to_json(main)))
  FROM
  (SELECT s.style_id, s.name, s.sale_price, s.original_price, s.default_style,
    (SELECT array_to_json(array_agg(row_to_json(sub)))
     FROM
     (SELECT ph.thumbnail_url, ph.url
        FROM photos ph
        WHERE s.style_id = styleid
      ) sub
    ) as photos,
     (SELECT json_object_agg
      (sk.id, json_build_object
        ('quantity', sk.quantity,'size', sk.size))
        AS skus FROM skus sk WHERE sk.styleid = s.style_id)
  FROM styles s
  WHERE s.productid = $1
  ) main `;

  db.query(query, [id], (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results.rows[0].json_build_object);
    }
  })
}

const getRelated = (id, cb) => {

  let query = `select * from related where product_id =  ${id}`;
  db.query(query, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results.rows[0].row_to_json);
    }
  })
}

module.exports = {
  getProductInfo: getProductInfo,
  getProducts: getProducts,
  getStyles: getStyles,
  getRelated: getRelated
}