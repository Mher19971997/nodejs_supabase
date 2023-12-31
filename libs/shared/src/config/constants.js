const constants = {
  CONFIG_OPTIONS: 'CONFIG_OPTIONS',
  PASSWORD_REGEXP: `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#$%^&*()-_+=,./])(?=.{8,})`,
  USERNAME_REGEXP: `^[a-zA-Z0-9]+$`,
  EMAIL_REGEXP: `.*@textnpayme.com`,
  VERIFY_EMAIL: 'verify-contact',
  VERIFY_PHONE: 'verify-phone',
  FORGET_PASSWORD: 'forgot-password',
  ACCOUNT_DEACTIVATION: 'account-deactivation',
  ACCOUNT_REACTIVATION: 'account-reactivation',
  CHANGE_PASSWORD: 'change-password',
  VERIFY_PHONE_NUMBER: 'verify-phone-number',
  FORGET_PHONE_UMBER: 'forget-phone-number',
  CHANGE_PHONE_UMBER: 'change-phone-number',
  NOTIFICATION: 'notification',
  CHANGE_EMAIL: 'change-email',
  CHANGE_PHONE: 'change-phone',
  TEST_EMAIL: 'test-email',
  STATUS_UNKNOWN: 'unknown',
  STATUS_PENDING: 'pending',
  STATUS_SUCCESS: 'success',
  STATUS_SOLVED: 'solved',
  STATUS_VERIFIED: 'verified',
  STATUS_COMPLETED: 'completed',
  STATUS_UNREGISTERED: 'unregistered',
  STATUS_ENABLED: 'enabled',
  STATUS_DISABLED: 'disabled',
  STATUS_DELETED: 'deleted',
  STATUS_BLOCKED: 'blocked',

  APP_STATUS: 'not-read',
  STATUS_SUBMITTED: 'submitted',
  STATUS_APPROVED: 'Approved',
  STATUS_FAILED: 'failed',
  STATUS_FAIL_SEND: 'failSend',
  STATUS_SUCCESS_SEND: 'successSend',
  STATUS_SUCCESS_GET: 'successGet',
  STATE_DEFAULT: 'default',
  STATE_NOT_DEFAULT: 'not-default',
  SOURCE_PRIMARY: 'primary',
  SOURCE_SECONDARY: 'secondary',
  STATUS_COMING_SOON: 'coming_soon',
  AUTH_SERVICE: 'AUTHService',
  INFO_SERVICE: 'InfoService',
  LEARNING_SERVICE: 'LearningService',
  SUBSCRIPTION_SERVICE: 'SubscriptionService',
  PURCHASE_SERVICE: 'PurchaseService',
  SUPPORT_SERVICE: 'SupportService',
  PAYMENT_SERVICE: 'PaymentService',
  WALLET_SERVICE: 'WalletService',
  WORKER_SERVICE: 'WorkerService',
  USER_SERVICE: 'UserService',
  ADMIN_ROLE: 'admin',
  USER_ROLE: 'user',
  TITLE: 'title',
  BODY: 'body',
  BODY_ITALICS: 'bodyItalics',
  BODY_BOLD: 'bodyBold',
  BODY_BULLET: 'bodyBullet',
  HEADER1: 'header1',
  HEADER2: 'header2',
  LINE: 'line',
  SUB_PAGE: 'subPage',
  SUB_PAGE_BULLET: 'subPageBullet',
  CASE: 'case',
  STATUTE: 'statute',
  GENDERS: ['male', 'female', 'other'],
  DEFAULT_ORDER_ASC: [['updatedAt', 'ASC']],
  SEQUENCE_ORDER_ASC: [['sequence', 'ASC']],
  SEQUENCE_ORDER_DESC: { order: { sequence: 'DESC' } },
  LAST_ITEMS_ATTRIBUTES: { include: ['sequence', 'createdAt'] },
  REMOVE: 'remove',
  ADD: 'add',
  TRIAL: 'trial',
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  ANNUAL: 'annual',
  USER_FEEDBACK: 'userFeedback',
  TEMPLATE_CONTEXT: '{{content}}',
  EXCHANGE_WORKER: 'worker',
  EMAIL: 'email',
  PHONE: 'phone',
  SEND: 'send',
  RECEIVED: 'received',

  CONTACT_TYPE_FAVORIT: 'favorite',

  QUEUE_VERIFY_PHONE_NUMBER: 'verifyPhoneNumber',
  QUEUE_CHANGE_PHONE_NUMBER: 'changePhoneNumber',
  QUEUE_NOTIFICATION: 'notification',

  QUEUE_VERIFY_EMAIL: 'verifyContact',
  QUEUE_CHANGE_EMAIL: 'changeEmail',
  QUEUE_FORGET_PASSWORD: 'forgotPassword',
  QUEUE_ACCOUNT_DEACTIVATION: 'accountDeactivation',
  QUEUE_FORGET_PHONE_UMBER: 'forgotPassword',
  QUEUE_CHANGE_PASSWORD: 'changePassword',
  QUEUE_ACCOUNT_REACTIVATION: 'accountReactivation',
  IN_APP_PURCHASE_TYPE: 'inAppPurchases',
  IN_APP_PURCHASE_SUBMIT_TYPE: 'inAppPurchaseSubmissions',
  IN_APP_PURCHASE_PRICE_SCHEDULE_TYPE: 'inAppPurchasePriceSchedules',
  IN_APP_PURCHASE_PRICE_TYPE: 'inAppPurchasePrices',
  IN_APP_PURCHASE_PRICE_PINT_TYPE: 'inAppPurchasePrices',
  CONSUMABLE: 'CONSUMABLE',
  RENEWING_SUBSCRIPTION: 'RENEWING_SUBSCRIPTION',
  NON_CONSUMABLE: 'NON_CONSUMABLE',
  NON_RENEWING_SUBSCRIPTION: 'NON_RENEWING_SUBSCRIPTION',

  TRANSACTION_TYPE_WITHDRAW: 'withdraw',
  TRANSACTION_TYPE_DEPOSIT: 'deposit',

  NOTIFICATION_SUCCESS_WITHDRAW: 'successSendMoney',
  NOTIFICATION_FAILED_WITHDRAW: 'failSendMoney',
  NOTIFICATION_SUCCESS_DEPOSIT: 'getMoney',
  NOTIFICATION_FAILED_DEPOSIT: 'failGetMoney',
  NOTIFICATION_ADD_NEW_CONTACT: 'addNewConatct',
  NOTIFICATION_ADD_FAVORITE_CONTACT: 'addFavoritContact',
  NOTIFICATION_DELETE_FAVORITE_CONTACT: 'delateFavoritContact',
  NOTIFICATION_ADD_WALLET: 'addWalet',
  NOTIFICATION_DELETE_WALLET: 'delateWalet',
  NOTIFICATION_CHANGE_USERNAME: 'changeUsername',
  NOTIFICATION_CHANGE_PASSWORD: 'changePassword',
  NOTIFICATION_ACCOUNT_REACTIVATION: 'accountReactivation',
  NOTIFICATION_USER_REGISTER: 'userRegister',
  ACTION_TYPE: 'deleteAccount',
  EVENT_TAG_AUTH: 'auth-api',
  EVENT_TAG_MOBILE: 'mobile-api',
  CARD_TYPES: {
    ArCA: /^9051[0-9]{6,}$/,
    Visa: /^4[0-9]{6,}$/, // start with a 4.
    MasterCard:
      /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/,
    'American Express': /^3[47][0-9]{5,}$/, // start with 34 or 37.
    'Diners Club': /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/, // begin with 300 through 305, 36 or 38
    Discover: /^6(?:011|5[0-9]{2})[0-9]{3,}$/, // begin with 6011 or 65.
    Maestro:
      /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
    JCB: /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/ // begin with 2131, 1800 or 35.
  }
};
module.exports = constants;
