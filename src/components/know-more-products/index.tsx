import Carousel from "../caurosal";

const PRODUCTS = [
  {
    image: "https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400",
    title: "Solar Radiation Sensor SUNPYRA-24 -HSCS"
  },
  {
    image: "https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400",
    title: "Enhancing Agricultural Practices with Weather Radar Technology: A Comprehensive Guide"
  },
  {
    image: "https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400",
    title: "🔥 Importance of Heat Stress Meters in Safeguarding Worker Safety 🔥"
  },
  {
    image: "https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400",
    title: "Exploring the Differentiating Factors: Weather Radar, Weather Monitoring Systems, and Automated Weather Stations"
  },
  {
    image: "https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400",
    title: "Exploring the Differentiating Factors: Weather Radar, Weather Monitoring Systems, and Automated Weather Stations"
  }
]
const KnowMoreProducts = () => {
    return (
        <section className="section section-lg feature triangle-up pb-0 relative z-20 overflow-hidden">
        <div className="container relative z-20">
             <div data-aos="fade-up-sm" className="row pb-12 text-center aos-init aos-animate">
                Discover More About the Products
             </div>
             <div className="row relative">
               <div className="col-12">
                <Carousel items={PRODUCTS}/>
               </div>
             </div>
        </div>
      </section>
      );
};

export default KnowMoreProducts;
