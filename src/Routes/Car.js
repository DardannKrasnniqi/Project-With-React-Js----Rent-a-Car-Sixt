import Navbar from '../Components/Navbar/Navbar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Carlisting from '../Carlisting/Carlisting';

const Car = () => {

  return (
    <div>
      <Navbar />
      <Main
        cname='main-car'
        mainimg='https://4kwallpapers.com/images/wallpapers/lamborghini-7460x4196-11123.jpeg'
        title='Car'
        btnclass='car'
      />
        <Carlisting/>
      <Footer />
    </div>
  );
};

export default Car;
