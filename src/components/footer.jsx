
function Footer({title ='titulo determinado',description='descripcion determinada'}){
    return (
    <footer>
        <div className="Card">
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
    </footer>);
}

export default Footer;