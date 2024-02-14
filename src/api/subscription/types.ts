export type SubscriptionFormData = {
  firstName: string;
  lastName: string;
  email: string;
  section: string;
  gender: string;
};

export type ResponseSubscription = {
  message: string;
  details: null | SubscriptionFormData;
};
