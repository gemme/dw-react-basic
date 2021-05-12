
// react component
// jsx
// state
// props
// life cyclehooks
// vainilla javascript
class HelloWorld extends React.Component{
  constructor(props) {
    super(props);
    // initialize state
    this.state = {
      name: ' who are you'
    }
  }

  render() {
    console.log('render:state ', this.state.name);
    console.log('render:props ', this.props);
    return React.createElement('button',{
      onClick: () => {
        console.log('you just click me!!');
        this.setState({
          name: ' Ernesto !',
        })
      }
    },'Hello world' + this.state.name + this.props.lastname);
  }
}


ReactDOM.render(React.createElement(HelloWorld, { lastname: ' Martinez' }), document.querySelector('#root'));


// stateless components
// functional components
// dumb components

// stateful components
// class components
// smart components

// hooks