# install all the needed packages
```bash
uv add python_decouple  "mcp[cli]" httpx "psycopg[binary]" fastmcp stytch sqlmodel authlib
```

# to run the mcp server
```bash
uv run ./main.py
```


### - To add an MCP server to your workspace (Recommanded):

- 1 Create a `.vscode/mcp.json` file in your workspace.
- 2 Select the Add Server button to add a template for a new server. VS Code provides IntelliSense for the MCP server configuration file.
- 3 press enter
- 4 put this in `.vscode/mcp.json` to override the default generated mcp config code:

```json
{
	"servers": {
		"advanced-mcp-server-oauth-database": {
			"url": "https://f2rjbkkw8ycg.share.zrok.io/mcp",
			"type": "http"
		}
	},
	"inputs": []
}
```




```bash

```
