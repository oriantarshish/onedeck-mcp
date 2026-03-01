/**
 * Fetches documents from the system, including API key authentication. Requires env vars: api_key, auth_apikey_in, auth_apikey_key, base_url
 * 
 * This tool uses postman-runtime to execute the request,
 * ensuring full compatibility with Postman collections.
 */
import { executeRequest } from '../../../lib/postmanExecutor.js';

// Original Postman request definition
const requestDefinition = {
  "name": "GET Documents",
  "request": {
    "method": "GET",
    "url": {
      "raw": "{{pan_mcp_base_url}}/documents?filters=[{\"id\":\"type\",\"value\":[\"Foo\",\"Bar\"]}]",
      "host": [
        "{{pan_mcp_base_url}}"
      ],
      "path": [
        "documents"
      ],
      "query": [
        {
          "key": "filters",
          "value": "[{\"id\":\"type\",\"value\":[\"Foo\",\"Bar\"]}]"
        }
      ]
    },
    "header": [
      {
        "key": "Content-Type",
        "value": "application/json"
      },
      {
        "key": "auth-token",
        "value": "{{pan_mcp_api_key}}"
      }
    ],
    "body": null,
    "auth": {
      "type": "apikey",
      "apikey": [
        {
          "key": "key",
          "value": "{{pan_mcp_auth_apikey_key}}",
          "type": "string"
        },
        {
          "key": "value",
          "value": "{{pan_mcp_api_key}}",
          "type": "string"
        },
        {
          "key": "in",
          "value": "{{pan_mcp_auth_apikey_in}}",
          "type": "string"
        }
      ]
    }
  }
};

// Collection variables (will be merged with environment)
const collectionVariables = [
  {
    "key": "baseUrl",
    "value": "https://{{accountName}}.onedeck.com/api/v1"
  },
  {
    "key": "accountName",
    "value": ""
  },
  {
    "key": "apiKey",
    "value": ""
  },
  {
    "key": "boardId",
    "value": ""
  },
  {
    "key": "recordId",
    "value": ""
  },
  {
    "key": "documentId",
    "value": ""
  },
  {
    "key": "shareId",
    "value": ""
  },
  {
    "key": "mimeType",
    "value": ""
  },
  {
    "key": "fileName",
    "value": ""
  }
];

/**
 * Executes the API request
 *
 * @param {Object} args - Function arguments
 * @returns {Promise<Object>} API response
 */
const executeFunction = async ({}) => {
  return executeRequest(requestDefinition, {}, collectionVariables);
};

/**
 * Tool definition for GET Documents
 */
export const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'get_documents',
      description: 'Fetches documents from the system, including API key authentication. Requires env vars: api_key, auth_apikey_in, auth_apikey_key, base_url',
      parameters: {
        type: 'object',
        properties: {

        },
        required: []
      }
    }
  }
};
