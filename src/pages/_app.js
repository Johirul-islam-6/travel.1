import "@/styles/#globals.css";
import Layout from "../../components/Layout";
import { wrapper } from "../redux/store";
import { Provider } from "react-redux";

function App({ Component, ...rest}) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}

export default App
