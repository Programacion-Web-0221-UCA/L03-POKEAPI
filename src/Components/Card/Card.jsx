import Group from './Group/Group'
import Information from './Information/Information'
import { IoAdd } from 'react-icons/all'

export default function Card({ name, id, types, abilities, thumbnail, onAdd = () => {}}){

    return <div className="w-72 h-96 bg-white rounded shadow-lg relative p-1">
        <div onClick={ ()=> { onAdd(); } }
          className="absolute top-1 right-1 p-1 text-white bg-indigo-600 rounded">
          <IoAdd />
        </div>

        <div className='w-72 h-40 rounded flex justify-center items-center'>
            <img className="w-32 h-32 object-contain" src={thumbnail} alt={name} />
        </div>

        <Information name={name} id={id} />
        <Group title="types" items={types} />
        <Group title="abilities" items={abilities} />
    </div>
}