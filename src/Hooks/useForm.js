import React from 'react';

const types = {
    email: {
        regex:  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i,
        message: "Preencha um email válido.",
    },
    password: {
        regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        message: "A senha precisa conter: um carácter maiúscula, 1 minúsculo, 1 digito e um carácter especial."
                    +"Mínimo 8 caracteres.",
    },
    number: {
        regex: /^\d+$/,
        message: "Utilize apenas números",
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(null);

    function validate(value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError("Preencha um valor");
            return false;
        } else if (types[type] && types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({ target }) {
        if (error) validate(target.value);
        setValue(target.value);
    }

    return {
        value, setValue, onChange, error, validate: () => validate(value), onBlur: () => validate(value)
    }
};

export default useForm;
