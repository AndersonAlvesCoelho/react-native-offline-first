import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers";
import storage from 'redux-persist/lib/storage'; 

const nonSerializableMiddleware = getDefaultMiddleware({
  serializableCheck: false, // Desabilita a verificação de serialização
});

const persistConfig = {
  key: "root",
  storage,
};

const rootReducerWithPersist = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducerWithPersist,
  middleware: nonSerializableMiddleware, // Adiciona o middleware personalizado
});

const persistor = persistStore(store);

export { store, persistor };


// // store.js
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// // import realm from "../../realmConfig";
// import rootReducer from "./reducers";
// import storage from 'redux-persist/lib/storage'; 

// const persistConfig = {
//   key: "root",
//   // storage: {
//   //   getItem: (key, defaultValue) => {
//   //     const data = realm.objects(key)[0];
//   //     return data ? data : defaultValue;
//   //   },
//   //   setItem: (key, value) => {
//   //     realm.write(() => {
//   //       realm.create(key, value, true);
//   //     });
//   //   },
//   //   removeItem: (key) => {
//   //     realm.write(() => {
//   //       const obj = realm.objects(key);
//   //       realm.delete(obj);
//   //     });
//   //   },
//   // },
//   storage,
//   // whitelist: ["randomPhotos"], // lista dos reducers que você quer persistir
// };

// const rootReducerWithPersist = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: rootReducerWithPersist,
// });

// const persistor = persistStore(store);

// export { store, persistor };