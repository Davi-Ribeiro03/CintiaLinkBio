import React from 'react'
import cintiaImage from "./assets/cintiaImage.svg"
import wpp from "./assets/wpp.svg"
import instagram from "./assets/instagram.svg"
import linkedin from "./assets/linkedin.svg"

const App = () => {
  return (
    <div className='h-screen w-screen bg-primaryColor p-0 flex flex-col items-center'>
      <img src={cintiaImage} alt="Imagem da Cintia" className='w-full m-0' />

      <div className='bg-secundaryColor p-4 w-full'>
        <h1 className='text-4xl text-center'>Cintia Sales</h1>
        <h3 className='text-xl text-center'>Nutricionista</h3>
        <p className='text-sm text-center mt-4'>"Seu futuro saudável começa com as escolhas de hoje"</p>
      </div>

      <a
      href='https://www.google.com.br/?hl=pt-BR'
      target='_blank' 
      className='bg-secundaryColor text-2xl py-4 px-10 rounded-xl my-12 flex items-center justify-center shadow-black shadow-md'
      >
        <img src={wpp} alt="Ícone do whatsapp" />
        Marque sua consulta
      </a>

      <div className='flex absolute bottom-10 '>
        a<img src={instagram} alt="Ícone do instagram" />
        <img src={linkedin} alt="Ícone do linkedin" />
      </div>
      
      <footer className='bg-secundaryColor absolute bottom-0 w-full text-xs p-2'>@Developed by Davi_Ribeiro</footer>
    </div>
  )
}

export default App