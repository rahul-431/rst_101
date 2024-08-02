import { slideData } from "../data/slidedata";
import Slider from "../ui/Slider";
import Slides from "../ui/Slides";

function Home() {
  return (
    <>
      <Slider slideData={slideData} autoSlide={true}>
        {slideData.map((slide) => (
          <Slides
            key={slide._id}
            city={slide.city}
            country={slide.country}
            image={slide.image}
            price={slide.price}
            category={slide.category}
            type={slide.type}
          />
        ))}
      </Slider>
    </>
  );
}

export default Home;
