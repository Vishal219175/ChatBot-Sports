// MessageParser.js
class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("hello") || lowercase.includes("hi") || lowercase.includes("hey")) {
        this.actionProvider.greet();
      } else if (
        lowercase.includes("cricket") ||
        lowercase.includes("ipl") ||
        lowercase.includes("team") ||
        lowercase.includes("player") ||
        lowercase.includes("rcb") ||
        lowercase.includes("csk") ||
        lowercase.includes("dc") ||
        lowercase.includes("rr") ||
        lowercase.includes("wpl") ||
        lowercase.includes("mi")
      ) {
        this.actionProvider.handleCricketSearch();
      } else {
        // Handle unrecognized queries 
        console.log("Unrecognized query for serach operation:", message);
        this.actionProvider.handleUnrecognizedQuestion(); // You can add a method to handle unrecognized queries in ActionProvider
      }
    }
  }
  
  export default MessageParser;
  