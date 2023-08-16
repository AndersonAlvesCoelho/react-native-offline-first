import Realm from 'realm';

const RandomPhotosSchema = {
  name: 'RandomPhoto',
  properties: {
    url: 'string', // Note a vírgula aqui
    // Outras propriedades, se houver, também devem ser separadas por vírgula
  },
};

const realm = new Realm({ schema: [RandomPhotosSchema] });

export default realm;
