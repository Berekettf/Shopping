import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShopContectProvider from './Context/ShopContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <ShopContectProvider>
            <App />
     </ShopContectProvider>
     
);

