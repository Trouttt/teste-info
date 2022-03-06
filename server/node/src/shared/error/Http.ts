class Http {
  response = (object: { statusCode: number }) => {
    if (object.statusCode) {
      return object.statusCode;
    }
    return 200;
  };
}
export default Http;
