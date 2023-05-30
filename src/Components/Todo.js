import { useState } from 'react';
import './Todo.css'


let itemId = 0;

export default function List() {
    const [item, setItem] = useState('');
    const [list, setList] = useState([]);

    const addHandler=()=>{
        setList([
            ...list,
            { id: itemId++, items: item }
        ]);
        setItem("")
    }

    return (
        <div className='todo'>
            
                <h1>To-do List</h1>
                <input
                    value={item}
                    onChange={e => setItem(e.target.value)}
                />
                <button onClick={addHandler}>Add</button>

         
            <div className='lists'>
                <ul>
                    {list.map(lists => (

                        <li key={lists.id}>
                            <input type="checkbox" />
                            {lists.items}
                            <button onClick={() => {
    setList(list.filter(item => item.id !== lists.id));
}}>
    <i className="fa-solid fa-trash"></i>
</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

