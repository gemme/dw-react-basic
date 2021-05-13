// react component
// jsx
// state
// props
// life cyclehooks
// vainilla javascript

// Inheritance
// class Insecto
// class Araña
// class Caballo

// Araña es un insecto? si herencia
// Caballo es un insecto? no
// clase Carro
// clase Llanta
// Llanta es un Carro no
// composicion

function Insecto(props) {
  const tipo = "invertebrado";
  return (
    <div>
      {tipo}
      {props.name}
    </div>
  );
}

function Araña() {
  return <Insecto name={"araña"} />;
}

function Grillo(){
  return <Insecto name={"grillo"} />;
}
// function components
function Welcome(props) {
  return (
    <div
      style={{
        height: "200px",
        width: "600px",
        fontSize: "50px",
        color: "red",
      }}
    >
      {"hello world: " + props.name}
    </div>
  );
}

// class components
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    // initialize state
    this.state = {
      name: " who are you",
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      name: " Erick",
    });
  }

  render() {
    console.log("render:state ", this.state.name);
    console.log("render:props ", this.props);
    const { myClass } = this.props;
    // jsx
    return (
      <div onClick={() => this.handleClick()}>
        <Welcome name={this.state.name} />
        <Araña />
        <Grillo />
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld
    lastname={" Escobar"}
    address={" calle siempre viva"}
    address2={1235}
    team={{
      hello: "wtf",
    }}
    myClass={
      class Hello {
        getName() {
          return " Juanito banana";
        }
      }
    }
  />,
  document.querySelector("#root")
);

ReactDOM.render(
  React.createElement(HelloWorld, { name: " Martinez" }),
  document.querySelector("#root2")
);

// stateless components
// functional components
// dumb components

// stateful components
// class components
// smart components

// hooks
