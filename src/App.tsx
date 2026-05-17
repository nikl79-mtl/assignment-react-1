import Layout from "./components/Layout.tsx";
import LiveHeader from "./components/LiveHeader/LiveHeader.tsx";

function App() {

  return (
      <>
        <Layout addClasses="bg-gray-50">
            <LiveHeader />
        </Layout>
      </>
  )
}

export default App