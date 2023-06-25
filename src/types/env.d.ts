/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_VITE_URLTITLE: string
	readonly VITE_TOKEN_KEY: string
	readonly VITE_AZURE_CLIENT_ID: string
	readonly VITE_AZURE_TENANT_ID: string
	readonly VITE_OAUTH_REDIRECT_URI: string
}
interface ImportMeta {
	readonly env: ImportMetaEnv
}
