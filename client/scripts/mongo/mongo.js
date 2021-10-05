async function getDataFromServer(serverUrl, mongoUrl) {
  let body = {
    mongoUrl: mongoUrl,
    dbName: 'CarRental',
    collections: {
      Cars: 'Cars',
      Clients: 'Clients',
      Marks: 'Marks',
      Orders: 'Orders',
      Places: 'Places',
      Workers: 'Workers'
    }
  };

  let options = {
    method: 'POST',
    body: JSON.stringify(body)
  };

  let response = await fetch(serverUrl, options);
  let text = await response.text();
  return JSON.parse(text);
}

export default getDataFromServer;