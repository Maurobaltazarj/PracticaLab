
function Aside({title ='titulo determinado',description='descripcion determinada'}){
    return (
    <aside>
        <div className="Card">
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
    </aside>);
}

export default Aside;