
function Movie(props) {
    let desc = "Надежды ученика пятого класса Джесса Аарона стать самым быстрым бегуном в классе разбились после того, как новичок Лесли Берк одержала победу в соревнованиях.Оснований для враждебности по отношению друг к друг у Джесса и Лесли более чем достаточно, и тем не менее между ними завязывается дружба. Как тут не подружиться, если приходится быть королем и королевой в обнаруженном в лесу волшебном царстве? "
    const {Title, Year, imdbID, Type, Poster} = props
    return (
    <div className="cart" id={imdbID}>
      <a href={"/movie/"+imdbID}>
        <img src={Poster}/>
        </a>
        <div className="cap">
        <p className="caption">
        {Title} ({Year})
        </p>
        <p className="undcaption">
        {Type}
        </p>
        </div>
    </div>
    )
} 

export default Movie;