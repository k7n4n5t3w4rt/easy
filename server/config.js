// @flow
// Here we're assuming that all environment variables are strings
const NODE_ENV /*: string */ = process.env.NODE_ENV || "development";
const PORT /*: number */ = parseInt(process.env.PORT) || 5000;

export default { NODE_ENV, PORT };
