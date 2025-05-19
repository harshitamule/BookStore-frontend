
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import { MdOutlineDelete} from 'react-icons/md';

const Table = ({books}) => {
  return (
    <div>
      <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-300 rounded-md'>No</th>
              <th className='border border-slate-300 rounded-md'>Title</th>
              <th className='border border-slate-300 rounded-md max-md:hidden'>
                Author
              </th>
              <th className='border border-slate-300 rounded-md max-md:hidden'>
                Publish Year
              </th>
              <th className='border border-slate-300 rounded-md'>Operations</th>

            </tr>

          </thead>
          <tbody>
            {books.map((books, index) =>(
              <tr key={books._id}>
                <td className='border border-slate-500 rounded-md text-center'>
                  {index+1}
                </td>
                <td className='border border-slate-500 rounded-md text-center'>
                  {books.title}
                </td>
                <td className='border border-slate-500 rounded-md text-center max-md:hidden'>
                  {books.author}
                </td>
                <td className='border border-slate-500 rounded-md text-center max-md:hidden'>
                  {books.publishYear}
                </td>

                <td className='border border-slate-500 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/books/details/${books._id}`}>
                      <BsInfoCircle className='text-2xl text-green-400'/>
                    </Link>
                    <Link to={`/books/edit/${books._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-300'/>
                    </Link>
                    <Link to={`/books/delete/${books._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-500'/>
                    </Link>
                  </div>
                </td>
              </tr>
            )
            )}
          </tbody>
        </table>
    </div>
  )
}

export default Table
