class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // Add handleChange() and submitMessage() methods here
    handleChange = (e) => (
      this.setState({input: e.target.value, messages:this.state.messages})
    );
  
    submitMessage = () => (
      this.setState({messages:[...this.state.messages, this.state.input], input:""})
    );
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Render an input, button, and ul below this line */ }
          <input value={this.state.input} onChange={this.handleChange}/>
          <button onClick={this.submitMessage}>submit</button> 
          <ul>
            {
              this.state.messages.map(message => <li>{message}</li>)
            }
          </ul>
  
          { /* Change code above this line */ }
        </div>
      );
    }
  };