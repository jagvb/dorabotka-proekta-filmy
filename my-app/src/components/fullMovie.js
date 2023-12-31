function FullMovie(props) {
    const {Actors,Awards, Country, Director, Genre,  Language, Metascore, Plot,  Poster, Rated, Ratings, Released, Response, Runtime, Title ,Type, Writer, Year, imdbID, imdbRating,imdbVotes, totalSeasons,} = props["movie"]
    console.log(props)
    return (
    <div className="">
    <section class='full'>
        <img src={Poster} alt=""/>
        <div class="info">
            <p class="caption">{Title} <span className="rating"> {imdbRating}/10 <i className="fa fa-star-o fa-lg"></i></span></p>
            <p class="minicaption1">О фильме</p>
            <div class='harac'>
                <p><span>Год </span> <span>{Year}</span></p>
                <p><span>Страна </span><span>{Country}</span></p>
                <p><span>Язык </span><span>{Language}</span></p>
                <p><span>Genre</span><span>{Genre}</span></p>
                <p><span>Релиз </span><span>{Released}</span></p>
    </div>
            <div class='har'><a href="#harac">Всё о фильме</a></div>
            <a href="" class='button'>Смотреть</a>
        </div>
    </section>
    <p class='undcapt'>О фильме</p>
    <section class='about'>
        <div>
        <a href="" name='harac'></a>
        <p class="minicaption1">Габариты</p>
    <div class="harac">
    <p><span>Толщина столешницы</span> <span> 16 мм</span></p>
        <p><span>Год </span> <span>{Year}</span></p>
                <p><span>Страна </span><span>{Country}</span></p>
                <p><span>Язык </span><span>{Language}</span></p>
                <p><span>Genre</span><span>{Genre}</span></p>
                <p><span>Релиз </span><span>{Released}</span></p>
                <p><span>Длительность </span><span>{Runtime}</span></p>
                <p><span>Тип </span><span> {Type}</span></p>
                <p><span>Всего сезонов </span><span>{totalSeasons}</span></p>
    </div>
    </div>
    
    <div class="desc">
    <p class="caption">
    Описание
    </p>
    <p class='description'>{Plot}</p>
    </div>
    
    </section>
    <p class='undcapt'></p>
    <section class='like'>
    
    <div class="cart">
    
    </div>
    
    </section>
    <section className="writers">
        <div>
        <p className="undcapt">Писатели</p>
            {
                Writer
            }
        </div>
        <div>
        <p className="undcapt">Актёры</p>
            {
                Actors
            }
        </div>
    </section>
        </div>
    )
} 

export default FullMovie;