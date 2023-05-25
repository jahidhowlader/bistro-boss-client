import Cover from '../../share/cover/Cover';
import shopCover from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Shop.css'
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../orderTab/OrderTab';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Shop = () => {

    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks']

    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const { menu } = useMenu()

    const drinks = menu && menu.filter(item => item.category === 'drinks')
    const desserts = menu && menu.filter(item => item.category === 'dessert')
    const pizza = menu && menu.filter(item => item.category === 'pizza')
    const salad = menu && menu.filter(item => item.category === 'salad')
    const soup = menu && menu.filter(item => item.category === 'soup')

    return (
        <>
            <Helmet>
                <title>Shop | BISTRO BOSS</title>
            </Helmet>
            {/* shop Cover */}
            <Cover
                bgImg={shopCover}
                imageAlt="OUR SHOP"
                height="800px"
                title="OUR SHOP"
                details="Would you like to try a dish?"
            ></Cover>

            {/* show data by catagory */}
            <div className='my-16'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center font-bold">
                        <Tab><Link to="/shop/salad">SALADS</Link></Tab>
                        <Tab><Link to="/shop/pizza">PIZZA</Link></Tab>
                        <Tab><Link to="/shop/soup">SOUPS</Link></Tab>
                        <Tab><Link to="/shop/desserts">DESSERTS</Link></Tab>
                        <Tab><Link to="/shop/drinks">DRINKS</Link></Tab>
                        {/* <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab> */}
                    </TabList>
                    <TabPanel>
                        <OrderTab
                            itmes={salad}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            itmes={pizza}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            itmes={soup}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            itmes={desserts}
                        ></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab
                            itmes={drinks}
                        ></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default Shop;