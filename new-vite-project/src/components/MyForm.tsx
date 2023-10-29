
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
      <input {...register('email')}/> //... = spread operator เอาไว้ทำหน้าที่กระจายค่าข้อมูล หรือ property ใน obj
      <input {...register('password')}/>
      <input {...register('confirmPassword')}/>
      <input type='submit'/>
    </form>
    
  )
}

export default MyForm

