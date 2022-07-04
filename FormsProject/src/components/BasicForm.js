import useInput from "../hooks/use-input";

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        isValid: isFirstNameValid,
        hasError: hasFirstNameError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredLastName,
        isValid: isLastNameValid,
        hasError: hasLastNameError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: isEmailValid,
        hasError: hasEmailError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes("@"));

    const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid;

	const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!isFirstNameValid || !isLastNameValid || !isEmailValid) {
            return;
        }

        resetFirstNameInput();
		resetLastNameInput();
        resetEmailInput();
    };

    const firstNameClasses = hasFirstNameError
        ? "form-control invalid"
        : "form-control";

    const lastNameClasses = hasLastNameError
        ? "form-control invalid"
        : "form-control";

    const emailClasses = hasEmailError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="control-group">
                <div className={firstNameClasses}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={enteredFirstName}
                        onBlur={firstNameBlurHandler}
                        onChange={firstNameChangeHandler}
                    />
                    {hasFirstNameError && (
                        <p className="error-text">First name must not be empty</p>
                    )}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={enteredLastName}
                        onBlur={lastNameBlurHandler}
                        onChange={lastNameChangeHandler}
                    />
                    {hasLastNameError && (
                        <p className="error-text">Last name must not be empty</p>
                    )}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor="email">E-Mail Address</label>
                <input
                    type="text"
                    id="email"
                    value={enteredEmail}
                    onBlur={emailBlurHandler}
                    onChange={emailChangeHandler}
                />
				{hasEmailError && (
					<p className="error-text">Email must contain '@'</p>
				)}
            </div>
            <div className="form-actions">
                <button disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
