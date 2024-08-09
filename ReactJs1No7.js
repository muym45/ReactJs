// Menggunakan Promises
const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data Accepted");
      }, 2000);
    });
  };
  
  getData().then(response => console.log(response)); // Output: Data Accept
  
  // Menggunakan Async/Await
  const fetchData = async () => {
    try {
      const response = await getData();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchData(); // Output: Data Accept