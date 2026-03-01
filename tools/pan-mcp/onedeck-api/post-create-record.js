/**
 * Creates a new record in a specific board, including API key authentication. Requires env vars: api_key, auth_apikey_in, auth_apikey_key, base_url, board_id
 * 
 * This tool uses postman-runtime to execute the request,
 * ensuring full compatibility with Postman collections.
 */
import { executeRequest } from '../../../lib/postmanExecutor.js';

// Original Postman request definition
const requestDefinition = {
  "name": "POST Create Record",
  "request": {
    "method": "POST",
    "url": {
      "raw": "{{pan_mcp_base_url}}/boards/{{pan_mcp_board_id}}/records",
      "host": [
        "{{pan_mcp_base_url}}"
      ],
      "path": [
        "boards",
        "{{boardId}}",
        "records"
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
    "body": {
      "mode": "raw",
      "raw": "{\n  \"name\": \"Foo\",\n  \"fields\": [\n    {\n      \"id\": \"1ff5d564-2ea6-4053-8c20-fac2ef32f029\",\n      \"value\": \"Foo\"\n    }\n  ]\n}",
      "options": {
        "raw": {
          "language": "json"
        }
      }
    },
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
 * Tool definition for POST Create Record
 */
export const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'post_create_record',
      description: 'Creates a new record in a specific board, including API key authentication. Requires env vars: api_key, auth_apikey_in, auth_apikey_key, base_url, board_id',
      parameters: {
        type: 'object',
        properties: {

        },
        required: []
      }
    }
  }
};
