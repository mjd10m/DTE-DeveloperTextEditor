import { openDB } from 'idb';

const initdb = async () =>
  openDB('dte_db', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('content')) {
        console.log('dte database already exists');
        return;
      }
      db.createObjectStore('content', { keyPath: 'id', autoIncrement: true });
      console.log('dte database created');
    },
  });

export const putDb = async (content) => {
  console.log('POST to the database')
  const contactDb = await openDB('dte_db', 1)
  const tx = contactDb.transaction('content', 'readwrite')
  const store = tx.objectStore('content')
  const request = store.add({text:content})
  const result = await request
  console.log('data saved to the database', result);
}

export const getDb = async () => {
  console.log('GET from database')
  const contactDb = await openDB('dte_db', 1)
  const tx = contactDb.transaction('content', 'readonly')
  const store = tx.objectStore('content')
  const request = store.get(1)
  const result = await request
  console.log('result.value', result)
  return result
}

initdb();
