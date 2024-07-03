import React, { FC } from "react";
import Image from "next/image";
import Link from 'next/link';


const CardWithImage = () => {
    return (<section className="flex ">
            <div>
                <span>Do you have any question?</span>
                <span>Feel free to contact us anytime.</span>
            </div>
            <button>Contact Us Now</button>
    </section>)
}

export default CardWithImage;