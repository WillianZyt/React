import { GeoForm } from '../../components/GeoForm';
import { Person } from '../../components/Person';


const Page = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl'>Olá mundo</h1>
      <h3>Algum outro texto</h3>

      <Person />
    </div>
  );
}

export default Page;
// componentes -> geralmente inicia letra maiuscula
// return () -> components, retorna apenas um elemento, para mais, usar div dentro do return()
// Export default -> usado ,de preferencia ,apenas para a propria Page
// No 'import default', pode atribuir qulquer nome na const
// <img /> -> tudo precisa fechar, sempre com o />
// <> </> -> fragment, se nao usar a div
// com o uso de {}, pode-se usar JS, como variaveis e funções