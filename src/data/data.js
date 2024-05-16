import React from 'react'

const products = [
    {
        id: "asd1.1",
        name:"ICONO GEL DE LIMPIEZA KEEP MATT 150GR",
        description: "Exfolia y elimina impurezas. Limpia y desinfecta la piel en un solo paso. Formulado con Clorhexidina, cloruro de benzalconio y sepicontrol para controlar la flora bacteriana y eliminar el sebo de la piel",
        price: 7.147,
        stock: 7,
        category: "SkinCare",
        image: "/image/GelLimpieza-KeepCalm.jpeg"
    },
    {
        id: "asd1.2",
        name:"ICONO MÁSCARA HUMECTANTE CON VITAMINA C 250GR",
        description: "Mejora la apariencia de manera inmediata. Humecta, frena la oxidación y promueve la descongestión de la piel, gracias al valor en agentes hidratantes y regeneradores esta máscara ayuda a refrescar y reparar la piel cuidando la humectación natural de la misma.",
        price: 10.700,
        stock: 5,
        category: "SkinCare",
        image: "/image/mascarahumectante.jpg"
    },
    {
        id: "asd1.3",
        name:"ICONO SERUM ESENCIAL REGENERANTE 20ML",
        description: "Efecto antioxidante y protector cutáneo. -Previene el envejecimiento cutáneo, regenera el tejido y las celulas.",
        price: 10.075,
        stock: 2,
        category: "SkinCare",
        image: "/image/serunEsencialRegenerante.jpg"
    },
    {
    
    id: "asd1.4",
    name:"ICONO LÁPIZ CORRECTOR KEEP WHITE 4GR",
    description: "Unifica el tono de la piel reduciendo las manchas oscuras. El Lápiz corrector blanqueador es un innovador sistema para tratar las manchas, protegerlas de la radiación solar y maquillarlas, todo en un solo paso",
    price: 7.388,
    stock: 6,
    category: "MakeUp",
    image: "/image/lapizCorrector.jpeg"
    }

];

 const getProducts = () => {
    return new Promise ((resolve, reject) => {
      // settime out se usa para hacer retrasos
      setTimeout(() => {
        resolve(products);
      }, 2000); 
       

    });
  };

export default getProducts;



