import { createAction, Property, OAuth2PropertyValue, PieceAuth } from "@activepieces/pieces-framework";

export const logAuthToken = createAction({
  name: 'log-auth-token',
  displayName: 'Log Auth Token',
  description: 'Logs the injected OAuth2 token for testing purposes',
  props: {
    testInput: Property.ShortText({
      displayName: 'Test Input',
      required: false,
    }),
  },
  async run({ auth, propsValue }) {
    // The OAuth2 token is available as auth.access_token for OAuth2PropertyValue
    let token: string | undefined = undefined;
    if (typeof auth === 'object' && auth !== null && 'access_token' in auth) {
      token = (auth as { access_token: string }).access_token;
      console.log(`Auth token: ${token}`);
    } else {
      console.log('No OAuth2 token found in auth object:', auth);
    }
    return {
      message: `Logged auth token: ${token}`,
      testInput: propsValue.testInput,
    };
  },
});