import "../ListDrop/ListDragDrop.scss";


const BoardCard =({task})=>{
    return (
    <>
        <h3>{task.title}</h3>
        <p>{task.status}</p>
    </>)
}
export default BoardCard;