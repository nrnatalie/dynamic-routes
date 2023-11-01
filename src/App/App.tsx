import { Route, Routes } from 'react-router-dom';
import './App.css';
import RandomActivity from '../components/randomActivity/RandomActivity';
import Layout from '../layouts/Layout';
import Counter from '../components/counter/Counter';
import CityPage from '../components/cityPage/CityPage';
import Sandwich from '../components/sandwich/Sandwich';
import BtnTest from '../components/btnTest/BtnTest';
import Parent from '../components/parent/Parent';
import DogCard from '../components/dogCard/DogCard';
import CatCard from '../components/catCard/CatCard';
import Error from '../components/footer/error/Error';
import ProductPage from '../components/productPage/ProductPage';
import ProductItem from '../components/productItem/ProductItem';

// Routes - это элемент родитель в который вы вкладываете все Route с ссылками на элементы
// path - это аттрибут путь до компонента (название придумываете сами)
// element - это сам компонент - вы его импортируете и передаете в роут

const App = (): JSX.Element => (
  <Routes>
    <Route path="/dynamic-routes" element={<Layout />}>
      <Route index element={<RandomActivity />} />
      <Route path="counter" element={<Counter />} />
      <Route path="cityPage" element={<CityPage />} />
      <Route path="sandwich" element={<Sandwich />} />
      <Route path="btnTest" element={<BtnTest />} />
      <Route path="parent" element={<Parent />} />
      <Route path="catCard" element={<CatCard />} />
      <Route path="dogCard" element={<DogCard />} />
      <Route path="productPage" element={<ProductPage />} />
      <Route path="productPage/:id" element={<ProductItem />} />
      <Route path="*" element={<Error />} />
    </Route>
  </Routes>
);

export default App;
