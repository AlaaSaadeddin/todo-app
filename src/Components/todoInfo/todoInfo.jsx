const TodoInfo = () => {
    return ( <div className="info-container">
        <div>
            <span>5</span>
            <p>items left</p>
        </div>
        <div>
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
        </div>
        <div>
            <button>Clear Completed</button>
        </div>
    </div> );
}
 
export default TodoInfo;