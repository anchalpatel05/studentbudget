import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster position="bottom-center" />
    </>
  );
}

export default Layout;
