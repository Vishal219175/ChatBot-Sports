// ActionProvider.js
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hello, cricket enthusiast!");
      this.addMessageToState(message);
    };
  
    handleCricketSearch = () => {
      const message = this.createChatBotMessage(
        "Search for your favorite cricket team.",
        {
          widget: "cricketSearch",
        }
      );
      this.addMessageToState(message);
    };
  
    handleCricketSearchResponse = (selectedPlayer) => {
      const message = this.createChatBotMessage(`Thanks for selecting ${selectedPlayer}.`);
      this.addMessageToState(message);
    };
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  