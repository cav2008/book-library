/* eslint-disable no-console */
module.exports = {
  content: './dist',
  historyApiFallback: true,
  hot: true,
  open: true,
  on: {
    listening: () => {
      console.log('');
      console.log('=================================================');
      console.log('Application is running at: http://localhost:8080/');
      console.log('=================================================');
      console.log('');
    },
  },
};
