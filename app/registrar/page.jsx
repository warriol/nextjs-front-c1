"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function Home() {
  const [credentials, setCredentials] = useState({
    nombre: "",
    apellido: "",
    username: "",
    email: "",
    password: "",
    telefono: "",
    rol: ""
  });
  const router = useRouter();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(credentials)
    });

    console.log(res);
    /*
    if (res.status === 200) {
      console.log("Usuario registrado");
      router.push("/");
    }else{
      console.log("Error al registrar usuario");
    }
    */
  };

  return (
    <main className="p-24">
      <div className="row">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input name="nombre" type="text" id="nombre" onChange={handleChange} />
          <label htmlFor="apellido">Apellido</label>
          <input name="apellido" type="text" id="apellido" onChange={handleChange} />
          <label htmlFor="username">Username</label>
          <input name="username" type="text" id="username" onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input name="email" type="email" id="email" onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input name="password" type="password" id="password" onChange={handleChange} />
          <label htmlFor="telefono">Telefono</label>
          <input name="telefono" type="text" id="telefono" onChange={handleChange} />
          <label htmlFor="rol">Rol</label>
          <input name="rol" type="text" id="rol" onChange={handleChange} />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </main>
  );
}

export default Home;
