import credentialedProxyHandler from "utils/proxy/handlers/credentialed";

const widget = {
  api: "{url}/api/v1/{endpoint}",
  proxyHandler: credentialedProxyHandler,

  mappings: {
    active: {
      endpoint: "workflows?active=true&limit=250",
    },
    inactive: {
      endpoint: "workflows?active=false&limit=250",
    },
  },
};

export default widget;
