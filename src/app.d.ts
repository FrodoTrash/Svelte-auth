// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { PrismaClient } from "@prisma/client";

declare global {
	// and what to do when importing types
	namespace App {
		// interface Locals {}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
	// eslint-disable-next-line no-var
	var prisma: PrismaClient
}
