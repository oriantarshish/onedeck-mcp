/**
 * Updates a specific record within a board, including API key authentication. Requires env vars: api_key, auth_apikey_in, auth_apikey_key, base_url, board_id, record_id
 * 
 * This tool uses postman-runtime to execute the request,
 * ensuring full compatibility with Postman collections.
 */
import { executeRequest } from '../../../lib/postmanExecutor.js';

// Original Postman request definition
const requestDefinition = {
  "name": "PUT Update Record",
  "request": {
    "method": "PUT",
    "url": {
      "raw": "{{pan_mcp_base_url}}/boards/{{pan_mcp_board_id}}/records/{{pan_mcp_record_id}}",
      "host": [
        "{{pan_mcp_base_url}}"
      ],
      "path": [
        "boards",
        "{{boardId}}",
        "records",
        "{{recordId}}"
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
      "raw": "[\n  {\n    \"fieldId\": \"name\",\n    \"value\": \"Foo\"\n  },\n  {\n    \"fieldId\": \"1ff5d564-2ea6-4053-8c20-fac2ef32f029\",\n    \"value\": \"Foo\"\n  }\n]",
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
 * Tool definition for PUT Update Record
 */
export const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'put_update_record',
      description: 'Updates a specific record within a board, including API key authentication. Requires env vars: api_key, auth_apikey_in, auth_apikey_key, base_url, board_id, record_id',
      parameters: {
        type: 'object',
        properties: {

        },
        required: []
      }
    }
  }
};
