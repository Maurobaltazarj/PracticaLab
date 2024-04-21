

function Main({title ='titulo determinado',description='descripcion determinada'}){
    return (
    <main>
        <div className="Card">
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
    </main>);
}

export default Main;