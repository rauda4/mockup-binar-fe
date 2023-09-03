import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTodoById,
  todoSelector,
  updateTodo,
} from '../feature/todo/todoSlice';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Home from '../pages/Home';

export default function ToogleEdit() {
  const [todo, setTodo] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state) => todoSelector.selectById(state, id));

  useEffect(() => {
    dispatch(getTodoById());
  }, [dispatch]);

  useEffect(() => {
    if (todos) {
      setTodo(todos.todo);
      setKeterangan(todos.keterangan);
    }
  }, [todos]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const todoData = {
      id,
      todo,
      keterangan,
    };
    await dispatch(updateTodo(todoData));
    navigate('/');
  };

  return (
    <>
      <Home />
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-neutral-900 outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl text-white font-semibold'>Update Todo</h3>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <section>
                <div className='card flex-shrink-0 w-screen max-w-sm bg-neutral-900'>
                  <div className='card-body'>
                    {/* {error && <AlertError message={error} />} */}
                    <form onSubmit={handleUpdate}>
                      {/* section username */}
                      <div className='form-control text-black'>
                        <label className='label'>
                          <span className='label-text text-white'>Todo</span>
                        </label>
                        <input
                          type='text'
                          placeholder='Please Enter Todo'
                          name='todo'
                          value={todo}
                          onChange={(e) => setTodo(e.target.value)}
                          className='input input-bordered'
                          required
                        />
                      </div>
                      <div className='form-control text-black mt-4'>
                        <label className='label'>
                          <span className='label-text text-white'>
                            Keterangan
                          </span>
                        </label>
                        <input
                          type='text'
                          placeholder='Please Enter Done or Not'
                          name='keterangan'
                          value={keterangan}
                          onChange={(e) => setKeterangan(e.target.value)}
                          className='input input-bordered'
                          required
                        />
                      </div>
                      <div className='form-control justify-center mt-8'>
                        <button className='bg-blue-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                          Save Changes
                        </button>
                        <Link
                          to={`/`}
                          className='text-white text-center background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                          Close
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
}
