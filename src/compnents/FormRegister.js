import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, reset } from '../feature/auth/authSlice';
import AlertError from './AllerError';
import Spinner from './Spinner';

export default function FormRegister() {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    kodeunik: '',
  });

  const { username, email, kodeunik } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    document.title = 'Register';
    if (isError) {
      setError(message);
    }
    if (isSuccess || user) {
      navigate('/auth/login');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      kodeunik,
    };
    dispatch(register(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'></div>
          <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              {error && <AlertError message={error} />}
              <form onSubmit={handleSubmit}>
                {/* section username */}
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Username</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Please Enter Username'
                    name='username'
                    value={username}
                    onChange={onChange}
                    className='input input-bordered'
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Please Enter Email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    className='input input-bordered'
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Kode Unik</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Please Enter Kode Unik'
                    name='kodeunik'
                    value={kodeunik}
                    onChange={onChange}
                    className='input input-bordered'
                    required
                    maxLength={4}
                  />
                </div>

                <div className='form-control mt-6'>
                  <button className='btn btn-primary'>Sign Up</button>
                  <label className='label justify-center'>
                    <a
                      href='/auth/login'
                      className='label-text-alt link link-hover text-blue-800'>
                      Already Have Account ? Login Now{' '}
                    </a>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
