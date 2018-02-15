/**
 * Created by nwu on 2/15/18.
 */

function is_prod() {
  return process.env.HEROKU;
}


module.exports = {
  is_prod: is_prod
};