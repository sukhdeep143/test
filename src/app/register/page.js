import { useState } from "react"



export default function Register(){
    const [form , setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        })
    }




    return(
    <div>


        <form
        onSubmit={HandelSubmit}


        >
            <input type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            required
             
             />
             <input type="email"
             name="email"
             placeholder="Enter email"
             value={form.email}
             onChange={handleChange}
             required />

             <input type="password"
             name="password"
             placeholder="Enter pssword"
             value={form.password}
             onChange={handleChange}
             required
              />

              <button type="submit">
                submit
              </button>
        {message && (
            <p>{message}</p>
        )}
        </form>
             </div>
    )
}