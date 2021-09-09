import BarChart from "components/barChart";
import DataTable from "components/data-table";
import DonutsChart from "components/donutsChart";
import Footer from "components/footer";
import Navbar from "components/navbar";

function App() {
  return (
    <>
      <Navbar/>
      <div className = "container">
        <h1 className = "text-primary py-3">Dashboard Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className = "text-center text-secondary">Taxa de sucesso(%)</h5>
            <BarChart/>
          </div>
          <div className="col-sm-6">
            <h5 className = "text-center text-secondary">Todas as Vendas</h5>
            <DonutsChart/>
          </div>
        </div>
        <div className="py-3">
          <h2 className = "text-primary">Todas Vendas</h2>
        </div>
        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
