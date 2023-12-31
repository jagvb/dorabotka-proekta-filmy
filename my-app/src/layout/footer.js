function Footer() {

return(
    <footer>
        <div className="copyright">@ Movies {new Date().getFullYear()}</div>
        <div className='container'>
    <a href="/">
      <span>Главная</span>
        </a>
        <a href="#" class="btn btn-2">О нас</a> 
          </div>
    </footer>
)
}
export default Footer;