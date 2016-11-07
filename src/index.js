const CONSTANTS = {};

export default function constantize(key, value) {
  if (arguments.length > 1) {
    CONSTANTS[key] = value;
    return true;
  } else {
    if (key) {
      if (!CONSTANTS.hasOwnProperty(key))
        console.error(`CONSTANT: '${key}' is not exists!`);
      return CONSTANTS[key];
    } else {
      return CONSTANTS;
    }
  }
}
