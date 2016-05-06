class Message {
  constructor (initData = {}) {
    this.message = '';
    this.date = new Date().toUTCString();
    this.author = '';
    this.userId = '';
    this.profile_pic = '';

    if (initData) {
      Object.assign(this, initData);
    }
  }
}

export default Message;
