var Messages = function(){
  this.results = [];
  this.objectId = 0;
};

Messages.prototype.addMessage = function(username, roomname, message){
  this.results.push({
    createdAt: (new Date()).toString(),
    objectId: ++this.objectId,
    roomname: roomname,
    message: message,
    updatedAt: (new Date()).toString(),
    username: username
  });
};

var mess = new Messages();

module.exports = mess;