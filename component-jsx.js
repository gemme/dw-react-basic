// react component
// jsx
// state
// props
// life cyclehooks
// vainilla javascript
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    // initialize state
    this.state = {
      name: " who are you",
    };
  }

  render() {
    console.log("render:state ", this.state.name);
    console.log("render:props ", this.props);
    // jsx
    return (
      <div
        onClick={() =>
          this.setState({
            name: " Manuel",
          })
        }
      >
        {"hello world: " + this.state.name + this.props.lastname}
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld lastname={' Escobar'}/>, document.querySelector("#root"));

// stateless components
// functional components
// dumb components

// stateful components
// class components
// smart components

// hooks
