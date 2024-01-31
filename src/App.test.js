import { render, screen } from '@testing-library/react';
import App from './App';import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


describe('App component', () => {

  test('renders learn react link', () => {
    render(<Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ToastContainer
        position="bottom-left"
        theme="dark"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </Provider>);

  });
});