/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_VITE_URLTITLE: string
	readonly VITE_TOKEN_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
