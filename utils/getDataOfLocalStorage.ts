


const getDataOfLocalStorage = (key: string) => {
  const data = JSON.parse(localStorage.getItem(key) || '[]');

  return data;
}


export default getDataOfLocalStorage;