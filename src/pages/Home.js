import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormAddTodo from '../compnents/FormAddTodo';
import {
  getTodoById,
  todoSelector,
  deleteTodo,
} from '../feature/todo/todoSlice';

export default function Home() {
  // const username = localStorage.getItem('username');
  const userid = localStorage.getItem('userId');
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector.selectAll);

  useEffect(() => {
    dispatch(getTodoById());
  }, [dispatch]);

  return (
    <>
      <div className='bg-neutral-900 py-9'></div>
      <div className='bg-neutral-800 py-24'>
        {/* content */}
        <div className=''>
          <div className='flex justify-center gap-10'>
            <FormAddTodo />
            <section>
              <div className='bg-neutral-900 rounded-xl'>
                <div className='w-full py-10 px-10'>
                  <h1 className='text-white'>
                    <table className='text-left table-auto border-separate border-spacing-x-5'>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Todo List</th>
                          <th>Keterangan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {todos.map((item, index) => {
                          return (
                            <tr key={item.id}>
                              <td>{index + 1}</td>
                              <td>{item.todo}</td>
                              <td>{item.keterangan}</td>
                              <td>
                                <button
                                  onClick={() => dispatch(deleteTodo(item.id))}
                                  className='bg-red-600 mx-2 hover:bg-red-900 text-white py-1 px-4 rounded'>
                                  Delete
                                </button>
                                <button className='bg-yellow-600 hover:bg-yellow-900 text-white py-1 px-4 rounded'>
                                  <Link to={`/${userid}/${item.id}`}>Edit</Link>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </h1>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className='text-white flex justify-center'></div>
      </div>
    </>
  );
}
