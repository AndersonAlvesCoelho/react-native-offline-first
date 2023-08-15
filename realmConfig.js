import Realm from 'realm';

const RandomPhotosSchema = {
  name: 'RandomPhoto',
  properties: {
    // Define as propriedades do objeto RandomPhoto
    // Exemplo: url: 'string', description: 'string'
  },
};

const LoginSchema = {
  name: 'Login',
  properties: {
    // Define as propriedades do objeto Login
    // Exemplo: username: 'string', token: 'string'
  },
};

const realm = new Realm({ schema: [RandomPhotosSchema, LoginSchema] });

export default realm;
