const PropertyItem = () => {
  return (
    <div className="w-[300px] h-[280px] rounded-2xl">
      <img
        src="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="property image"
        className="w-full h-full rounded-t-2xl"
      />
      <div className="flex flex-col gap-4 bg-white text-black">
        <div className="flex justify-around">
          <h1>Hetauda-10, TCN Road Bagmati province</h1>
          <h1>NRS. 1500000</h1>
        </div>
        <div className="flex justify-around">
          <div className="flex gap-2">
            <span></span>
            <span>8 Beds</span>
          </div>
          <div className="flex gap-2">
            <span></span>
            <span>2 Baths</span>
          </div>
          <div className="flex gap-2">
            <span></span>
            <span>1520 Sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
