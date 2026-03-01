/**
 * Sends an invite to share a studio item via shareId. Requires env vars: api_key, auth_apikey_in, auth_apikey_key, base_url
 * 
 * This tool uses postman-runtime to execute the request,
 * ensuring full compatibility with Postman collections.
 */
import { executeRequest } from '../../../lib/postmanExecutor.js';

// Original Postman request definition
const requestDefinition = {
  "name": "POST Invite",
  "request": {
    "method": "POST",
    "url": {
      "raw": "{{pan_mcp_base_url}}/share-studio/{{pan_mcp_share_id}}/invite",
      "host": [
        "{{pan_mcp_base_url}}"
      ],
      "path": [
        "share-studio",
        "{{shareId}}",
        "invite"
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
      "raw": "{\n  \"email\": \"john@email.com\",\n  \"firstName\": \"John\",\n  \"lastName\": \"James\",\n  \"recordId\": \"1f242e49-767e-42e0-b16f-3c0a117b4c8e\"\n}",
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
const executeFunction = async ({ shareId }) => {
  return executeRequest(requestDefinition, { shareId }, collectionVariables);
};

/**
 * Tool definition for POST Invite
 */
export const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'post_invite',
      description: 'Sends an invite to share a studio item via shareId. Requires env vars: api_key, auth_apikey_in, auth_apikey_key, base_url',
      parameters: {
        type: 'object',
        properties: {
          'shareId': {
            type: 'string',
            description: 'The shareId parameter'
          }
        },
        required: ['shareId']
      }
    }
  }
};
