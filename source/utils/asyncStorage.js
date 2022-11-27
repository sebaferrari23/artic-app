/** @format */

import AsyncStorage from '@react-native-async-storage/async-storage';

let syncData = new Map();

export async function initSyncStorage() {
  syncData = new Map();
  const saveItem = (item) => {
    let value;
    try {
      value = JSON.parse(item[1]);
    } catch (e) {
      [, value] = item;
    }
    syncData.set(item[0], value);
  };
  try {
    const keys = await AsyncStorage.getAllKeys();
    const keyValuePairs = await AsyncStorage.multiGet(keys);
    keyValuePairs.forEach(saveItem);
  } catch (error) {
    console.log('Sync Storage init error!', error);
  }
}

export function clearSyncStorage() {
  syncData = new Map();
  return AsyncStorage.clear();
}

export function getSync(key) {
  if (!key) {
    return null;
  }
  return syncData.get(key);
}

export function storeSync(key, value) {
  if (!key) {
    return null;
  }

  syncData.set(key, value);
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export function mergeSync(key, value) {
  if (!key) {
    return null;
  }

  return storeSync(key, value);
}

export function removeSync(key) {
  if (!key) {
    return null;
  }

  syncData.delete(key);
  return AsyncStorage.removeItem(key);
}
