import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const deletePost = () => {
    axios
      .delete('https://api.example.com/users/123')
      .then((res) => {
        console.log('Sucsessfully');
      })
      .catch((error) => {
        console.error('Failed');
      });
  };
  return (
    <>
      <button onClick={deletePost}>DELETE POST</button>
    </>
  );
}

export default App;
// const updatePost = async () => {
//   try {
//     const response = await axios.put('https://api.example.com/resources/1', {
//       name: 'elham',
//       age: 55,
//     });
//     console.log('Update me sukses', response.data);
//   } catch (error) {
//     console.error('failed', error);
//   }
// };
// return (
//   <>
//     <button onClick={updatePost}>UPDATE POST</button>
//   </>
// );

// const updatePost = () => {
//   axios
//     .post('https://api.example.com/resources/1', {
//       name: 'Elhamja',
//       age: 52,
//     })
//     .then((res) => {
//       alert('E ki bo update');
//     })
//     .catch((error) => {
//       console.error('Error', error);
//     });
// };

// const updatePost = () => {
//   axios
//     .put('https://api.example.com/resources/1', {
//       name: 'Elhamja',
//       age: 52,
//     })
//     .then((res) => {
//       alert('E ki bo update');
//     })
//     .catch((error) => {
//       console.error('Error', error);
//     });
// };

// const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => setData(response.data))
//       .catch((error) => console.error('Error fetching data', error));
//   }, []);
//   return (
//     <>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// const [quote, setQuote] = useState('');
// const getQuote = () => {
//   axios
//     .get('http://api.quotable.io/random')
//     .then((res) => {
//       console.log(res.data.content);
//       setQuote(res.data.content);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// return (
//   <div>
//     <button onClick={getQuote}>Get Quote</button>
//     {quote && <p>{quote}</p>}
//     {/* <p>
//       {quote}
//     </p> */}
//   </div>
// );
