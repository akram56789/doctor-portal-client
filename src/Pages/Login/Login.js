import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';



const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let signInError;

  if(loading || gLoading){
    return <Loading></Loading>
  }

  if(error || gError){
    signInError= <p className="text-red-500">User Not Found ❌</p>
  }

  const onSubmit = data => {
   console.log(data)
   signInWithEmailAndPassword(data.email, data.password)

  };
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold uppercase  ">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>

              </label>
              <input
                type="email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: 'Email is required'

                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email'
                }
                })}
              />

              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>

              </label>
              <input
                type="password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: 'Password is required'

                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer'
                  }
                })}
              />

              <label class="label">
                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


              </label>
            </div>


            <input className='btn w-full max-w-xs text-white' type="submit" value="login" />
          </form>
          {signInError}
          <div className="divider">OR</div>

          <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase">continue with google</button>







        </div>
      </div>
    </div>
  );
};

export default Login;