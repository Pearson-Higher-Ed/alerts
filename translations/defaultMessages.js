import { defineMessages } from 'react-intl';

export const messages = defineMessages({
  successAlert: {
    id: 'successTest',
    alertType: 'Success',
    alertMessage: `Uh oh, we weren't able to verify your email address. Try resending the email.`
  },
  errorAlert: {
    id: 'errorTest',
    alertType: 'Error',
    alertMessage: 'Your email was verified! Your old address may receive messages for up to 48 hours while we update our systems.'
  }
});
