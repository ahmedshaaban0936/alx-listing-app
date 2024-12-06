const Card = ({ title, description, imageUrl }: CardProps) => (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
  
  export default Card;
  