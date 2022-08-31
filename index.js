export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('test test test'),
  };
  return response ;  
};





// // For development/testing purposes
// exports.handler = function(event) {
//     const response = {
//             statusCode: 200,
//             body: JSON.stringify('Hello from studiocode! 123'),
//            };
//           return response;
//   };

