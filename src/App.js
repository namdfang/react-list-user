
import Header from './components/Header/Header';
import HeaderContent from './components/HeaderContent/HeaderContent';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import './App.scss';

export default function App() {
  return (
    <div>
      <Header/>
      <main className='d-flex'>
        <div className='sidebar'><Sidebar/></div>
        <div className='content'>
          <div><HeaderContent/></div>
          <div><MainContent /></div>
        </div>
      </main>
    </div>

  );
}

