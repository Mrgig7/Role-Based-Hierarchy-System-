class User {
    constructor(userId, email, name, role, parentId) {
      this.userId = userId;
      this.email = email;
      this.name = name;
      this.role = role;
      this.parentId = parentId;
    }
  }
  module.exports = User;