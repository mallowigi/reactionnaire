import _ from 'lodash';
export default _.mixin({
  toMap (object) {
    return _(object)
      .map((value, key) => {
        value.key = key;
        return value;
      })
      .value();
  }
});
