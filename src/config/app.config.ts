interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Data Analyst'],
  customerRoles: [],
  tenantRoles: ['Data Analyst'],
  tenantName: 'Team',
  applicationName: 'SALES ANALYTICS - AGENT PERFORMANCE REVIEW',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Read user data', 'Read team data', 'Analyze user data', 'Analyze team data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/b0696882-7d2e-401b-89c8-580593cf70cd',
};
