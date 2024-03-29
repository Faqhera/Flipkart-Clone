import {useEffect} from 'react';

//components
import NavBar from './NavBar';
import Banner from './Banner';
import Slid from './Slid';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

import {Box,styled} from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)`
         padding: 10px;
         background: #F2F2F2;
`

const Home = () => {

  const {products} = useSelector(state => state.getProducts)
     
  const dispatch = useDispatch();

useEffect(() => {
     dispatch(getProducts())
}, [dispatch])

    return(
      <>
          <NavBar/>
            <Component>
                <Banner/>
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection/>
                <Slid products={products} title="Discounts for you" timer={false}/>
                <Slid products={products} title="Suggesting Items" timer={false}/>
                <Slid products={products} title="Top Selection" timer={false}/>
                <Slid products={products} title="Recommended Items" timer={false}/>
                <Slid products={products} title="Trending Offer" timer={false}/>
                <Slid products={products} title="Season's top picks" timer={false}/>
                <Slid products={products} title="Top Deals on Accessories" timer={false}/>

            </Component>

      </>
      )
}

export default Home;