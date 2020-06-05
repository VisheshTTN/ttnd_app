const Buzz = require('./buzzModel');

exports.addBuzz = (newBuzz) => {
  const buzz = Buzz.create(newBuzz);
  return buzz;
};

exports.getAllBuzz = async () => {
  const allBuzz = Buzz.find({});
  return allBuzz;
};

exports.updateLikes = async (likeInfo) => {
  console.log(likeInfo);
  const likes = Buzz.updateOne({_id: likeInfo.id}, {$inc: {likes: likeInfo.likes}});
  return likes;
}