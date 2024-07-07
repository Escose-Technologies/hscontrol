import Icon from "../icon";
import Image from "next/image";
const cards = [
    {
        icon: "clouds",
        label: "Weather Monitoring Systems",
        description: "Our full range of products includes sensors, data acquisition systems, software and installation accessories."
    },
    {
        icon: "waves",
        label: "Hydrological Systems ",
        description: "Our solutions for hydrological monitoring are particularly suitable for professionals and researchers who need high quality and reliable instruments."
    },
    {
        icon: "waves",
        label: "Indoor Environment Monitoring ",
        description: "Understanding IEW helps designers, architects and industrial hygienists creating more comfortable environments. We offers solutions with multi-measurement characteristics."
    },
    {
        icon: "cloud-moon-lightning",
        label: "Agrometeorological Systems",
        description: "We provide complete solutions for measurement of weather parameters for agriculture that helps to enhance or expand agricultural crops or to increase crop production."
    },
    {
        icon: "office",
        label: "Microclimate and Health & Safety",
        description: "a series of devices for the evaluation of environments from the point of view of the thermal sensation of the occupants. Data loggers, sensors and software for the evaluation of moderate thermal environments"
    },
    {
        icon: "clouds",
        label: "Geophysics",
        description: "To support the management of the territory subject to breakage of earthen dams, levees or embankments, to infiltration of pollutants in the water table or to landslides risk, Georesistivimeter for the permanent monitoring of large areas of the subsoil with the ERT method."
    }
]
const ProductHeading = () => {
  return (
    <section className='section features relative z-20 overflow-hidden after:-z-10'>
        <div className="container relative z-30 m-auto ">
            <div className="row items-end justify-between pb-12">
                <div className="lg:col-8 xl:col-6">
                    <span className="mb-6 inline-block font-medium uppercase text-red-400 aos-init aos-animate">
                       What we offer
                    </span>
                    <div className="mb-8 border-l-2 border-dark border-opacity-50 py-2 pl-6 lg:mb-0 aos-init aos-animate">
                        <h2 className="mb-6 font-semibold aos-init aos-animate">
                            A Technology Approach
                        </h2>
                        <p className="text-lg aos-init aos-animate">
                          We offers Business Solutions for Weather & Environment related industries that have become market leaders in their respective areas of application. We supply high-quality products and solutions to various industries at the best prices.
                        </p>
                    </div>
                </div>
            </div>
            <div className="colored-box-icon grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:grid-cols-1  aos-init aos-animate mx-auto pb-12">
                {
                    cards.map(card => {
                        return (
                                <div className='h-full rounded-2xl border border-border/30 bg-white px-8 py-12 transition-all duration-300 hover:shadow-xl'> 
                                    <div className="icon-box">
                                        <Icon icon={card.icon}  />
                                    </div>
                                    <h3 className="mb-6 text-xl font-semibold sm:text-2xl">
                                        {card.label}
                                    </h3>
                                    <p className="text-slate-500 text-sm">{card.description}</p>
                                </div>
                        )
                    })
                } 
            </div>
        </div>
    </section>
  );
};

export default ProductHeading;
