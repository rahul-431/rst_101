import Navbar from "../ui/Navbar";
import Slider from "../ui/Slider";
import Slides from "../ui/Slides";

function Home() {
  const slideData = [
    {
      city: "Hetauda-10",
      country: "Nepal",
      price: "10000",
      image:
        "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Kathmandu",
      country: "Nepal",
      price: "20000",
      image:
        "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      city: "Pokhara",
      country: "Nepal",
      price: "50000",
      image:
        "https://images.unsplash.com/photo-1483097365279-e8acd3bf9f18?q=80&w=1411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <header className="text-white">
        <Navbar />
      </header>
      <main className=" bg-slate-400">
        <Slider slideData={slideData} autoSlide={true}>
          {slideData.map((slide, index) => (
            <Slides
              key={index}
              city={slide.city}
              country={slide.country}
              image={slide.image}
              price={slide.price}
            />
          ))}
        </Slider>
      </main>
    </>
  );
}

export default Home;
