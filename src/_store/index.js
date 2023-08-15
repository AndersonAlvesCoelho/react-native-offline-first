// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import realm from "../../realmConfig";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: {
    getItem: (key, defaultValue) => {
      const data = realm.objects(key)[0];
      return data ? data : defaultValue;
    },
    setItem: (key, value) => {
      realm.write(() => {
        realm.create(key, value, true);
      });
    },
    removeItem: (key) => {
      realm.write(() => {
        const obj = realm.objects(key);
        realm.delete(obj);
      });
    },
  },
  whitelist: ["randomPhotos"], // lista dos reducers que você quer persistir
};

const rootReducerWithPersist = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducerWithPersist,
});

export const persistor = persistStore(store);
