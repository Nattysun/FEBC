
import {useForm} from 'react-hook-form'

type Inputs = {
  email: string,
  password: string,
  confirmPassword: string
}


const MyForm = () => {

  const {register, handleSubmit} = useForm<Inputs>();

  const onSubmit =(data:any) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')}/>
      <input {...register('password')}/>
      <input {...register('confirmPassword')}/>
      <input type='submit'/>
    </form>
    
  )
}

export default MyForm

