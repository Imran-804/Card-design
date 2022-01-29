import './App.css';


function App() {
  let Products = [
    {names:"photoshop", Prise:"$90.00"},
    {names:"ilastorr", Prise: "$33.00"}
  ];
  return (
    <div className="App">
      <header className="App-header">
    {/* arrey indes */}
    {/* <Product name={Products[0].names} Prise={Products[1].Prise}></Product>
      <Product name={Products[1].names} Prise={Products[1].Prise} ></Product> */}

    <Product Product={Products[0]}></Product>
    <Product Product={Products[1]}></Product>
      </header>
    </div>
  );
}


function Product(props) {
  const ProductStyle ={
    height: "400px",
    width: '400px',
    border: '2px solid gray',
    backgroundColor: 'lightgray',
    borderRadius: '20px'
  }
  const btnStyle ={
    padding: '10px',
    fontSize: '20px'
  }
  return (
    <div className="Card" style={ProductStyle}>
      {/* <h1>{props.names}</h1> */}
      {/* <p>{props.Prise}</p> */}
      <h1>{props.Product.names}</h1>
      <p>{props.Product.Prise}</p>
      <button style={btnStyle}>buy now</button>
    </div>
  )
  
}

export default App;
