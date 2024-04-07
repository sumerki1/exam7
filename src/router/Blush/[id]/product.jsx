// import React from 'react'
// import React, { useState, useEffect } from 'react';

// const fetchProduct = async (id) => {
//     const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush/${id}`);
//     return response.json()
//   }
// const product = () => {
//     const router = useParams();
//   const { id } = router;
//   const [loading, setLoading] = useState(true);
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchProduct(id);
//         setProduct(data);
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     const timeout = setTimeout(() => {
//         fetchData();
//       }, 1000);
  
//       return () => clearTimeout(timeout);
//     }, [id]);
  
//   return (
//     <div>
//         <h2>{product.name}</h2>
//     </div>
//   )
// }

// export default product