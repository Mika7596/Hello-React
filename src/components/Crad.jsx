import "./Card.css";

function Crad(props) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={props.img} alt={props.title} />
      </div>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  );
}

export default Crad;
