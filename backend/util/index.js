/**
 * Created by nwu on 2/15/18.
 */

function is_prod() {
  return process.env.HEROKU;
}

function get_database() {
  return process.env.DB_URI;
}

module.exports = {
  is_prod: is_prod,
  get_database: get_database
};