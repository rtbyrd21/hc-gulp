var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema,
    crypto    = require('crypto');



var UserSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  salt: String,
  hashed_pwd: String,
  roles: [String]
});

UserSchema.methods = {
  authenticate: function(passwordToMatch) {
    return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  }
}

var User = mongoose.model('User', UserSchema);

module.exports = mongoose.model('UserData', UserSchema);
User.find({}).exec(function(err, collection){
  if(collection.length === 0){
  var salt,
      hash;
  salt = createSalt();
  hash = hashPwd(salt, 'rob');
  User.create({firstname:'Rob', lastname:'Byrd', username:'rtbyrd', salt: salt, hashed_pwd: hash, roles:['admin']});
  }
});

function createSalt() {
  return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd){
  var hmac = crypto.createHmac('sha1', salt);
  return hmac.update(pwd).digest('hex');
}