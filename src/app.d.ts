// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import PocketBase from "pocketbase";

declare global {
	// and what to do when importing types
	declare namespace App {
		interface Locals {
			pb: PocketBase
		}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
	// eslint-disable-next-line no-var
}
