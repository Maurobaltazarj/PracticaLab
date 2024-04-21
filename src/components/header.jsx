
function Header({title ='titulo determinado',description='descripcion determinada'}){
    return (
    <header>
        <div className="Card">
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
    </header>);
}

export default Header;