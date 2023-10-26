export default function Movie({movieId,title,url,genre,alt}) {
  return (
    <div className="col-2">
      <div className="card" key={movieId}>
        <img className="card-img-top" src={url}></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
        <p className="card=text">{genre}</p>
      </div>
      </div>
  );
}
