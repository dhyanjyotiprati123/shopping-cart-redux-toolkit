import React from 'react'
import Sidebar from '../components/Sidebar';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

const Home = () => {
  const products = useSelector((state) => state.cart.products);
  const filter = useSelector(state => state.filter);
  const {byRating, byStock, byPrice, byFastDelivery, searchQuery} = filter;

  const transfromProducts =()=>{
    let filterProducts = [...products];

     if(byPrice){
       filterProducts = filterProducts.sort((a, b)=>
         byPrice === "lowToHigh" ? (a.price - b.price) : (b.price - a.price)
       )
     }

     if(!byStock){
        filterProducts = filterProducts.filter((val) => val.stock> 0)
     }

     if(byFastDelivery){
        filterProducts = filterProducts.filter((val) => val.fastDelivery)
     }

     if(byRating){
       filterProducts = filterProducts.filter((val) => val.rating >= byRating)
     }

     if(searchQuery){
       filterProducts = filterProducts.filter((val)=> val.name.toLowerCase().includes(searchQuery.toLowerCase()))
     }

    return filterProducts;
  }
  return (
    <div className='home'>
      <div className="home-filters">
        <Sidebar />
      </div>

      <div className="home-main">
        {
          transfromProducts().map((val)=> <Card key={val.id} prod={val} />)
        }
      </div>
    </div>
  )
}

export default Home