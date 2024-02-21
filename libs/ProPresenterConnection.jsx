const connectWebSocket = (
  host,
  setConnected,
  setWs,
  setMessage,
  handleAction,
  onCloseCallback,
) => {
  const webSocket = new WebSocket(`ws://${host}/remote`);

  webSocket.onopen = () => {
    console.log('Connecting to ProPresenter WebSocket');
    setConnected(true);
    setWs(webSocket);
    setMessage(null);

    webSocket.onerror = error => {
      console.log('WebSocket error: ', error);
      setConnected(false);
      setWs(null);
    };

    webSocket.onmessage = event => {
      const data = JSON.parse(event.data);
      setMessage(data);
      console.log('Received message : ', event.data);

      // Handle different actions
      handleAction(data);
    };

    webSocket.onclose = () => {
      console.log('WebSocket connection closed');
      setConnected(false);
      setWs(null);
      if (onCloseCallback) {
        onCloseCallback();
      }
    };
  };

  return webSocket; // Return the WebSocket object for further usage if needed
};

export {connectWebSocket};
