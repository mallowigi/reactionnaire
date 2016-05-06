class User {
  constructor (initData = {}) {
    this.uid = 0;

    this.google = {
      displayName: 'Noname',
      profileImageURL: ''
    };

    if (initData) {
      Object.assign(this, initData);
    }
  }
}

export default User;
