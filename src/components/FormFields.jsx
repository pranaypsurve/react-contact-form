const FormFields = ({ formName, setFormName }) => {
    const formElements = [
        {
            label: "First Name",
            type: "text",
            name: "firstName",
            placeholder: "Enter your first name"
        },
        {
            label: "Last Name",
            type: "text",
            name: "lastName",
            placeholder: "Enter your last name"
        },
        {
            label: "Phone Number",
            type: "text",
            name: "phoneNumer",
            placeholder: "Enter your phone number"
        },
        {
            label: "Contact Email",
            type: "email",
            name: "email",
            placeholder: "Enter your working email"
        },
        {
            label: "Date of Birth",
            type: "date",
            name: "dob",
            placeholder: "Enter your date of birth"
        },
        {
            label: "Favourite Hobby",
            type: "text",
            name: "favouriteHobby",
            placeholder: "Enter your hobby"
        }
    ];
    const handleAllFormInput = (e) => {
        setFormName({ ...formName, [e.target.name]: e.target.value });
    }

    return (
        formElements.map((eachelements, index) => {
            return (
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 pb-2" key={index + 56}>
                    <div className="form-group">
                        <label htmlFor={eachelements.name}>{eachelements.label}</label>
                        <input type={eachelements.type} className="form-control" name={eachelements.name} id={eachelements.name} value={formName[eachelements.name]} autoFocus onChange={handleAllFormInput} placeholder={eachelements.placeholder} required />
                    </div>
                </div>
            )
        })
    )
}
export default FormFields;