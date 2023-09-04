import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';

export default function FormAddTodo() {
  const [formData, setFormData] = useState({
    todo: '',
    keterangan: '',
  });
  const { todo, keterangan } = formData;
  const Id = localStorage.getItem('userId');
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todoData = {
      todo,
      keterangan,
      user_id: Id,
    };
    await dispatch(addTodo(todoData));
    window.location.reload();
  };
  return (
    <div>
      <section>
        <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-neutral-900'>
          <div className='card-body'>
            {/* {error && <AlertError message={error} />} */}
            <form onSubmit={handleSubmit}>
              {/* section username */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-white'>Todo</span>
                </label>
                <input
                  type='text'
                  placeholder='Please Enter Todo'
                  name='todo'
                  value={todo}
                  onChange={onChange}
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control mt-4'>
                <label className='label'>
                  <span className='label-text text-white'>Keterangan</span>
                </label>
                <input
                  type='text'
                  placeholder='Please Enter Done or Not'
                  name='keterangan'
                  value={keterangan}
                  onChange={onChange}
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control mt-8'>
                <button className='btn btn-primary'>Add todo</button>
                <label className='label justify-center'></label>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
