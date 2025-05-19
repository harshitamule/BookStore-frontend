import React, {useState, useEffect} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
const backenduri = import.meta.env.VITE_BACKEND_URI;

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const handleSavedBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios.post(`${backenduri}/books`, data)
    .then(() => {
      setLoading(false);
      enqueueSnackbar('Book created Successfully', {variant:'success'});
      navigate('/');
    })
    .catch((err)=>{
      setLoading(false);
      //alert('An error happened, check the console');
      enqueueSnackbar('error', {variant : 'error'});
      console.log(err);
    })
  }

  return (
    <div className='m-5'>
    <BackButton/>
    <div className='m-5  flex flex-col items-center justify-center'>
      
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading? <Spinner/>: ''}
      <div className='flex flex-col border-2 border-sky-500 rounded-xl w-[600px] p-4'>
        <div className='my-2'>
          <label className='text-xl mr-4 text-gray-400'>Title</label>
          <input
            type = 'text'
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 bg-black border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-2'>
          <label className='text-xl mr-4 text-gray-400'>Author</label>
          <input
            type = 'text'
            value = {author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 bg-black border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-2'>
          <label className='text-xl mr-4 text-gray-400'>publishYear</label>
          <input
            type = 'number'
            value = {publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 bg-black border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-800 m-8' onClick={handleSavedBook}>
          Save
        </button>
      </div>
    </div>
    </div>
  )
}

export default CreateBook
