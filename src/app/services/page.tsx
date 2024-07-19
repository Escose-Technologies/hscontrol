
import styles from '../../app/styles' // Adjust the path to your styles file

const SERVICES = [
    "Environmental Monitoring Systems (including Solar, Wind etc.)",
    "Hydrological Systems",
    "Project Services (including Turnkey Implementation of Projects, Training Programs, Onsite Annual Maintenance, Sensors Calibration etc.)",
    "Road Safety Systems",
    "Communication, Network System & Solutions"
]

const Services = () => {
  
  return (
    <>
     <section className="section section-lg pb-0 relative z-20 overflow-hidden">
        <div className="container relative z-20">
            <h2 className={styles.heading2 + ' mb-8'}>Services</h2>
            <p className={styles.paragraph + ' mb-5 text-lg'}>HS CONTROL & SYSTEMS provides complete services for Weather and Environmental projects including Consultancy Services, site selections, equipment supplies, installation, operation, training & long-term maintenance. Our excellence includes the following:</p>
            <ol className="list-decimal list-inside space-y-2">
                {
                    SERVICES.map(service => (<li className={styles.paragraph + '  text-lg'} key={service}>{service}</li>))
                }
              
            </ol>
        </div>
      </section>
    </>
  );
};

export default Services;
