import React, { FC } from "react";
import Image from "next/image";
import Link from 'next/link';


const HowCanIHelpYou: FC = () => {
    return (
        <section className="flex ">
            <Image
                src="/more-about-products.jpg"
                alt="HS Control Logo"
                width={"170"}
                height={30}
                />
                <div>
                    <label>How Can We Help You?</label>
                    <div>
                        <h1>Technical Support</h1>
                        <p>Need technical support? No problem! Just fill the form to be contacted by one of our technical experts.</p>̦
                    </div>
                    <div>
                        <h1>Commercial Support</h1>
                        <p>Need commercial support? Just fill the form to be contacted by one of our sales agents.</p>̦
                    </div>
                </div>
        </section>
    )
}

export default HowCanIHelpYou;