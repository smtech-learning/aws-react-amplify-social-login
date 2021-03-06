import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Amplify, { Auth, Interactions } from "aws-amplify";
import { withAuthenticator, ChatBot, AmplifyTheme } from "aws-amplify-react";
import aws_exports from "./aws-exports"; // specify the location of aws-exports.js file on your project
Amplify.configure(aws_exports);
const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "#222"
  }
};
class App extends Component {
  handleComplete(err, confirmation) {
    if (err) {
      alert("Bot conversation failed");
      return;
    }
    alert("Success: " + JSON.stringify(confirmation, null, 2));
    return "Appointment booked. Thank you! What would you like to do next?";
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to ReactBot</h1>
        </header>
        <p className='App-intro'>
          <ChatBot
            title='My React Bot'
            theme={myTheme}
            botName='MakeAppointmentMOBILEHUB'
            welcomeMessage='Welcome, how can I help you today?'
            onComplete={this.handleComplete.bind(this)}
            clearOnComplete={true}
          />
        </p>
      </div>
    );
  }
}
export default withAuthenticator(App, { includeGreetings: true });
