"use client"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../app/styles' // Adjust the path to your styles file

import { contactUsFields } from './contants';
import Input from '../../pureComponents/Input';
import Button from '../../pureComponents/Button';

const ContactForm = ({ handleSuccessToster }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_z2djj1k',
        'template_key7wtr',
        form.current,
        'user_OQDlxm04mac90RvzQrEsi'
      )
      .then(
        () => {
          form.current.reset();
          handleSuccessToster(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact-us-form"
      className={`${styles.flexCenter} ${styles.paddingY} ${styles.boxWidth} `}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <ul className="flex-[1] flex flex-col justify-start mr-10">
          {[
            { title: 'Physical location', value: 'HS Control & Systems; C-19, First Floor, DDA Sheds, Okhla Phase I, Okhla Industrial Estate, New Delhi - 110020' },
            { title: 'Work Hours', value: 'Monday to Saturday: 9.30 am – 7pm' },
            { title: 'Email', value: 'info@hscontrolsystems.com' },
            { title: 'Phone Numbers', value: "+91-9772766137 / 8005623209 "},
          ].map((item) => (
            <li key={item.title} className="mb-10">
              <h2 className={`${styles.heading3} capitalize`}>{item.title}</h2>
              <p className={`${styles.paragraph}`}>{item.value}</p>
            </li>
          ))}
        </ul>
        <div className="flex-[2] w-full flex flex-col md:flex-row justify-between flex-wrap md:mt-0 mt-10">
          <form
            className={`flex flex-col w-full`}
            ref={form}
            onSubmit={sendEmail}
          >
            {contactUsFields.map((field) => (
              <Input
                key={field.id}
                labelText={field.labelText}
                labelFor={field.id}
                id={field.id}
                name={field.id}
                type={field.fieldType}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
                fieldType={field.fieldType}
              />
            ))}
            <Button text={'Submit'} type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
