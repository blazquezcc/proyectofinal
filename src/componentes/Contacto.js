import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j33bbir', 'template_02ovltb', form.current, '9uAZc0NAYN5_71KDT')
            .then((result) => {
                alert(result.text);
            }, (error) => {
                alert(error.text);
            });

    };

    return (
       
        <form ref={form} onSubmit={sendEmail}>
            <br/>
            <div class="form-group">
                <label for="exampleInputEmail1">Nombre</label>
                <input type="text" name="user_name" class="form-control" id="exampleInputText1" aria-describedby="nameHelp" placeholder="Introduce Nombre" />
            </div>
            <br/>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" name="user_email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce email" />
            </div>
            <br/>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Mensaje</label>
                <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <br/>
            <input class="btn btn-primary" type="submit" value="Enviar" />
        </form>
    );
};
export default Contacto;