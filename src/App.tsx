import Layout from "./components/Layout.tsx";
import LiveHeader from "./components/LiveHeader/LiveHeader.tsx";
import ResultTable from "./components/ResultTable/ResultTable.tsx";
import ResultAnalyzer from "./components/ResultAnalyzer/ResultAnalyzer.tsx";

function App() {

  return (
      <>
        <Layout addClasses="bg-gray-50">
            <LiveHeader />
            <ResultTable />
            <ResultAnalyzer />
        </Layout>
      </>
  )
}

export default App