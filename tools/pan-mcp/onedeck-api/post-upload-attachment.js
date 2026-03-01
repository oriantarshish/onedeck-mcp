/**
 * Uploads an attachment to a specific board record, including file details and MIME type. Requires env vars: api_key, auth_apikey_in, auth_apikey_key, base_url, board_id, file_name, mime_type, record_id
 * 
 * This tool uses postman-runtime to execute the request,
 * ensuring full compatibility with Postman collections.
 */
import { executeRequest } from '../../../lib/postmanExecutor.js';

// Original Postman request definition
const requestDefinition = {
  "name": "POST Upload Attachment",
  "request": {
    "method": "POST",
    "url": {
      "raw": "{{pan_mcp_base_url}}/boards/{{pan_mcp_board_id}}/records/{{pan_mcp_record_id}}/attachments",
      "host": [
        "{{pan_mcp_base_url}}"
      ],
      "path": [
        "boards",
        "{{boardId}}",
        "records",
        "{{recordId}}",
        "attachments"
      ]
    },
    "header": [
      {
        "key": "Content-Type",
        "value": "{{pan_mcp_mime_type}}"
      },
      {
        "key": "auth-token",
        "value": "{{pan_mcp_api_key}}"
      },
      {
        "key": "x-file-name",
        "value": "{{pan_mcp_file_name}}"
      }
    ],
    "body": {
      "mode": "raw",
      "raw": ""
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
 * Tool definition for POST Upload Attachment
 */
export const apiTool = {
  function: executeFunction,
  definition: {
    type: 'function',
    function: {
      name: 'post_upload_attachment',
      description: 'Uploads an attachment to a specific board record, including file details and MIME type. Requires env vars: api_key, auth_apikey_in, auth_apikey_key, base_url, board_id, file_name, mime_type, record_id',
      parameters: {
        type: 'object',
        properties: {

        },
        required: []
      }
    }
  }
};
