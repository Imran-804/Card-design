function Card(props){
    const style = {width:"800px", height:"400px", color:'red', backgroundColor:'yellow', border: '3px solid green', margin: "10px"};
    const BtnStyle = {color: "white", backgroundColor: "green", padding: '20px', fontSize: "20px"}
  
    return (
      <div style={style}>
       <h2> {props.h1} </h2>
       <p>{props.p}</p>
       <button style= {BtnStyle}>{props.btn}</button>
   </div>
    );
  }






  export default Card;