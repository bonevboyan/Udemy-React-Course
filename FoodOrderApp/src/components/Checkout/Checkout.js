import useInput from "../../hooks/use-input";

import useHttp from "../../hooks/use-http"

import classes from "./Checkout.module.css";

const Checkout = (props) => {
    const checkValidity = (value) => value.trim() !== "";

    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: nameReset,
    } = useInput(checkValidity);

    const {
        value: enteredStreet,
        isValid: streetIsValid,
        hasError: streetError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
        reset: streetReset,
    } = useInput(checkValidity);

    const {
        value: enteredPostalCode,
        isValid: postalCodeIsValid,
        hasError: postalCodeError,
        valueChangeHandler: postalCodeChangeHandler,
        inputBlurHandler: postalCodeBlurHandler,
        reset: postalCodeReset,
    } = useInput(checkValidity);

    const {
        value: enteredCity,
        isValid: cityIsValid,
        hasError: cityError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: cityReset,
    } = useInput(checkValidity);

    const isFormValid =
        nameIsValid && cityIsValid && postalCodeIsValid && streetIsValid;

    const confirmHandler = (event) => {
        event.preventDefault();
        
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity,
        });
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onBlur={nameBlurHandler}
                    onChange={nameChangeHandler}
                    value={enteredName}
                />
                {nameError && (
                    <p className={classes["error-text"]}>
                        Name field should not be empty.
                    </p>
                )}
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    onBlur={streetBlurHandler}
                    onChange={streetChangeHandler}
                    value={enteredStreet}
                />
                {streetError && (
                    <p className={classes["error-text"]}>
                        Street field should not be empty.
                    </p>
                )}
            </div>
            <div className={classes.control}>
                <label htmlFor="postal">Postal Code</label>
                <input 
                    type="text"
                    id="postal"
                    onBlur={postalCodeBlurHandler}
                    onChange={postalCodeChangeHandler}
                    value={enteredPostalCode}
                     />
                {postalCodeError && (
                    <p className={classes["error-text"]}>
                        Postal Code field should not be empty.
                    </p>
                )}
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input 
                    type="text"
                    id="city"
                    onBlur={cityBlurHandler}
                    onChange={cityChangeHandler}
                    value={enteredCity} />
                {cityError && (
                    <p className={classes["error-text"]}>
                        City field should not be empty.
                    </p>
                )}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit} disabled={!isFormValid}>
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default Checkout;
