class StarWars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jedi: {
        username: "",
        avatar: "",
      },
    };
    console.log("constructor");
  }

  // lifecycle hook
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("render");
    return (
      <div style={{
        borderStyle: 'dotted',
        borderColor: 'bluelight'
      }}>
        <div>{"StarWars"}</div>
        <div>{this.state.jedi.username}</div>
        <div>
          <img src={this.state.jedi.avatar} height="200" width="200" />
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");

    fetch(
      "http://api.giphy.com/v1/gifs/random?api_key=lw3zTuJ6sr6ctM4YuhT0l7QT9GobIWgW"
    )
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then(({ data }) => {
        // console.log(data);
        this.setState({
          jedi: {
            username: data.username,
            avatar: data.image_original_url,
          },
        });
      })
      .catch((err) => console.log(err));
  }



  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: false,
    };
  }

  onMount() {
    this.setState((prevState) => {
      return {
        mount: !prevState.mount,
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onMount()}>Mount / Unmount</button>
        {this.state.mount ? <StarWars /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
