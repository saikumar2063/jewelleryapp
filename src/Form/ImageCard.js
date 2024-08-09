function ImageCard(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://puresilver.io/cdn/shop/products/80_ab5574fb-24e5-400d-aed9-2941d9bd0340.jpg?v=1612974025"
          alt="Card "
        />
        <div className="card-body">
          <p className="card-text">{props.products.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
