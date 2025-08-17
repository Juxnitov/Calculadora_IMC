import Image from "next/image";
import "./globals.css";

export default function Home() {
  const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const listaNombres = ["Juan", "María", "Pedro", "Ana", "Luis", "Sofía", "Carlos", "Lucía"];

  const personas = [
    { nombre: "Juan", apellido: "Pérez", correo: "juan.perez@email.com", telefono: "3001234567", edad: 25 },
    { nombre: "Camila", apellido: "Gómez", correo: "camila.gomez@email.com", telefono: "3002345678", edad: 22 },
    { nombre: "Pedro", apellido: "Martínez", correo: "pedro.martinez@email.com", telefono: "3003456789", edad: 28 },
    { nombre: "Luis", apellido: "Rodríguez", correo: "luis.rodriguez@email.com", telefono: "3004567890", edad: 30 },
    { nombre: "Ana", apellido: "López", correo: "ana.lopez@email.com", telefono: "3005678901", edad: 27 },
    { nombre: "Sofía", apellido: "Ramírez", correo: "sofia.ramirez@email.com", telefono: "3006789012", edad: 24 },
    { nombre: "Carlos", apellido: "Torres", correo: "carlos.torres@email.com", telefono: "3007890123", edad: 29 },
    { nombre: "Valentina", apellido: "Morales", correo: "valentina.morales@email.com", telefono: "3008901234", edad: 23 },
    { nombre: "Andrés", apellido: "Castro", correo: "andres.castro@email.com", telefono: "3009012345", edad: 26 },
    { nombre: "María", apellido: "Suárez", correo: "maria.suarez@email.com", telefono: "3000123456", edad: 21 }
  ];

  const products = [
    {
      nombre: "Laptop Lenovo IdeaPad 3",
      descripcion: "Portátil con procesador Intel Core i5, 8GB RAM, 512GB SSD.",
      categoria: "Tecnología",
      cantidad: 10,
      precio: 2500000,
      imagen: "https://catalogo.claro.com.ec/uploads/imgs/productos/81wa00q2lm-ideapad-i3/gris/zoom/03-81wa00q2lm-ideapad-i3-gris-back.png"
    },
    {
      nombre: "Camiseta Nike Sportswear",
      descripcion: "Camiseta deportiva para hombre, color negro, 100% algodón.",
      categoria: "Ropa",
      cantidad: 25,
      precio: 85000,
      imagen: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e57d11d-0f56-4907-94a1-a547b098f41b/sportswear-camiseta-fgGZJH.png"
    },
    {
      nombre: "Audífonos JBL Tune 510BT",
      descripcion: "Audífonos inalámbricos Bluetooth, hasta 40 horas de batería.",
      categoria: "Tecnología",
      cantidad: 15,
      precio: 180000,
      imagen: "https://agaval.vtexassets.com/arquivos/ids/1864186/image-b1df0fd8a58b41a58493738b96eac44d.jpg?v=638623480257900000"
    },
    {
      nombre: "Silla Ergonómica Oficina",
      descripcion: "Silla con soporte lumbar, altura ajustable y ruedas.",
      categoria: "Hogar",
      cantidad: 8,
      precio: 320000,
      imagen: "https://ergonomus.co/cdn/shop/collections/Principal-5.jpg?v=1741811754"
    },
    {
      nombre: "Cafetera Oster 12 Tazas",
      descripcion: "Cafetera eléctrica con filtro permanente y función de pausa.",
      categoria: "Electrodomésticos",
      cantidad: 12,
      precio: 145000,
      imagen: "https://tse3.mm.bing.net/th/id/OIP.AwfO5NB4dxW4dDb-RPbTiQHaHa?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ];

  return (
    <div className="container">
      <div className="section">
        <h2>Lista de Números</h2>
        {listaNumeros.map((n, i) => (
          <p key={i} className="list-item">{n}</p>
        ))}
      </div>

      <div className="section">
        <h2>Lista de Nombres</h2>
        {listaNombres.map((c, i) => (
          <p key={i} className="list-item">{c}</p>
        ))}
      </div>

      <div className="section">
        <h2>Lista de Personas</h2>
        {personas.map((p, i) => (
          <p key={i} className="list-item">
            {p.nombre} {p.apellido}, {p.correo}, {p.telefono}, {p.edad} años
          </p>
        ))}
      </div>

      <div className="section">
        <h2>Lista de Productos</h2>
        {products.map((prod, i) => (
          <div key={i} className="product">
            {prod.imagen && <img src={prod.imagen} alt={prod.nombre} />}
            <p>
              <strong>{prod.nombre}</strong> - {prod.descripcion}, {prod.precio} COP, {prod.categoria}, stock: {prod.cantidad}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
