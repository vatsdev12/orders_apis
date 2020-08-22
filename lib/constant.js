const STATUS_CODE = {
    ERROR: 0,
    SUCCESS: 1
}

const ACCOUNT_LEVEL = {
    ADMIN: 1,
    USER: 2
}

const LOGIN_TYPE = {}

const SOCIAL_ACCOUNT_TYPE = {
    FACEBOOK: 1,
    GOOGLE: 2
}

const DB_MODEL_REF = {
    INVENTORY: "Inventory",
    ACCOUNT: "Account",
    ORDER: "Order"

}

const TRANSACTION_TYPE = {
    REFERRAL: 1
}

const NOTIFICATION_TYPE = {
    CHAT: 1,

}

const NOTIFICATION_TITLE = {
    CHAT: "New Message",

}

const DEVICE_TYPE = {
    ANDROID: 1,
    IOS: 2
}

const REQUEST_STATUS = {
    SENT: 1,
    RECEIVED: 2,
    ACCEPTED: 3,
    DECLINED: 4,
    CANCEL: 5
}

const REQUEST_API_STATUS = {
    SENT: 'sent',
    ACCEPT: 'accept',
    DECLINE: 'decline',
    CANCEL: 'cancel',
    REMOVE: 'remove'
}

// ========================== Export Module Start ==========================
const MESSAGES = {
    KEY_CANT_EMPTY: "{{key}} cannot be empty",
    INTERNAL_SERVER_ERROR: "Please try after some time.",
    TOKEN_GENERATE_EXCEPTION: "Error while generating access token.",
    INVALID_EMAIL: "Please fill valid email address.",
    INVALID_PASSWORD: "Password needs to have at least one lower case, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.",
    VALIDATION_ERROR: "Validation error.",
    UNAUTHORIZED_ACCESS_EXCEPTION: "Unauthorized access.",
    NON_ADMIN_ACCESS_EXCEPTION: "Only admin can perform these operations",
    INVALID_PHONE: "Please fill valid phone number.",
    BLOCKED_PHONE: "Action blocked for illegal use of services.",
    STRIPE_ERROR: "Stripe invalid request error.",
    TOKEN_EXPIRED: "Token link has been expired.",
    SESSION_EXPIRED: "Your session has been expired!.",
    EMAIL_ALREADY_EXIST: "Email already exist",
    USER_NOT_ACTIVE: "User not active",
    phoneAlreadyRegistered: "This phone number is already registered.",
    userNotVerified: "This user is not verified.",
    login_success: "Successfully logged in.",
    signup_success: "Sign up successful.",
    EMPTY: {},
    OLD_PASSWORD_MISMATCH: "Old password is not correct. Please try again.",
    NOT_IN_STOCK: "Product Not In Stock"

}

module.exports = Object.freeze({
    APP_NAME: 'Chat-demo',
    STATUS_CODE: STATUS_CODE,
    ACCOUNT_LEVEL: ACCOUNT_LEVEL,
    LOGIN_TYPE: LOGIN_TYPE,
    SOCIAL_ACCOUNT_TYPE: SOCIAL_ACCOUNT_TYPE,
    DB_MODEL_REF: DB_MODEL_REF,
    TRANSACTION_TYPE: TRANSACTION_TYPE,
    MESSAGES: MESSAGES,
    NOTIFICATION_TYPE: NOTIFICATION_TYPE,
    NOTIFICATION_TITLE: NOTIFICATION_TITLE,
    DEVICE_TYPE: DEVICE_TYPE,
    REQUEST_STATUS: REQUEST_STATUS,
    REQUEST_API_STATUS: REQUEST_API_STATUS,
    email: {
        // Credentials
        SENDER: '',
        NAME: '#NAME#',
        EMAIL: '#EMAIL#',
        subject: {
            VERIFY_EMAIL: 'Confirm Email Address',
            FORGOT_PWD_EMAIL: 'Reset Password Request',
            SEND_INVITATION_EMAIL: 'Invitation Request',
            SEND_QR_CODE_EMAIL: 'Code Verification',
            SEND_REFERRAL_EMAIL: 'Invitation to join WiseOak',
            REQUEST_PAY_SUMMARY: 'Request Pay Summary',
            REQUEST_TRANSACTION_INVOICE: 'Request transaction invoice',
            REACTIVATE_ACCOUNT_EMAIL: "Reactivate Account Email"
        },

    },
    sms: {
        PHONE: '[PHONE]',
        LINK: '[LINK]',
        templates: {
            INVITATION_MESSAGE: "Hello, [PHONE] \nYour child wants to use the Chat-demo App for organising their school work. \n       Create an account if yet not created and send them their code to get them started! \nLink to App store\
			\n \
			\nRegards, \chat-demo App"
        }
    },
    masterOtpKey: 1234
});
// ========================== Export Module End ============================