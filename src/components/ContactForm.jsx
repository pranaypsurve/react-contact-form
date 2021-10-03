import { useState, useEffect } from "react";
import FormFields from "./FormFields";
// import emailjs from "../../node_modules/emailjs-com";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./contactForm.css"
const ContactForm = () => {
    const formInputNames = {
        reset: false,
        firstName: "",
        lastName: "",
        phoneNumer: "",
        email: "",
        favouriteHobby: "",
        dob: ""
    }
    const [formName, setFormName] = useState(formInputNames);
    useEffect(() => {
        

    });
    const handleConat = () => {
        console.log("click");
    }
    const handleForm = (e) => {
        e.preventDefault();

        alert("Form Submited Check Your Mail");
        setFormName({ ...formName, reset: true });
        resetForm();
        
        // send mail using emailjs
        // emailjs.sendForm('servr_id', 'template_id', e.target, 'user_id')
        //     .then(res => {
        //         console.log(res);
        //     }).catch((err) => console.log(err));
    }
    function resetForm() {
        const formInputNames = {
            reset: false,
            firstName: "",
            lastName: "",
            phoneNumer: "",
            email: "",
            favouriteHobby: "",
            dob: ""
        }
        setFormName(formInputNames);
    }
        // (async () => {
        //     const rawResponse = await fetch('http://localhost/api/hello.php', {
        //       method: 'POST',
        //       headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify({name:'pranay',age:25 })
        //     });
        //     const content = await rawResponse.json();
          
        //     console.log(content);
        //   })();
    return (
        <div className="container">
            <div className="row">
                <div className="offset-lg-3 col-lg-6 p-3">
                    <form method="POST" className="form" onSubmit={handleForm}>
                        <h2 className="text-center pb-3" onClick={handleConat}>Contact Form</h2>
                        <div className="row">
                            <FormFields formName={formName} setFormName={setFormName} />
                        </div>
                        <div className="row">
                            <div className="col-12 text-center p-2">
                                <input type="submit" className="btn btn-primary" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactForm;