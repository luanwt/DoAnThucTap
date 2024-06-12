import React from 'react';
import { Admin, Resource, ListGuesser, fetchUtils } from 'react-admin';
import AdminPanel from "./component/AdminPanel";
// import simpleRestProvider from 'ra-data-simple-rest';

import {
  listCategory,
  editCategory,
  createCategory,
} from './component/Categories';
import {
  listUser,
  editUser,
  createUser,
} from './component/Users';

import { listProduct, editProduct, createProduct } from "./component/Products";
import dataProvider from "./component/CustomDataProvider";


import {
  listRole,
  editRole,
  createRole,

} from './component/Roles';

import {
  listFeedback,
  editFeedback,
  createFeedback,

} from './component/Feedback';
import {
  listGallery,
  editGallery,
  createGallery,
} from './component/Galleries';

import {
  listOrders,
  editOrder,
  createOrder,
} from './component/Orders';
import {
  listOrderDetail,
  editOrderDetail
  // createOrder,
} from './component/OrderDetail';
import {
  listToken,
  editToken,
  createToken,
} from './component/Token';
import { createCart, editCart, listCart } from './component/Cart';
import { createCartitem, editCartitem, listCartitem } from './component/CartItems';

// const httpClient = fetchUtils.fetchJson;
const App = () => (
  <Admin dashboard={AdminPanel} dataProvider={dataProvider}>
    <Resource name="users"
      list={listUser}
      edit={editUser}
      create={createUser}
    />
    <Resource name="token"
      list={listToken}
      edit={editToken}
      create={createToken}
    />
     <Resource name="carts"
      list={listCart}
      edit={editCart}
      create={createCart}
    />
     <Resource name="cartItems"
      list={listCartitem}
      edit={editCartitem}
      create={createCartitem}
    />

    <Resource name="orders"
      list={listOrders}
      edit={editOrder}
      create={createOrder}
    />
     <Resource name="orderdetails"
      list={listOrderDetail}
      edit={editOrderDetail}
      // create={createOrder}
    />

    <Resource name="feedbacks"
      list={listFeedback}
      edit={editFeedback}
      create={createFeedback}
    />

    <Resource name="categories"
      list={listCategory}
      edit={editCategory}
      create={createCategory}
    />
    <Resource name="products"
      list={listProduct}
      edit={editProduct}
      create={createProduct}
    />

    <Resource name="roles"
      list={listRole}
      edit={editRole}
      create={createRole}
    />

    <Resource name="galleries"
      list={listGallery}
      edit={editGallery}
      create={createGallery}
    />
  </Admin>
);
export default App;