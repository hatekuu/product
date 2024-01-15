
const axios = require('axios');

const url = 'https://us-east-1.aws.data.mongodb-api.com/app/products-rjsvv/endpoint/productss';

// Gửi GET request và xử lý dữ liệu nhận được
axios.get(url)
  .then(response => {
    // Dữ liệu nhận được sẽ nằm trong response.data
   
    console.log('Dữ liệu nhận được:', data);

    // Ở đây bạn có thể thực hiện các xử lý khác với dữ liệu
  })
  .catch(error => {
    console.error('Đã xảy ra lỗi:', error);
  });
  export  const data = response.data;
