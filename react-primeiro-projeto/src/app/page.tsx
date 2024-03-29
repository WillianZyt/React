import { GeoForm } from '../../components/GeoForm';


const Page = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl'>Olá mundo</h1>
      <h3>Algum outro texto</h3>

      <GeoForm />
    </div>
  );
}

export default Page;
// componentes -> geralmente inicia letra maiuscula
// return () -> retorna apenas um elemento, para mais, usar div
// Export default -> usado ,de preferencia ,apenas para a propria Page
// No 'import default', pode atribuir qulquer nome na const