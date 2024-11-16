const PageLocators = {
    Login: {
        username_input: "input[name='username']",
        password_input: "input[name='password']",
        loginButton: "button[type='submit']"
    },

    MainPages: {
        username_input: '.oxd-input',
        employee_name_input: 'input[placeholder="Type for hints..."]',
        password_input: 'input[type="password"]',
        confirm_password_input: 'input[type="password"]',
        save_button: 'button[type="submit"]',
        search_button: ".oxd-form-actions>button[type='submit']",
        delete_button: 'button.oxd-button--label-danger.oxd-button--medium',
        checkIcon: '.oxd-icon.bi-check.oxd-checkbox-input-icon',
        requiredFieldErrors: '.oxd-input-field-error-message',
        invalidDataErrors: '.oxd-input-field-error-message'
    }
}

const constants = {
    url: "https://opensource-demo.orangehrmlive.com/",
    username: 'Admin',
    password: 'admin123'
}

export {PageLocators, constants}
