const mapping: Record<string, string> = {
  companies: 'company',
  'customer-requests': 'customer_request',
  employees: 'employee',
  users: 'user',
  'vacation-requests': 'vacation_request',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
