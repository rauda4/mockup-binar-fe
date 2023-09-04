import React, { useEffect, useState } from 'react';
import AlertError from './AllerError';
import Spinner from './Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../feature/auth/authSlice';

export default function FormLogin() {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    kodeunik: '',
  });

  const { kodeunik } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    document.title = 'Login';
    if (isError) {
      setError(message);
    }
    if (isSuccess) {
      navigate('/');
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      kodeunik,
    };
    dispatch(login(userData));
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
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Kode Unik</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Please Enter 9977 user A and 1122 user B'
                    name='kodeunik'
                    value={kodeunik}
                    onChange={onChange}
                    className='input input-bordered'
                    required
                    maxLength={4}
                  />
                </div>

                <div className='form-control mt-6'>
                  <button className='btn btn-primary'>Login</button>
                  <label className='label justify-center'>
                    <a
                      href='/auth/register'
                      className='label-text-alt link link-hover text-blue-800'>
                      Don't Have an Account ? Register Now
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
