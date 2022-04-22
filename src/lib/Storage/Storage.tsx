import localforage from "localforage";

const storeInstance = localforage.createInstance({
  name: "gabrielteodoro",
});

export async function setItem(key: string, value: unknown) {
  const valueToStorage = JSON.stringify(value);

  return storeInstance.setItem(key, valueToStorage);
}

export async function getItem<T extends string>(key: string) {
  return await storeInstance.getItem<T>(key, (_, value) => {
    return value ? JSON.parse(value) : null;
  });
}
