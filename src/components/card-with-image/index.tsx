import React, { FC } from "react";
import Image from "next/image";
import Link from 'next/link';


const CardWithImage = () => {
    return (<section className="flex ">
        <Image
              src="/more-about-products.jpg"
              alt="HS Control Logo"
              width={"170"}
              height={30}
            />
            <div>
                <Link href="#">Environmental Monitoring Solutions</Link>
                <h1>Do you want to know our products?</h1>
                <p>HS controls instruments are suitable for virtually any type of environmental monitoring application, both portable and long-term, outdoors and indoors, ensuring accurate and reliable measurements of various physical quantities.</p>
            </div>
    </section>)
}

export default CardWithImage;