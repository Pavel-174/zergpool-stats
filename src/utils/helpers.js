export function cutAddress(_value, left, right) {
    try {
      if (!_value) {
        return "";
      }
      const leftChars = left;
      const rightChars = right;
      if (_value.length > leftChars + rightChars + 3) {
        return `${_value.slice(0, leftChars)}...${_value.slice(-rightChars)}`;
      }
      return _value;
    } catch (err) {
      console.log(err);
    }
}