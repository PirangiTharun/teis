import { useLocation } from "react-router-dom";

const ViewProduct = () => {
    window.scrollTo(0,0);
    const location = useLocation();
    const state = location.state;
    return (
      <div className="flex px-[6vw] py-[40px]">
        <div className="shadow-lg overflow-hidden flex flex-col justify-center items-center mr-[32px]">
          <img
            className="hover:scale-125 transition-all duration-500"
            src={state.icon}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-3xl pb-8">{state.name}</h2>
          <div>
            <div className="flex border-b border-b-gray-800 py-4">
              <p className="w-[10vw]">Business Type:</p>
              <p>Manufacturer, Exporter, Supplier, Retailer</p>
            </div>
            <div className="flex border-b border-b-gray-800 py-4">
              <p className="w-[10vw]">Color: </p>
              <p>Grey-black</p>
            </div>
            <div className="flex border-b border-b-gray-800 py-4">
              <p className="w-[10vw]">Thickness: </p>
              <p>10-15 min</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ViewProduct;