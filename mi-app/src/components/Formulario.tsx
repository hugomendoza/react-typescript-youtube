import { useForm } from '../hooks/useForm';

interface FormData {
  email:string;
  name:string;
  edad:number
}

export const Formulario = () => {

  // const [formulario, setFormulario] = useState({
  //   email: "",
  //   name: ""
  // });

  // const handleChange = ( {target}:ChangeEvent<HTMLInputElement> ) => {
  //   const {name, value } = target;

  //   setFormulario({
  //     ...formulario,
  //     [name]: value
  //   });
  // } 
  
  const { name, email, edad, handleChange, formulario } = useForm<FormData>({
      email: "hugo@gmal.com",
      name: "Hugo M",
      edad: 35
  });
  // const { email, name, edad } = formulario;

  return (
    <form autoComplete="off">
      
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={ email }
          onChange={ handleChange }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={ name }
          onChange={ handleChange }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input
          type="number"
          className="form-control"
          name="name"
          value={ edad }
          onChange={ handleChange }
        />
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>

  )
}
