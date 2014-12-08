// check that the userId specificed owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}
